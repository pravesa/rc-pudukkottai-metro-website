import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Heart, Award } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Fellowship',
    description:
      'We build meaningful connections between professionals and community leaders who share a passion for service.',
  },
  {
    icon: Globe,
    title: 'Community Service',
    description:
      'From local health camps to youth empowerment, we take action on issues that matter most to Pudukkottai.',
  },
  {
    icon: Heart,
    title: 'Humanitarian Values',
    description:
      "Guided by Rotary's core values of integrity, service, diversity, and leadership in everything we do.",
  },
  {
    icon: Award,
    title: 'Professional Growth',
    description:
      'Rotary brings together professionals across industries who learn from each other and grow together.',
  },
];

export default function About() {
  return (
    <section id='about' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            Who We Are
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            About Our Club
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            The Rotary Club of Pudukkottai Metro is a newly chartered club under
            Rotary International District 3000, bringing together passionate
            individuals from Pudukkottai and surrounding areas who believe in
            the power of service to transform lives.
          </p>
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed mt-4'>
            As one of Rotary International&apos;s newest clubs — chartered in
            2026 — we are building a vibrant community of members ready to make
            a difference. We meet every Saturday at 7:00 PM, twice a month, at
            Rajam Mahal, Anna Chattiram, Pudukkottai.
          </p>
        </div>

        {/* Pillars */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className='focus-card card-hover border border-gray-100 shadow-sm rounded-none'
              >
                <CardContent className='pt-8 pb-8 px-6'>
                  <div className='w-12 h-12 rounded-full bg-[#e8f0fa] flex items-center justify-center mb-5'>
                    <Icon size={22} className='text-[#17458f]' />
                  </div>
                  <h3 className='font-display text-xl font-bold text-[#17458f] uppercase tracking-wide mb-3'>
                    {pillar.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Rotary International Band */}
        <div className='mt-16 bg-[#17458f] text-white rounded-sm p-10 flex flex-col md:flex-row items-center gap-8'>
          <div className='shrink-0'>
            <Image
              src='/rotary-logo.png'
              alt='Rotary International'
              width={96}
              height={96}
            />
          </div>
          <div>
            <h3 className='font-display text-2xl font-bold uppercase tracking-wide mb-2'>
              Part of a Global Network
            </h3>
            <p className='text-white/80 leading-relaxed max-w-2xl'>
              Rotary International is a global network of 1.4 million neighbors,
              friends, leaders, and problem-solvers with a shared vision:
              creating lasting positive change in communities around the world.
              As a member of Rotary District 3000, the Rotary Club of
              Pudukkottai Metro is connected to this powerful tradition of
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
