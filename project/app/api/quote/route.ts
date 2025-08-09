import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteFormData = await request.json();
    const { name, email, company, projectType, budget, timeline, description } = body;

    // Basic validation
    if (!name || !email || !projectType || !budget || !timeline || !description) {
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
      <h2>New Quote Request from Portfolio</h2>
      
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company || 'Not provided'}</li>
      </ul>
      
      <h3>Project Details:</h3>
      <ul>
        <li><strong>Project Type:</strong> ${projectType}</li>
        <li><strong>Budget Range:</strong> ${budget}</li>
        <li><strong>Timeline:</strong> ${timeline}</li>
      </ul>
      
      <h3>Project Description:</h3>
      <p>${description.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This quote request was submitted from your portfolio website.</em></p>
    `;

    // Send email to you
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'saad.mney1@gmail.com',
      subject: `New Quote Request from ${name} - ${projectType}`,
      html: emailContent,
      replyTo: email,
    });

    // Send confirmation email to client
    const confirmationContent = `
      <h2>Thank you for your quote request!</h2>
      
      <p>Hi ${name},</p>
      
      <p>Thank you for reaching out! I've received your quote request for your <strong>${projectType}</strong> project.</p>
      
      <h3>What happens next?</h3>
      <ul>
        <li>I'll review your project details within 24 hours</li>
        <li>I'll prepare a detailed proposal with timeline and pricing</li>
        <li>We can schedule a call to discuss your project in detail</li>
      </ul>
      
      <p>In the meantime, feel free to check out my portfolio and recent projects.</p>
      
      <p>Looking forward to potentially working together!</p>
      
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
      subject: 'Quote Request Received - Saad Mney Design',
      html: confirmationContent,
    });

    return NextResponse.json({ message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending quote request:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}