import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined');
    return NextResponse.json({ error: 'Email service configuration missing' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { fullName, email, tourType, selectedDate, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Chinggis Khaan Expeditions <onboarding@resend.dev>',
      to: ['chinggiskhanexpeditions@gmail.com'],
      subject: `New Expedition Inquiry from ${fullName}`,
      html: `
        <h1>New Inquiry Received</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tour Type:</strong> ${tourType}</p>
        <p><strong>Selected/Preferred Date:</strong> ${selectedDate || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
