'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id='contact' className='py-24 bg-[#f5f7fb]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mb-16'>
          <p className='font-display text-sm tracking-widest uppercase text-[#0067c8] font-semibold mb-3'>
            Get In Touch
          </p>
          <h2 className='font-display text-5xl font-extrabold text-[#17458f] uppercase leading-none mb-5'>
            Contact Us
          </h2>
          <div className='section-divider mb-6' />
          <p className='font-serif-custom text-lg text-gray-600 leading-relaxed'>
            Have questions about the Rotary Club of Pudukkottai Metro? Want to
            visit a meeting or learn more about membership? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* Contact Info */}
          <div className='space-y-5'>
            <Card className='border border-gray-100 shadow-sm rounded-none overflow-hidden card-hover'>
              <CardContent className='p-6 flex items-start gap-4'>
                <div className='w-11 h-11 rounded-full bg-[#e8f0fa] flex items-center justify-center shrink-0'>
                  <Mail size={18} className='text-[#17458f]' />
                </div>
                <div>
                  <p className='font-display text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1'>
                    Email
                  </p>
                  <a
                    href='mailto:pudukkottaimetro@gmail.com'
                    className='text-[#0067c8] hover:underline font-medium'
                  >
                    pudukkottaimetro@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className='border border-gray-100 shadow-sm rounded-none overflow-hidden card-hover'>
              <CardContent className='p-6 flex items-start gap-4'>
                <div className='w-11 h-11 rounded-full bg-[#e8f0fa] flex items-center justify-center shrink-0'>
                  <Phone size={18} className='text-[#17458f]' />
                </div>
                <div>
                  <p className='font-display text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1'>
                    Phone
                  </p>
                  <a
                    href='tel:+919842411165'
                    className='text-[#0067c8] hover:underline font-medium'
                  >
                    +91 98424 11165
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className='border border-gray-100 shadow-sm rounded-none overflow-hidden card-hover'>
              <CardContent className='p-6 flex items-start gap-4'>
                <div className='w-11 h-11 rounded-full bg-[#e8f0fa] flex items-center justify-center shrink-0'>
                  <MapPin size={18} className='text-[#17458f]' />
                </div>
                <div>
                  <p className='font-display text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1'>
                    Address
                  </p>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Rajam Mahal, 69 Kamala Nagar,
                    <br />
                    Anna Chattiram, Pudukkottai – 622003,
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rotary International links */}
            <Card className='border-l-4 border-[#f7a81b] border-t border-r border-b shadow-sm rounded-none'>
              <CardContent className='p-6'>
                <p className='font-display text-sm font-bold text-[#17458f] uppercase tracking-wide mb-3'>
                  Rotary Links
                </p>
                <div className='space-y-2'>
                  <a
                    href='https://www.rotary.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-[#0067c8] hover:underline text-sm'
                  >
                    → Rotary International (rotary.org)
                  </a>
                  <a
                    href='https://my.rotary.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-[#0067c8] hover:underline text-sm'
                  >
                    → My Rotary Portal
                  </a>
                  <a
                    href='https://www.rotary.org/en/about-rotary/rotary-foundation'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-[#0067c8] hover:underline text-sm'
                  >
                    → The Rotary Foundation
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className='border border-gray-100 shadow-sm rounded-none overflow-hidden'>
            <div className='h-2 bg-rotary-blue' />
            <CardContent className='p-8'>
              {submitted ? (
                <div className='text-center py-10'>
                  <div className='w-16 h-16 rounded-full bg-[#e8f0fa] flex items-center justify-center mx-auto mb-4'>
                    <Send size={24} className='text-[#17458f]' />
                  </div>
                  <h3 className='font-display text-2xl font-bold text-[#17458f] uppercase tracking-wide mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className='font-display text-2xl font-bold text-[#17458f] uppercase tracking-wide mb-6'>
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2'>
                          Full Name *
                        </label>
                        <input
                          required
                          type='text'
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className='w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17458f]/20 focus:border-[#17458f]'
                          placeholder='Your name'
                        />
                      </div>
                      <div>
                        <label className='block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2'>
                          Phone
                        </label>
                        <input
                          type='tel'
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className='w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17458f]/20 focus:border-[#17458f]'
                          placeholder='+91 XXXXX XXXXX'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2'>
                        Email Address *
                      </label>
                      <input
                        required
                        type='email'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className='w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17458f]/20 focus:border-[#17458f]'
                        placeholder='your@email.com'
                      />
                    </div>
                    <div>
                      <label className='block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2'>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className='w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#17458f]/20 focus:border-[#17458f] resize-none'
                        placeholder='How can we help you?'
                      />
                    </div>
                    <Button
                      type='submit'
                      className='w-full bg-[#17458f] hover:bg-[#0067c8] text-white font-display font-bold tracking-wider uppercase rounded-sm py-6'
                    >
                      <Send size={16} className='mr-2' />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
