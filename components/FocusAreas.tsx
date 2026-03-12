import { Card, CardContent } from '@/components/ui/card';

const focusAreas = [
  {
    number: '01',
    title: 'Peace & Conflict Prevention',
    description:
      'Supporting initiatives that promote peace, cooperation, and understanding in communities worldwide.',
    icon: '🕊️',
    color: '#0067c8',
  },
  {
    number: '02',
    title: 'Disease Prevention & Treatment',
    description:
      'Reducing the burden of disease, improving health, and strengthening healthcare systems.',
    icon: '❤️‍🩹',
    color: '#e02927',
  },
  {
    number: '03',
    title: 'Water, Sanitation & Hygiene',
    description:
      'Providing clean water and sanitation solutions for communities that need them most.',
    icon: '💧',
    color: '#00a2e0',
  },
  {
    number: '04',
    title: 'Maternal & Child Health',
    description:
      'Improving the health of mothers and children through targeted community health programs.',
    icon: '🌱',
    color: '#4caf50',
  },
  {
    number: '05',
    title: 'Basic Education & Literacy',
    description:
      'Strengthening education systems and improving literacy, especially for girls and women.',
    icon: '📚',
    color: '#f7a81b',
  },
  {
    number: '06',
    title: 'Economic & Community Development',
    description:
      'Developing economies, reducing poverty, and giving communities the tools they need to thrive.',
    icon: '🏘️',
    color: '#17458f',
  },
  {
    number: '07',
    title: 'Environment',
    description:
      'Working together to protect our natural environment and build a more sustainable world.',
    icon: '🌍',
    color: '#2e7d32',
  },
];

export default function FocusAreas() {
  return (
    <section id='focus-areas' className='py-24 bg-[#f5f7fb]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            What We Work Towards
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            Areas of Focus
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            Rotary International has identified seven key areas where our clubs
            focus their service efforts to achieve the greatest impact. As a new
            club, we are committed to engaging with these causes right here in
            Pudukkottai and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {focusAreas.map((area) => (
            <Card
              key={area.number}
              className='card-hover bg-white border border-gray-100 shadow-sm rounded-none overflow-hidden'
              style={{ borderTop: `4px solid ${area.color}` }}
            >
              <CardContent className='p-6'>
                <div className='flex items-start justify-between mb-4'>
                  <span className='text-3xl'>{area.icon}</span>
                  <span
                    className='font-display text-4xl font-extrabold opacity-10'
                    style={{ color: area.color }}
                  >
                    {area.number}
                  </span>
                </div>
                <h3
                  className='font-display text-base font-bold uppercase tracking-wide mb-3 leading-tight'
                  style={{ color: area.color }}
                >
                  {area.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Coming Soon Card */}
          <Card className='card-hover bg-[#17458f] border-none shadow-sm rounded-none overflow-hidden'>
            <CardContent className='p-6 h-full flex flex-col justify-between'>
              <div>
                <p className='font-display text-[#f7a81b] text-sm tracking-widest uppercase font-bold mb-4'>
                  New Club
                </p>
                <h3 className='font-display text-xl font-bold text-white uppercase tracking-wide mb-3 leading-tight'>
                  Our Journey Begins
                </h3>
                <p className='text-white/70 text-sm leading-relaxed'>
                  As a newly chartered club, our first projects and service
                  initiatives are currently being planned. Stay tuned for
                  updates!
                </p>
              </div>
              <div className='mt-6 h-1 w-12 bg-[#f7a81b]' />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
