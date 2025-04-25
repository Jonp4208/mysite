import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate the required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a real application, you would send this data to your email service
    // or database. For this example, we'll just log it and return success.
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

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
