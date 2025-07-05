import ContactForm from '@/components/misc/contact-form';

const ContactPage = () => {
  return (
    <section className='bg-gray-50 pb-24 pt-8'>
      <div className='container py-10'>
        <div className='mb-16'>
          <h2 className='text-4xl font-medium mb-3'>Get in Touch</h2>
          <p className='text-lg text-gray-600 max-w-xl'>
            We&apos;d love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
