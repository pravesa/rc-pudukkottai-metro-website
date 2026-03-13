'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#focus-areas', label: 'Areas of Focus' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#membership', label: 'Membership' },
  { href: '#meetings', label: 'Meetings' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-transparent',
      )}
    >
      {/* Gold top bar */}
      <div className='h-1 w-full bg-rotary-gold' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logos */}
          <Link href='/' className='flex items-center gap-3'>
            {/* Rotary wordmark + club name */}
            <Image
              src='/logo.png'
              alt='Rotary Club of Pudukkottai Metro'
              width={200}
              height={52}
              className={cn(
                'h-10 w-auto object-contain transition-all duration-300',
                !scrolled && 'brightness-0 invert',
              )}
              priority
            />

            {/* Separator */}
            <div
              className={cn(
                'w-px h-8 transition-colors duration-300',
                scrolled ? 'bg-gray-300' : 'bg-white/30',
              )}
            />

            {/* Club seal */}
            <Image
              src='/club-logo.jpg'
              alt='Rotary Club of Pudukkottai Metro seal'
              width={44}
              height={44}
              className='h-11 w-11 object-contain'
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link text-sm font-medium tracking-wide transition-colors pb-1',
                  scrolled
                    ? 'text-gray-700 hover:text-[#17458f]'
                    : 'text-white/90 hover:text-white',
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className='bg-rotary-gold hover:bg-yellow-500! text-white font-semibold px-5 text-sm rounded-sm cursor-pointer'
            >
              <a href='#membership'>Join Us</a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className={cn(
              'lg:hidden p-2',
              scrolled ? 'text-[#17458f]' : 'text-white',
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t border-gray-100 shadow-lg'>
          <nav className='flex flex-col px-4 py-4 gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='py-2 px-3 text-gray-700 hover:text-[#17458f] hover:bg-blue-50 rounded-md font-medium text-sm transition-colors'
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className='mt-2 w-full bg-rotary-gold hover:bg-yellow-500! text-white font-semibold rounded-sm cursor-pointer'
            >
              <a href='#membership' onClick={() => setIsOpen(false)}>
                Join Us
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
