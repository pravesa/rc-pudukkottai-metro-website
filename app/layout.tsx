import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rotary Club of Pudukkottai Metro | Service Above Self',
  description:
    'The Rotary Club of Pudukkottai Metro is a newly chartered Rotary International club (District 3000, Club ID 227596) in Pudukkottai, Tamil Nadu, dedicated to service, fellowship and community development.',
  keywords:
    'Rotary Club Pudukkottai Metro, Rotary District 3000, Service Above Self, Rotary International India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={barlowCondensed.variable}
      suppressHydrationWarning
    >
      <body className={barlowCondensed.className}>{children}</body>
    </html>
  );
}
