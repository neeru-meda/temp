import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Lightbulb, Palette, Target, CheckCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

const RuleCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all"
  >
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const CriteriaBar = ({ label, percentage, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex items-center justify-between mb-2">
      <span className="font-medium text-foreground">{label}</span>
      <span className="text-sm font-semibold text-accent">{percentage}%</span>
    </div>
    <div className="h-3 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-full ${color}`}
      />
    </div>
  </motion.div>
);

export default function Rules() {
  return (
    <div className="pt-32 pb-24">
      <section data-testid="rules-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="rules-title"
          >
            Rules & Guidelines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Everything you need to know to participate and succeed at SHErnova 2026.
          </motion.p>
        </div>
      </section>

      <section data-testid="team-rules-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Participation Rules
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RuleCard
              icon={Users}
              title="Team Size: 2-5 Members"
              description="Form teams with 2 to 5 members. Solo participation is not allowed. Collaboration is key!"
              color="bg-secondary"
            />
            <RuleCard
              icon={Code}
              title="Fresh Code Only"
              description="All code must be written during the hackathon. Pre-built projects are not allowed."
              color="bg-accent"
            />
            <RuleCard
              icon={Lightbulb}
              title="Interdisciplinary Teams"
              description="Mix of tech and non-tech backgrounds is encouraged. Diversity brings innovation!"
              color="bg-soft-lavender"
            />
            <RuleCard
              icon={CheckCircle}
              title="AI as Co-Pilot"
              description="AI tools are allowed as assistants, but core logic must be your original work."
              color="bg-dusty-rose"
            />
            <RuleCard
              icon={Target}
              title="Public GitHub Required"
              description="All projects must be on public GitHub repositories for transparency and evaluation."
              color="bg-accent"
            />
            <RuleCard
              icon={Users}
              title="Strict Submission Deadline"
              description="Submissions after the deadline will not be considered. Time management is crucial!"
              color="bg-secondary"
            />
          </div>
        </div>
      </section>

      <section data-testid="judging-criteria-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-24 -mx-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Judging Criteria
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-12 leading-relaxed"
          >
            Your project will be evaluated based on the following weighted criteria:
          </motion.p>

          <div className="space-y-6">
            <CriteriaBar label="Technical Complexity" percentage={30} color="bg-secondary" />
            <CriteriaBar label="Innovation" percentage={25} color="bg-accent" />
            <CriteriaBar label="Functionality" percentage={20} color="bg-soft-lavender" />
            <CriteriaBar label="UX/UI Design" percentage={15} color="bg-dusty-rose" />
            <CriteriaBar label="Social Impact" percentage={10} color="bg-muted-gold" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl"
          >
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Criteria Breakdown</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-foreground">Technical Complexity (30%):</strong> Architecture quality, scalability, and technical depth</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-foreground">Innovation (25%):</strong> Uniqueness of approach and creative problem-solving</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-foreground">Functionality (20%):</strong> Working features and completeness of implementation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-foreground">UX/UI Design (15%):</strong> User experience, interface design, and accessibility</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary mt-1">•</span>
                <span><strong className="text-foreground">Social Impact (10%):</strong> Potential to create meaningful change for women's welfare</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section data-testid="guidelines-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Important Guidelines
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <div className="p-6 bg-[#F9F1F2] border-l-4 border-secondary rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Code of Conduct</h3>
              <p className="leading-relaxed">Maintain a respectful, inclusive environment. Harassment of any kind will result in immediate disqualification.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-accent rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Intellectual Property</h3>
              <p className="leading-relaxed">All code and ideas developed during the hackathon belong to the team members. Organizers claim no ownership.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-soft-lavender rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Submission Requirements</h3>
              <p className="leading-relaxed">Submit your project via the official platform before the deadline. Include: GitHub repository, demo video (optional), and presentation slides.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-dusty-rose rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Mentorship</h3>
              <p className="leading-relaxed">Utilize mentor rounds wisely. They're here to guide, not build your project. Ask specific questions and be prepared.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-muted-gold rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Fair Play</h3>
              <p className="leading-relaxed">Plagiarism or use of pre-existing projects will result in immediate disqualification. Judges' decisions are final.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}