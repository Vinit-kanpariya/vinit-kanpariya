import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other service
      auth: {
        user: 'kanpariyavinit@gmail.com', // Your Gmail
        pass: 'Vinit@1207', // Your specific password (Not your Gmail password)
      },
    });

    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com', // The same or different email to receive messages
      subject: 'New Contact Form Portfolio',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
