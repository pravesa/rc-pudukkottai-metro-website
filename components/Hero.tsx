import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 hero-gradient' />

      {/* Geometric overlay pattern */}
      <div className='absolute inset-0 opacity-10'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern
              id='grid'
              width='60'
              height='60'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 60 0 L 0 0 0 60'
                fill='none'
                stroke='white'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>

      {/* Large decorative wheel */}
      <div className='absolute right-[-8%] top-[-10%] opacity-10'>
        <svg
          viewBox='0 0 600 600'
          width='600'
          height='600'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='300'
            cy='300'
            r='280'
            stroke='white'
            strokeWidth='20'
            fill='none'
          />
          <circle cx='300' cy='300' r='80' fill='white' />
          <circle
            cx='300'
            cy='300'
            r='50'
            fill='transparent'
            stroke='transparent'
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 300 + 80 * Math.cos(rad);
            const y1 = 300 + 80 * Math.sin(rad);
            const x2 = 300 + 220 * Math.cos(rad);
            const y2 = 300 + 220 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke='white'
                strokeWidth='24'
              />
            );
          })}
          <circle
            cx='300'
            cy='300'
            r='220'
            stroke='white'
            strokeWidth='20'
            fill='none'
          />
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'>
        <div className='max-w-3xl'>
          <Badge className='mb-6 bg-[#f7a81b]/20 text-[#f7a81b] border border-[#f7a81b]/40 font-display text-xs tracking-widest uppercase px-4 py-1.5'>
            Rotary District 3000 · Club ID 227596
          </Badge>

          <h1 className='font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white uppercase leading-none tracking-wide mb-6'>
            Rotary Club
            <br />
            <span className='text-[#f7a81b]'>of Pudukkottai</span>
            <br />
            <span className='text-white/90'>Metro</span>
          </h1>

          <div className='h-1 w-24 bg-[#f7a81b] mb-8' />

          <p className='font-serif-custom text-xl text-white/80 leading-relaxed mb-10 max-w-xl'>
            A newly chartered Rotary club in the heart of Pudukkottai, Tamil
            Nadu — dedicated to service, fellowship, and creating lasting change
            in our community.
          </p>

          <p className='font-display text-2xl tracking-widest text-[#f7a81b] uppercase mb-10 font-semibold'>
            &ldquo; Service Above Self &rdquo;
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <a href='#membership'>
              <Button className='bg-[#f7a81b] hover:bg-yellow-400 text-white font-display text-base tracking-wider uppercase px-8 py-6 rounded-sm font-bold'>
                Become a Member
              </Button>
            </a>
            <a href='#about'>
              <Button
                variant='outline'
                className='border-white text-white bg-transparent hover:bg-white hover:text-[#17458f] font-display text-base tracking-wider uppercase px-8 py-6 rounded-sm font-bold'
              >
                Discover More
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className='mt-16 grid grid-cols-3 gap-6 max-w-sm'>
            {[
              { label: 'Chartered', value: '2026' },
              { label: 'District', value: '3000' },
              { label: 'Club ID', value: '227596' },
            ].map((stat) => (
              <div key={stat.label} className='text-center'>
                <p className='font-display text-3xl font-extrabold text-white'>
                  {stat.value}
                </p>
                <p className='text-white/60 text-xs uppercase tracking-wider mt-1'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href='#about'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2'
      >
        <span className='text-xs uppercase tracking-widest font-display'>
          Scroll
        </span>
        <ChevronDown size={20} className='animate-bounce' />
      </a>
    </section>
  );
}
