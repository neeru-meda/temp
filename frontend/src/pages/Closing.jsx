import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, FileText, Camera, MessageCircle, Sparkles } from 'lucide-react';
import { Footer } from '../components/Footer';

const CeremonyStep = ({ icon: Icon, title, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start space-x-6"
  >
    <div className={`flex-shrink-0 w-14 h-14 rounded-full ${color} flex items-center justify-center`}>
      <Icon className="text-white" size={24} />
    </div>
    <div>
      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function Closing() {
  return (
    <div className="pt-32 pb-24">
      <section data-testid="closing-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Trophy className="text-accent" size={48} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="closing-title"
          >
            Closing Ceremony
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Celebrating innovation, impact, and the incredible work of all participants.
          </motion.p>
        </div>
      </section>

      <section data-testid="ceremony-flow-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-16 text-center"
          >
            Ceremony Flow
          </motion.h2>

          <div className="space-y-12">
            <CeremonyStep
              icon={MessageCircle}
              title="Judges' Feedback"
              description="Hear insights from our esteemed judging panel about the projects, trends they observed, and standout innovations from SHErnova 2026."
              color="bg-secondary"
            />

            <CeremonyStep
              icon={Trophy}
              title="Winner Announcements"
              description="The moment you've been waiting for! Winners will be announced across multiple categories."
              color="bg-dark-violet"
            />

            <CeremonyStep
              icon={Award}
              title="Special Recognition Awards"
              description="Beyond the main prizes, special awards will recognize exceptional efforts in specific areas."
              color="bg-soft-lavender"
            />

            <CeremonyStep
              icon={FileText}
              title="Certificate Distribution"
              description="All participants will receive certificates of participation. Winners and finalists will receive special recognition certificates."
              color="bg-dusty-rose"
            />

            <CeremonyStep
              icon={Sparkles}
              title="Sponsor Acknowledgment"
              description="A heartfelt thank you to our sponsors, partners, mentors, and everyone who made SHErnova 2026 possible."
              color="bg-dark-violet"
            />

            <CeremonyStep
              icon={Camera}
              title="Group Photograph"
              description="The official SHErnova 2026 group photo! Capture this historic moment with fellow innovators, organizers, and mentors."
              color="bg-secondary"
            />
          </div>
        </div>
      </section>

      <section data-testid="post-event-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-24 -mx-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            What Happens After?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <div className="p-6 bg-[#F9F1F2] border-l-4 border-secondary rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Project Showcase</h3>
              <p className="leading-relaxed">All projects will be featured on the SHErnova website and social media. Your innovation will inspire others!</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-accent rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Incubation Opportunities</h3>
              <p className="leading-relaxed">Top teams may receive incubation support, mentorship, and funding opportunities to turn their hackathon project into a real startup.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-soft-lavender rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Community Connection</h3>
              <p className="leading-relaxed">Join the SHErnova alumni network. Connect with fellow participants, mentors, and continue collaborating on future projects.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-dusty-rose rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Media Coverage</h3>
              <p className="leading-relaxed">Winners and notable projects will be featured in university publications, tech blogs, and local media outlets.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-testid="thank-you-section" className="px-6 md:px-12 mb-24 bg-primary text-primary-foreground py-24 -mx-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold mb-6"
          >
            Thank You for Being Part of the Movement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 leading-relaxed"
          >
            SHErnova 2026 is not just an event. It's the beginning of lasting change. Together, we've built solutions that matter. Together, we've rewritten narratives.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}