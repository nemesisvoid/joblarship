import { Html, Head, Preview, Body, Container, Section, Text } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactFormEmail({ name, email, phone, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>📬 New Contact Form Submission</Text>
            <Text style={label}>Name:</Text>
            <Text>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text>{email}</Text>

            <Text style={label}>Phone:</Text>
            <Text>{phone}</Text>

            <Text style={label}>Message:</Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '30px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const label = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginTop: '5px',
};
