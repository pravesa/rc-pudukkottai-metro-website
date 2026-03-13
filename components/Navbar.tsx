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
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <div className='relative h-14 w-auto'>
              {/* White version for hero (un-scrolled) — achieved via CSS filter */}
              <Image
                src='/logo.png'
                alt='Rotary Club of Pudukkottai Metro'
                width={220}
                height={57}
                className={cn(
                  'h-14 w-auto object-contain transition-all duration-300',
                  !scrolled && 'brightness-0 invert', // makes the blue+gold logo white on dark hero
                )}
                priority
              />
            </div>
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
              className='bg-rotary-gold hover:bg-yellow-400! text-white font-semibold px-5 text-sm rounded-sm'
            >
              <a href='#membership'>Join Us</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t border-gray-100 shadow-lg'>
          {/* Logo in mobile menu header */}
          <div className='px-4 pt-4 pb-2 border-b border-gray-100'>
            <Image
              src='/logo.png'
              alt='Rotary Club of Pudukkottai Metro'
              width={180}
              height={46}
              className='h-9 w-auto object-contain'
            />
          </div>
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
              className='w-full bg-rotary-gold hover:bg-yellow-400! text-white font-semibold rounded-sm'
            >
              <a
                href='#membership'
                onClick={() => setIsOpen(false)}
                className='mt-2'
              >
                Join Us
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
