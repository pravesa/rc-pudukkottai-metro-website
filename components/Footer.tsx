import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className='bg-[#0d2251] text-white'>
      {/* Gold top bar */}
      <div className='h-1 w-full bg-rotary-gold' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='mb-5'>
              <Image
                src='/logo.png'
                alt='Rotary Club of Pudukkottai Metro'
                width={240}
                height={62}
                className='h-14 w-auto object-contain brightness-0 invert'
              />
            </div>
            <p className='text-white/60 text-sm leading-relaxed mb-4 max-w-sm'>
              A newly chartered Rotary International club committed to service,
              fellowship, and community development in Pudukkottai, Tamil Nadu.
            </p>
            <p className='font-display text-[#f7a81b] uppercase tracking-widest text-sm font-semibold'>
              Service Above Self
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-display text-xs tracking-widest uppercase text-[#f7a81b] font-bold mb-5'>
              Quick Links
            </h4>
            <ul className='space-y-2.5'>
              {[
                { href: '#about', label: 'About the Club' },
                { href: '#focus-areas', label: 'Areas of Focus' },
                { href: '#leadership', label: 'Leadership' },
                { href: '#membership', label: 'Membership' },
                { href: '#meetings', label: 'Meetings' },
                { href: '#contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-white/60 hover:text-white text-sm transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Club Info */}
          <div>
            <h4 className='font-display text-xs tracking-widest uppercase text-[#f7a81b] font-bold mb-5'>
              Club Details
            </h4>
            <div className='space-y-3 text-sm text-white/60'>
              <p>
                <span className='text-white/40 text-xs uppercase tracking-wider block mb-0.5'>
                  District
                </span>
                Rotary District 3000
              </p>
              <p>
                <span className='text-white/40 text-xs uppercase tracking-wider block mb-0.5'>
                  Club ID
                </span>
                227596
              </p>
              <p>
                <span className='text-white/40 text-xs uppercase tracking-wider block mb-0.5'>
                  Chartered
                </span>
                2026
              </p>
              <p>
                <span className='text-white/40 text-xs uppercase tracking-wider block mb-0.5'>
                  Meets
                </span>
                Saturday at 7:00 PM
                <br />
                <span className='text-xs'>Twice a month</span>
              </p>
              <p>
                <span className='text-white/40 text-xs uppercase tracking-wider block mb-0.5'>
                  Email
                </span>
                <a
                  href='mailto:pudukkottaimetro@gmail.com'
                  className='hover:text-[#f7a81b] transition-colors'
                >
                  pudukkottaimetro@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className='my-10 bg-white/10' />

        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40'>
          <p>
            © {new Date().getFullYear()} Rotary Club of Pudukkottai Metro. All
            rights reserved.
          </p>
          <p>
            A member of{' '}
            <a
              href='https://www.rotary.org'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#f7a81b] hover:text-yellow-300 transition-colors'
            >
              Rotary International
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
