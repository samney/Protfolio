import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Email content
    const emailContent = `
      <h2>New Contact Form Message</h2>
      
      <h3>From:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      
      <h3>Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007cba; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <hr>
      <p><em>This message was sent from your portfolio contact form.</em></p>
    `;

    // Send email to you
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'saad.mney1@gmail.com',
      subject: `Contact Form: ${subject} - from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    // Send confirmation email to sender
    const confirmationContent = `
      <h2>Thank you for reaching out!</h2>
      
      <p>Hi ${name},</p>
      
      <p>Thanks for getting in touch! I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to reach out.</p>
      
      <h3>What happens next?</h3>
      <ul>
        <li>I'll personally review your message within 24 hours</li>
        <li>I'll get back to you with a thoughtful response</li>
        <li>If it's a project inquiry, we can schedule a call to discuss details</li>
      </ul>
      
      <p>In the meantime, feel free to explore my portfolio and recent work.</p>
      
      <p>Looking forward to connecting with you!</p>
      
      <p>Best regards,<br>
      <strong>Saad Mney</strong><br>
      Freelance UI/UX Designer<br>
      <a href="https://www.linkedin.com/in/mneys/">LinkedIn</a></p>
      
      <hr>
      <p><em>This is an automated confirmation email. Please don't reply to this email directly.</em></p>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Message Received - Saad Mney Design',
      html: confirmationContent,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}