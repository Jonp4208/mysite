import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@/lib/supabase';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
  },
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, service, message, subject } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get IP address and page URL
    const req = request as any; // Type assertion to access headers
    const ip_address = req.headers.get('x-forwarded-for') ||
                       req.headers.get('x-real-ip') ||
                       'unknown';

    const page_url = req.headers.get('referer') || undefined;

    // Log the submission for backup
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      subject,
      message,
      ip_address,
      page_url,
      timestamp: new Date().toISOString(),
    });

    // Save to Supabase
    try {
      const supabase = createClient();

      // Save submission to database
      const { data: submissionData, error: submissionError } = await supabase
        .from('submissions')
        .insert([
          {
            name,
            email,
            phone,
            service,
            subject,
            message,
            status: 'new',
            ip_address,
            page_url
          }
        ])
        .select('id')
        .single();

      if (submissionError) {
        console.error('Error saving submission to Supabase:', submissionError);
        // Continue with email sending even if database save fails
      } else {
        console.log('Submission saved to Supabase with ID:', submissionData.id);
      }
    } catch (dbError) {
      console.error('Error connecting to Supabase:', dbError);
      // Continue with email sending even if database connection fails
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Email not sent.');
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message! We will get back to you soon.',
          note: 'Email sending is not configured yet.'
        },
        { status: 200 }
      );
    }

    // Prepare email content
    const emailSubject = subject
      ? `New Contact Form Submission: ${subject}`
      : service
        ? `New Contact Form Submission: ${service}`
        : 'New Contact Form Submission';

    const mailOptions = {
      from: `"Calhoun Web Creations" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      replyTo: email,
      subject: emailSubject,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
${service ? `Service: ${service}` : ''}
${subject ? `Subject: ${subject}` : ''}
Message: ${message}

Submitted on: ${new Date().toLocaleString()}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
  <p>You have received a new message from your website contact form.</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    ${phone ? `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
    </tr>
    ` : ''}
    ${service ? `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
    </tr>
    ` : ''}
    ${subject ? `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
    </tr>
    ` : ''}
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
    </tr>
  </table>

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    This message was submitted on ${new Date().toLocaleString()}
  </p>
  ${page_url ? `
  <p style="color: #666; font-size: 14px;">
    Submitted from: ${page_url}
  </p>
  ` : ''}
</div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
