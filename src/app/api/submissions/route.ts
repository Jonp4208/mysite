import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/db';
import Submission from '@/models/Submission';
import nodemailer from 'nodemailer';
import { isEditorOrAdmin } from '@/lib/auth';

// GET /api/submissions - Get all submissions
export async function GET(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page') || '1';
    
    // Build query
    const query: any = {};
    
    // Filter by status if specified
    if (status && ['new', 'read', 'replied', 'archived'].includes(status)) {
      query.status = status;
    }
    
    // Pagination
    const pageSize = limit ? parseInt(limit) : 10;
    const pageNumber = parseInt(page);
    const skip = (pageNumber - 1) * pageSize;
    
    // Get submissions
    const submissions = await Submission.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);
    
    // Get total count for pagination
    const total = await Submission.countDocuments(query);
    
    return NextResponse.json({
      submissions,
      pagination: {
        total,
        page: pageNumber,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching submissions' },
      { status: 500 }
    );
  }
}

// POST /api/submissions - Create a new submission (from contact form)
export async function POST(request: Request) {
  try {
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    const { name, email, phone, service, message } = body;
    
    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Create submission
    const submission = await Submission.create({
      name,
      email,
      phone,
      service,
      message,
      status: 'new',
    });
    
    // Send email notification if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
      const mailOptions = {
        from: `"Calhoun Web Creations" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              This message was submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      };
      
      await transporter.sendMail(mailOptions);
    }
    
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating submission:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// PUT /api/submissions - Update a submission status
export async function PUT(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    const { id, status, notes } = body;
    
    // Validate required fields
    if (!id || !status) {
      return NextResponse.json(
        { error: 'Submission ID and status are required' },
        { status: 400 }
      );
    }
    
    // Validate status
    if (!['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }
    
    // Check if submission exists
    const submission = await Submission.findById(id);
    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    // Update submission
    submission.status = status;
    if (notes !== undefined) {
      submission.notes = notes;
    }
    
    await submission.save();
    
    return NextResponse.json(submission);
  } catch (error: any) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while updating submission' },
      { status: 500 }
    );
  }
}

// POST /api/submissions/reply - Send a reply to a submission
export async function PATCH(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    const { id, subject, message } = body;
    
    // Validate required fields
    if (!id || !subject || !message) {
      return NextResponse.json(
        { error: 'Submission ID, subject, and message are required' },
        { status: 400 }
      );
    }
    
    // Check if submission exists
    const submission = await Submission.findById(id);
    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email credentials not configured' },
        { status: 500 }
      );
    }
    
    // Send reply email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: `"Calhoun Web Creations" <${process.env.EMAIL_USER}>`,
      to: submission.email,
      replyTo: process.env.EMAIL_USER,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Calhoun Web Creations</h2>
          <div style="white-space: pre-wrap;">${message}</div>
          <p style="margin-top: 30px; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 15px;">
            This is in response to your inquiry about ${submission.service} on ${new Date(submission.createdAt).toLocaleDateString()}.
          </p>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    // Update submission status
    submission.status = 'replied';
    await submission.save();
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending reply:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while sending reply' },
      { status: 500 }
    );
  }
}

// DELETE /api/submissions - Delete a submission
export async function DELETE(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Submission ID is required' },
        { status: 400 }
      );
    }
    
    // Check if submission exists
    const submission = await Submission.findById(id);
    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    // Delete submission
    await submission.deleteOne();
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while deleting submission' },
      { status: 500 }
    );
  }
}
