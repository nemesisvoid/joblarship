'use server';
import { Resend } from 'resend';

interface SendMailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export const SendMail = async ({ name, email, phone, message }: SendMailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      to: 'samsonajibade40@gmail.com',
    });
    console.log(data, error);
    if (data) return { success: 'Message sent successfully' };

    if (error) return { error: 'Failed to send email' };

    if (error) throw new Error('Failed to send email');
  } catch (error) {
    console.log(error);
  }
};
