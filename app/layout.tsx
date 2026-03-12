import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
