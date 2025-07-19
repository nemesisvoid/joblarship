import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Analytics } from '@vercel/analytics/next';

import { Geist, Geist_Mono, Open_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import AnalyticsProvider from '@/components/misc/analytics-provider';

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
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <AnalyticsProvider>{children}</AnalyticsProvider>
        <Analytics />
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} /> */}
      </body>
    </html>
  );
}
