'use server';
import ContactFormEmail from '@/components/email/contact-form-email';
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
      from: 'Joblarship <contact@joblarship.com>',
      subject: 'Contact Form Submission',
      to: 'joblarship@gmail.com',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, phone, message }),
    });
    if (data) return { success: 'Message sent successfully' };
    return { error: 'Failed to send email' };
  } catch (error) {
    console.log(error);
  }
};
