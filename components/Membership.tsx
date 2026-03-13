import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, BookOpen, Globe } from 'lucide-react';

const benefits = [
  'Join a global network of 1.4 million Rotarians across 200+ countries',
  'Develop professional skills and leadership abilities',
  'Make a real difference through community service projects',
  'Build meaningful friendships and business connections',
  "Access to Rotary International's vast resources and training",
  'Participate in vocational, cultural and humanitarian exchanges',
  'Be part of a club built on integrity, service, diversity and leadership',
];

const memberTypes = [
  {
    icon: Users,
    title: 'Active Members',
    description:
      'Full membership for professionals and community leaders who want to participate in service projects and club activities.',
    color: '#17458f',
  },
  {
    icon: BookOpen,
    title: 'Honorary Members',
    description:
      'Bestowed upon individuals who have rendered distinguished service to the cause of international understanding and goodwill.',
    color: '#0067c8',
  },
  {
    icon: Globe,
    title: 'Corporate Members',
    description:
      "Businesses and organizations can support Rotary's work through corporate membership and partnership programs.",
    color: '#f7a81b',
  },
];

const members = [
  { name: 'P. Hari Hara Sudhakaran', admitted: 'Feb 2026' },
  { name: 'J. Rajendran', admitted: 'Feb 2026' },
  { name: 'C. Parthiban', admitted: 'Feb 2026' },
  { name: 'S. Kamalakannan', admitted: 'Feb 2026' },
  { name: 'D. Armstrong', admitted: 'Feb 2026' },
  { name: 'S. Basheer Ahamed', admitted: 'Feb 2026' },
  { name: 'G. Baskar', admitted: 'Feb 2026' },
  { name: 'Er. P. Ganesan', admitted: 'Feb 2026' },
  { name: 'A. John Jegadeeesh', admitted: 'Feb 2026' },
  { name: 'V. Karthikeyan', admitted: 'Feb 2026' },
  { name: 'A. Neelakandan', admitted: 'Feb 2026' },
  { name: 'C. Palaniyappan', admitted: 'Feb 2026' },
  { name: 'G. Prabakaran', admitted: 'Feb 2026' },
  { name: 'S. Sheik Yasar', admitted: 'Feb 2026' },
  { name: 'S. Vijayan', admitted: 'Feb 2026' },
  { name: 'A. Abdul Rahman', admitted: 'Feb 2026' },
  { name: 'Santhiyagu A', admitted: 'Mar 2026' },
  { name: 'B. Abdul Ajees', admitted: 'Mar 2026' },
  { name: 'A. Balamurugan', admitted: 'Mar 2026' },
  { name: 'C.T. Lakshmanan', admitted: 'Mar 2026' },
  { name: 'K. Palaniyappan', admitted: 'Mar 2026' },
  { name: 'C. Ramachandran', admitted: 'Mar 2026' },
  { name: 'S. Ramesh', admitted: 'Mar 2026' },
  { name: 'N.K. Saravanan', admitted: 'Mar 2026' },
  { name: 'P. Thiyagarajan', admitted: 'Mar 2026' },
  { name: 'K. Veeramani', admitted: 'Mar 2026' },
  { name: 'G. Vijayan', admitted: 'Mar 2026' },
];

export default function Membership() {
  return (
    <section id='membership' className='py-24 bg-[#f5f7fb]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            Join the Movement
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            Become a Member
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            Rotary membership is more than a title — it&apos;s a commitment to
            making the world a better place. As a founding member of the Rotary
            Club of Pudukkottai Metro, you have the rare opportunity to shape
            this club from day one.
          </p>
        </div>

        {/* Benefits + Member Types */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16'>
          {/* Benefits */}
          <div>
            <h3 className='font-display text-2xl font-bold text-[#17458f] uppercase tracking-wide mb-6'>
              Why Join Us?
            </h3>
            <ul className='space-y-3 mb-10'>
              {benefits.map((benefit, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <CheckCircle
                    size={18}
                    className='text-rotary-gold mt-0.5 shrink-0'
                  />
                  <span className='text-gray-700 text-sm leading-relaxed'>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className='mt-10 p-6 bg-[#17458f] rounded-sm text-white'>
              <p className='font-display text-lg font-bold uppercase tracking-wide mb-2'>
                Ready to Make a Difference?
              </p>
              <p className='text-white/75 text-sm mb-5'>
                Reach out to us to learn more about membership and how you can
                be a founding member of the Rotary Club of Pudukkottai Metro.
              </p>

              <Button
                asChild
                className='bg-rotary-gold hover:bg-yellow-400! text-white font-display font-bold tracking-wider uppercase rounded-sm px-6'
              >
                <a href='mailto:pudukkottaimetro@gmail.com'>Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Membership Types */}
          <div className='space-y-4'>
            <h3 className='font-display text-2xl font-bold text-[#17458f] uppercase tracking-wide mb-6'>
              Membership Types
            </h3>
            {memberTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.title}
                  className='card-hover border border-gray-100 shadow-sm rounded-none overflow-hidden'
                >
                  <CardContent className='p-0'>
                    <div className='flex'>
                      <div
                        className='w-2 shrink-0'
                        style={{ backgroundColor: type.color }}
                      />
                      <div className='p-5 flex items-start gap-4'>
                        <div
                          className='w-10 h-10 rounded-full flex items-center justify-center shrink-0'
                          style={{ backgroundColor: `${type.color}15` }}
                        >
                          <Icon size={18} style={{ color: type.color }} />
                        </div>
                        <div>
                          <h4
                            className='font-display font-bold text-base uppercase tracking-wide mb-1'
                            style={{ color: type.color }}
                          >
                            {type.title}
                          </h4>
                          <p className='text-gray-600 text-sm leading-relaxed'>
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Rotary 4 way test */}
            <Card className='card-hover bg-[#17458f] border-none shadow-sm rounded-none overflow-hidden mt-6'>
              <CardContent className='p-6'>
                <p className='font-display text-rotary-gold text-xs tracking-widest uppercase font-bold mb-3'>
                  The Four-Way Test
                </p>
                <p className='text-white/60 text-xs italic mb-4'>
                  Of the things we think, say or do:
                </p>
                {[
                  'Is it the TRUTH?',
                  'Is it FAIR to all concerned?',
                  'Will it build GOODWILL and BETTER FRIENDSHIPS?',
                  'Will it be BENEFICIAL to all concerned?',
                ].map((q, i) => (
                  <div key={i} className='flex items-start gap-3 mb-2'>
                    <span className='font-display text-rotary-gold font-bold text-sm shrink-0'>
                      {i + 1}.
                    </span>
                    <p className='text-white/80 text-sm'>{q}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── Members List ── */}
        <div>
          {/* Sub-header */}
          <div className='flex items-end justify-between mb-6'>
            <div>
              <h3 className='font-display text-3xl font-extrabold text-[#17458f] uppercase tracking-wide leading-none'>
                Our Members
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                Active members as of March 2026 · Rotary Year 2025–26
              </p>
            </div>
            <span className='font-display text-5xl font-extrabold text-[#17458f]/10 leading-none select-none'>
              {members.length}
            </span>
          </div>

          {/* Grid of member rows */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100'>
            {members.map((member, i) => (
              <div
                key={i}
                className='bg-white px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-[#f5f7fb] transition-colors'
              >
                <div className='flex items-center gap-3'>
                  {/* Index circle */}
                  <span className='w-7 h-7 rounded-full bg-[#e8f0fa] text-[#17458f] font-display font-bold text-xs flex items-center justify-center shrink-0'>
                    {i + 1}
                  </span>
                  <span className='text-gray-800 text-sm font-medium'>
                    {member.name}
                  </span>
                </div>
                <span className='text-gray-400 text-xs uppercase tracking-wider shrink-0'>
                  {member.admitted}
                </span>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className='text-gray-400 text-xs mt-4 text-center'>
            Data sourced from Rotary International Membership Roster · District
            3000 · Club ID 227596
          </p>
        </div>
      </div>
    </section>
  );
}
