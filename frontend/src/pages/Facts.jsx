import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Briefcase, Wifi, AlertCircle, Heart, GraduationCap, Shield } from 'lucide-react';
import { Footer } from '../components/Footer';

const StatCard = ({ icon: Icon, stat, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm border border-white/50 p-6 rounded-2xl hover:shadow-lg transition-all"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
      <Icon className="text-white" size={24} />
    </div>
    <div className="font-playfair text-4xl font-bold text-foreground mb-2">{stat}</div>
    <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const ImpactCard = ({ icon: Icon, title, stats, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-2xl hover:shadow-lg transition-all"
  >
    <div className="flex items-start space-x-4 mb-6">
      <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="font-playfair text-2xl font-bold text-foreground">{title}</h3>
    </div>
    <div className="space-y-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-bold text-foreground">{stat.number}</span> {stat.text}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Facts() {
  return (
    <div className="pt-32 pb-24">
      <section data-testid="facts-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6"
            data-testid="facts-title"
          >
            The Reality She Faces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4"
          >
            How a 30-hour hackathon can create real societal impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            Understanding the challenges helps us build solutions that create lasting change.
          </motion.p>
        </div>
      </section>

      <section data-testid="quick-stats-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              icon={AlertCircle}
              stat="1 in 3"
              description="Women experience violence in their lifetime"
              color="bg-secondary"
            />
            <StatCard
              icon={Users}
              stat="33%"
              description="Women researchers worldwide"
              color="bg-dark-violet"
            />
            <StatCard
              icon={Briefcase}
              stat="24%"
              description="Women in senior leadership globally"
              color="bg-soft-lavender"
            />
            <StatCard
              icon={Wifi}
              stat="259M"
              description="Fewer women with internet access"
              color="bg-dusty-rose"
            />
          </div>
        </div>
      </section>

      <section data-testid="detailed-impact-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
          >
            The Challenges We're Addressing
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ImpactCard
              icon={GraduationCap}
              title="Education & Opportunity Gap"
              color="bg-dark-violet"
              stats={[
                { number: '130 million girls', text: 'are out of school globally due to poverty, discrimination, and cultural barriers' },
                { number: '23% wage gap', text: 'Women earn less than men for the same work, limiting economic independence' },
                { number: 'Only 28%', text: 'of STEM workforce are women despite having equal capabilities' }
              ]}
            />

            <ImpactCard
              icon={Shield}
              title="Safety & Representation"
              color="bg-secondary"
              stats={[
                { number: '87%', text: 'of women aged 18-24 have experienced online harassment' },
                { number: 'Only 26%', text: 'of parliamentary seats worldwide are held by women, limiting policy influence' },
                { number: 'Critical gap', text: 'in safe public transportation and digital infrastructure affects women\'s mobility' }
              ]}
            />

            <ImpactCard
              icon={Heart}
              title="Healthcare Access"
              color="bg-dusty-rose"
              stats={[
                { number: '295,000', text: 'women die annually from pregnancy complications, mostly preventable' },
                { number: 'Limited access', text: 'to reproductive healthcare services in many regions worldwide' },
                { number: 'Gender bias', text: 'in medical research and treatment affects women\'s health outcomes' }
              ]}
            />

            <ImpactCard
              icon={Briefcase}
              title="Economic Empowerment"
              color="bg-soft-lavender"
              stats={[
                { number: '47%', text: 'of global workforce are women, but face systemic barriers to advancement' },
                { number: 'Limited funding', text: 'Only 2% of venture capital goes to women-led startups' },
                { number: 'Financial literacy', text: 'gap prevents many women from achieving economic independence' }
              ]}
            />
          </div>
        </div>
      </section>

      <section data-testid="hackathon-impact-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-20 -mx-6">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Your 30 Hours Can Matter
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology has the power to bridge gaps, amplify voices, and create opportunities. But it only works when we build with empathy and purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Safety Solutions',
                desc: 'Build tools that protect and empower women in physical and digital spaces',
                example: 'Emergency response apps, harassment reporting platforms, safe navigation tools'
              },
              {
                title: 'Education Platforms',
                desc: 'Create tools that open doors to learning and skill development',
                example: 'Free learning platforms, mentorship matching systems, scholarship finders'
              },
              {
                title: 'Healthcare Innovation',
                desc: 'Design solutions that improve access to healthcare and health information',
                example: 'Telemedicine apps, health tracking tools, medical information accessibility'
              },
              {
                title: 'Leadership Tools',
                desc: 'Develop platforms that amplify women\'s voices in leadership and decision-making',
                example: 'Networking platforms, skill-building tools, visibility enhancers'
              },
              {
                title: 'Financial Inclusion',
                desc: 'Build solutions for economic independence and entrepreneurship',
                example: 'Microfinance platforms, financial literacy apps, business planning tools'
              },
              {
                title: 'Community Building',
                desc: 'Create spaces for connection, support, and collective growth',
                example: 'Support networks, resource sharing platforms, collaborative workspaces'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm">{item.desc}</p>
                <p className="text-xs text-secondary font-medium italic">
                  Examples: {item.example}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="call-to-action-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-3xl text-center shadow-2xl"
          >
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              This is not just 30 hours.
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              This is 30 hours of rewriting narratives.
            </p>
            <a
              href="/#register"
              className="inline-flex items-center px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Join the Movement
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}