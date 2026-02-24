import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Briefcase, Wifi, AlertCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

const StatCard = ({ icon: Icon, stat, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all"
  >
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-6`}>
      <Icon className="text-white" size={28} />
    </div>
    <div className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">{stat}</div>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
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
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="facts-title"
          >
            The Reality She Faces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Understanding the challenges helps us build better solutions.
          </motion.p>
        </div>
      </section>

      <section data-testid="statistics-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard
              icon={AlertCircle}
              stat="1 in 3"
              description="Women worldwide experience physical or sexual violence in their lifetime"
              color="bg-secondary"
            />
            <StatCard
              icon={Users}
              stat="33%"
              description="Only 33% of researchers worldwide are women"
              color="bg-accent"
            />
            <StatCard
              icon={Briefcase}
              stat="24%"
              description="Women hold only 24% of senior leadership positions globally"
              color="bg-soft-lavender"
            />
            <StatCard
              icon={Wifi}
              stat="259M"
              description="Fewer women than men have access to the internet worldwide"
              color="bg-dusty-rose"
            />
          </div>
        </div>
      </section>

      <section data-testid="split-content-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-foreground">
                Education & Opportunity Gap
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <strong className="text-foreground">130 million girls</strong> are out of school globally due to poverty, discrimination, and cultural barriers.
                </p>
                <p className="text-lg">
                  Women earn <strong className="text-foreground">23% less</strong> than men for the same work, limiting economic independence.
                </p>
                <p className="text-lg">
                  In STEM fields, women represent only <strong className="text-foreground">28%</strong> of the workforce despite equal capabilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1741274064505-e9164ef31384?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Education barriers"
                className="rounded-3xl shadow-soft-lift"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section data-testid="safety-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-24 -mx-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1716900134112-8ac8f77c1e1e?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Safety concerns"
                className="rounded-3xl shadow-soft-lift"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-foreground">
                Safety & Representation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <strong className="text-foreground">87%</strong> of women aged 18-24 have experienced online harassment.
                </p>
                <p className="text-lg">
                  Women hold only <strong className="text-foreground">26%</strong> of parliamentary seats worldwide, limiting policy influence.
                </p>
                <p className="text-lg">
                  Lack of safe public transportation and digital infrastructure disproportionately affects women's mobility and opportunity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section data-testid="impact-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold text-foreground mb-8"
          >
            How Your 30 Hours Can Matter
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left"
          >
            <p>
              Technology has the power to bridge gaps, amplify voices, and create opportunities. But it only works when we build with empathy and purpose.
            </p>
            <p className="text-xl font-medium text-foreground">
              SHErnova is your platform to:
            </p>
            <ul className="space-y-3 list-none">
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Build safety solutions that protect and empower</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Create educational tools that open doors</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Design healthcare innovations that save lives</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">✓</span>
                <span>Develop platforms that amplify women's voices in leadership</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-foreground pt-6">
              This is not just 30 hours.<br />
              This is 30 hours of rewriting narratives.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}