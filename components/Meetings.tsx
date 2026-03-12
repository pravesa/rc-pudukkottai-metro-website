import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Mail, Hash } from 'lucide-react';

const meetingDetails = [
  {
    icon: Calendar,
    label: 'Meeting Day',
    value: 'Every Saturday',
    sub: 'Twice a month',
    color: '#17458f',
  },
  {
    icon: Clock,
    label: 'Meeting Time',
    value: '7:00 PM',
    sub: '19:00 hrs IST',
    color: '#0067c8',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'Rajam Mahal',
    sub: 'Anna Chattiram, Pudukkottai',
    color: '#f7a81b',
  },
  {
    icon: Hash,
    label: 'Meeting Format',
    value: 'In-Person',
    sub: 'Tamil / English',
    color: '#00a2e0',
  },
];

// Address encoded for Google Maps — resolves the correct pin without an API key
const MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=Rajam+Mahal%2C+69+Kamala+Nagar%2C+Opposite+Anthoniyar+Church%2C+Arimalam+Pudukkottai+Road%2C+Anna+Chattiram%2C+Pudukkottai%2C+Tamil+Nadu+622003&output=embed&z=16';

const MAPS_DIRECTIONS_URL =
  'https://maps.google.com/?q=Rajam+Mahal,+69+Kamala+Nagar,+Anna+Chattiram,+Pudukkottai,+Tamil+Nadu+622003';

export default function Meetings() {
  return (
    <section id='meetings' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            When We Meet
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            Club Meetings
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            Our regular meetings are the heartbeat of our club — a time for
            fellowship, discussion, planning, and service. All are welcome to
            attend as a guest before joining.
          </p>
        </div>

        {/* Meeting stat cards */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12'>
          {meetingDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <Card
                key={detail.label}
                className='card-hover border border-gray-100 shadow-sm rounded-none text-center'
              >
                <CardContent className='p-6'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'
                    style={{ backgroundColor: `${detail.color}15` }}
                  >
                    <Icon size={20} style={{ color: detail.color }} />
                  </div>
                  <p className='text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2'>
                    {detail.label}
                  </p>
                  <p
                    className='font-display text-xl font-extrabold uppercase tracking-wide leading-tight'
                    style={{ color: detail.color }}
                  >
                    {detail.value}
                  </p>
                  <p className='text-gray-500 text-xs mt-1'>{detail.sub}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Map + Address */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-100 shadow-sm overflow-hidden'>
          {/* Google Map — takes 3 of 5 columns */}
          <div className='lg:col-span-3 w-full h-80 lg:h-auto min-h-95'>
            <iframe
              title='Rajam Mahal, Pudukkottai'
              src={MAPS_EMBED_SRC}
              width='100%'
              height='100%'
              style={{ border: 0, display: 'block' }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>

          {/* Address — takes 2 of 5 columns */}
          <div className='lg:col-span-2 bg-white flex flex-col'>
            {/* Blue top accent */}
            <div className='h-0.75 w-full bg-[#17458f]' />

            <div className='p-8 flex flex-col gap-6 flex-1'>
              <div>
                <p className='font-display text-xs tracking-widest uppercase text-[#0067c8] font-bold mb-3'>
                  Venue
                </p>
                <p className='font-display text-2xl font-extrabold text-[#17458f] uppercase tracking-wide leading-tight mb-1'>
                  Rajam Mahal
                </p>
                <p className='text-gray-400 text-xs uppercase tracking-wider font-medium'>
                  Meeting Venue
                </p>
              </div>

              <div className='flex items-start gap-3'>
                <MapPin size={16} className='text-[#f7a81b] mt-0.5 shrink-0' />
                <p className='text-gray-600 text-sm leading-relaxed'>
                  69, Kamala Nagar,
                  <br />
                  Opposite to Anthoniyar Church,
                  <br />
                  Arimalam Pudukkottai Road,
                  <br />
                  Anna Chattiram,
                  <br />
                  Pudukkottai – 622 003,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Mail size={16} className='text-[#0067c8] shrink-0' />
                <a
                  href='mailto:pudukkottaimetro@gmail.com'
                  className='text-[#0067c8] hover:underline text-sm font-medium break-all'
                >
                  pudukkottaimetro@gmail.com
                </a>
              </div>

              {/* Directions CTA */}
              <div className='mt-auto pt-2'>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#17458f] hover:bg-[#0067c8] transition-colors px-5 py-2.5 w-full justify-center'
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
