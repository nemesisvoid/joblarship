'use client';
import { AlertCircleIcon, CheckCircleIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';
import { SendMail } from '@/app/action/send-email';
import { Textarea } from '../ui/textarea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    try {
      const res = await SendMail(formData);
      setIsSubmitting(false);

      if (res?.success) setSubmitSuccess(true);
      console.log(res?.success);
      if (res?.error) setErrors({ error: res?.error });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon className='w-6 h-6' />,
      label: 'Email',
      value: 'joblarship@gmail.com',
      description: 'Send us a mail anytime!',
    },
    {
      icon: <PhoneIcon className='w-6 h-6' />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: <MapPinIcon className='w-6 h-6' />,
      label: 'Office',
      value: '123 Business Ave',
      description: 'Suite 100, City, State 12345',
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/joblarship?utm_source=qr&igsh=aXpjdndsazdzazZx',
      icon: <BsInstagram className='w-6 h-6' />,
    },
    {
      href: '',
      icon: <BsTwitterX className='w-6 h-6' />,
    },
    {
      href: 'https://www.facebook.com/share/15oZyTQtxU/',
      icon: <BsFacebook className='w-6 h-6' />,
    },
  ];
  return (
    <div className='grid lg:grid-cols-3 gap-12'>
      {/* Contact Info */}
      <div className='lg:col-span-1'>
        <div className='bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-fit'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>Contact Information</h3>

          <div className='space-y-6'>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className='flex items-start space-x-4 group'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg flex items-center justify-center text-orange-400 group-hover:from-orange-200 group-hover:to-orange-200 transition-all duration-200'>
                  {item.icon}
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-1'>{item.label}</h4>
                  <p className='text-gray-900 font-medium mb-1'>{item.value}</p>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8 pt-8 border-t border-gray-100'>
            <h4 className='text-lg font-semibold text-gray-900 mb-4'>Follow Us</h4>
            <div className='flex space-x-3'>
              {socialLinks.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-orange-500 transition-all duration-200'>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className='lg:col-span-2'>
        <div className='bg-white rounded-2xl shadow-xl border border-gray-100 p-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>Send us a Message</h3>

          {submitSuccess && (
            <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3'>
              <CheckCircleIcon className='w-5 h-5 text-green-600 flex-shrink-0' />
              <p className='text-green-800'>Thank you for your message! We will get back to you soon.</p>
            </div>
          )}

          {errors.error && (
            <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3'>
              <AlertCircleIcon className='w-5 h-5 text-red-600 flex-shrink-0' />
              <p className='text-red-800'>There was an error sending your message. Please try again.</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  Full Name *
                </label>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-6 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-20 ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder='Enter your full name'
                />
                {errors.name && (
                  <p className='mt-1 text-sm text-red-600 flex items-center space-x-1'>
                    <AlertCircleIcon className='w-4 h-4' />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  Email Address *
                </label>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-6 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-20 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder='Enter your email'
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-red-600 flex items-center space-x-1'>
                    <AlertCircleIcon className='w-4 h-4' />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  Phone Number
                </label>
                <Input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-6 rounded-lg border-2 border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-20 focus:border-blue-500'
                  placeholder='phone no'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold text-gray-900 mb-2'>
                Message *
              </label>
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-20 ${
                  errors.message ? 'border--300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder='Tell us how we can help you...'
              />
              {errors.message && (
                <p className='mt-1 text-sm text-red-600 flex items-center space-x-1'>
                  <AlertCircleIcon className='w-4 h-4' />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className='flex items-center justify-between pt-6'>
              <p className='text-sm text-gray-600'>* Required fields</p>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2  focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:transform-none flex items-center space-x-2'>
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <SendIcon className='w-5 h-5' />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
