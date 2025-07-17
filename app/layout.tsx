import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { Geist, Geist_Mono, Open_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Joblarship',
    default: 'Joblarship',
  },
  description: 'An online platform for job opportunities',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} ${geistSans.variable} ${geistMono.variable}  antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
