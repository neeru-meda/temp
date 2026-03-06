import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function SponsorsMentors() {
  const sponsors = [
    { name: 'Sponsor 1', logo: 'https://via.placeholder.com/200x80?text=Sponsor+1' },
    { name: 'Sponsor 2', logo: 'https://via.placeholder.com/200x80?text=Sponsor+2' },
    { name: 'Sponsor 3', logo: 'https://via.placeholder.com/200x80?text=Sponsor+3' },
    { name: 'Sponsor 4', logo: 'https://via.placeholder.com/200x80?text=Sponsor+4' },
    { name: 'Sponsor 5', logo: 'https://via.placeholder.com/200x80?text=Sponsor+5' },
    { name: 'Sponsor 6', logo: 'https://via.placeholder.com/200x80?text=Sponsor+6' }
  ];

  const mentors = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Tech Lead at Google',
      bio: 'Pioneer in AI for social good with 15+ years experience. Passionate about empowering women in technology.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, WomenTech India',
      bio: 'Serial entrepreneur focused on women-centric solutions. Built 3 successful startups addressing social impact.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. Maya Reddy',
      role: 'Professor, AUCE',
      bio: 'Research expert in human-computer interaction and inclusive design. Author of multiple papers on accessibility.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    {
      name: 'Anjali Mehta',
      role: 'Product Manager, Microsoft',
      bio: 'Leading teams building products used by millions. Advocate for diversity in tech and women leadership.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section data-testid="sponsors-mentors-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="sponsors-mentors-title"
          >
            Sponsors & Mentors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Supported by industry leaders and guided by experienced mentors
          </motion.p>
        </div>
      </section>

      <section data-testid="sponsors-section" className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-dark-violet/10 flex items-center justify-center">
              <Building2 className="text-dark-violet" size={28} />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">Our Sponsors</h2>
              <p className="text-muted-foreground">Partners making SHErnova possible</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-white/50 p-6 rounded-2xl hover:shadow-md transition-all flex items-center justify-center"
                data-testid={`sponsor-${idx}`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full h-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12"
          >
            Interested in sponsoring?{' '}
            <a href="mailto:shernova2k26@gmail.com" className="text-secondary font-medium hover:underline">
              Get in touch
            </a>
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <section data-testid="mentors-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <Users className="text-secondary" size={28} />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">Our Mentors</h2>
              <p className="text-muted-foreground">Experts guiding your journey</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all"
                data-testid={`mentor-${idx}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-3">{mentor.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{mentor.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12"
          >
            Want to mentor at SHErnova?{' '}
            <a href="mailto:shernova2k26@gmail.com" className="text-secondary font-medium hover:underline">
              Apply here
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
