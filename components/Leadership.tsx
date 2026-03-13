'use client';
import Image from 'next/image';
import { useState } from 'react';

const leaders = [
  {
    role: 'President',
    name: 'P Harihara Sudhakaran',
    initials: 'HS',
    photo: '/leaders/president.jpg',
  },
  {
    role: 'Executive Secretary / Director',
    name: 'J Rajendran',
    initials: 'JR',
    photo: '/leaders/executive-secretary.jpg',
  },
  {
    role: 'Secretary',
    name: 'C Parthiban',
    initials: 'CP',
    photo: '/leaders/secretary.jpg',
  },
  {
    role: 'Treasurer',
    name: 'S Kamalakannan',
    initials: 'SK',
    photo: '/leaders/treasurer.jpg',
  },
];

function LeaderCard({ leader }: { leader: (typeof leaders)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className='group card-hover bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col'>
      {/* Photo — fixed height keeps cards compact on large screens */}
      <div className='relative w-full h-64 overflow-hidden bg-gray-100'>
        {/* Initials fallback */}
        <div className='absolute inset-0 bg-[#17458f] flex items-center justify-center'>
          <span className='font-display font-extrabold text-white/20 text-8xl select-none'>
            {leader.initials}
          </span>
        </div>

        {/* Photo */}
        {!imgError && (
          <Image
            src={leader.photo}
            alt={leader.name}
            fill
            className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Info strip */}
      <div className='px-5 py-4 border-t-[3px] border-[#17458f] flex flex-col gap-1'>
        <span className='font-display text-xs text-[#17458f] tracking-widest uppercase font-bold'>
          {leader.role}
        </span>
        <p className='font-display text-xl font-bold text-gray-800 uppercase tracking-wide leading-tight'>
          {leader.name}
        </p>
        <p className='text-gray-400 text-xs uppercase tracking-wider font-medium'>
          RY 2025–26
        </p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id='leadership' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            Our Leadership
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            Office Bearers
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            Our club is led by dedicated members who volunteer their time,
            talent, and energy to guide our club&apos;s mission towards service
            and community development in Pudukkottai.
          </p>
        </div>

        {/* Cards — constrained width so 3 cards don't stretch across full 7xl container */}
        <div className='max-w-4xl mb-16'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {leaders.map((leader) => (
              <LeaderCard key={leader.role} leader={leader} />
            ))}
          </div>
        </div>

        {/* Rotary Year Banner */}
        <div className='bg-[#f5f7fb] border-l-4 border-[#f7a81b] p-8'>
          <div className='flex flex-col md:flex-row md:items-center gap-4'>
            <div className='flex-1'>
              <h3 className='font-display text-xl font-bold text-[#17458f] uppercase tracking-wide mb-2'>
                Rotary Year 2025–26
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed max-w-xl'>
                Our inaugural year! The Rotary Club of Pudukkottai Metro was
                chartered in 2026. We are actively building our leadership team
                and welcoming passionate members who want to lead service
                projects in our community.
              </p>
            </div>
            <div className='shrink-0 text-center'>
              <p className='font-display text-5xl font-extrabold text-[#17458f]'>
                2026
              </p>
              <p className='text-[#0067c8] text-xs uppercase tracking-widest font-semibold mt-1'>
                Charter Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
