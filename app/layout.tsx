import type { Metadata } from 'next';
import { Barlow_Condensed, Source_Serif_4, Inter } from 'next/font/google';
import './globals.css';

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${barlowCondensed.variable} ${sourceSerif4.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
