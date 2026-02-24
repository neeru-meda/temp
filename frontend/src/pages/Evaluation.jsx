import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Users, Trophy, MessageSquare } from 'lucide-react';
import { Footer } from '../components/Footer';

const StageCard = ({ number, title, description, details, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all">
      <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg`}>
        <span className="font-playfair text-3xl font-bold text-white">{number}</span>
      </div>
      
      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 mt-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      
      <div className="space-y-2 text-sm text-muted-foreground">
        {details.map((detail, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <span className="text-secondary mt-1">✓</span>
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Evaluation() {
  return (
    <div className="pt-32 pb-24">
      <section data-testid="evaluation-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="evaluation-title"
          >
            Evaluation Process
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A transparent, multi-stage evaluation ensuring the best solutions rise to the top.
          </motion.p>
        </div>
      </section>

      <section data-testid="stages-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-5xl mx-auto space-y-16">
          <StageCard
            number="1"
            title="Screening Round 1"
            description="Initial progress evaluation on Day 1 evening to assess project direction and feasibility."
            details={[
              'Time: Day 1, 6:00 PM',
              'Duration: 5 minutes per team',
              'Focus: Concept clarity, technical approach, and progress',
              'Outcome: Feedback and guidance for overnight development'
            ]}
            color="bg-secondary"
          />

          <StageCard
            number="2"
            title="Screening Round 2"
            description="Second evaluation on Day 2 morning to select top 10 finalists for the grand pitch."
            details={[
              'Time: Day 2, 11:00 AM',
              'Duration: 8 minutes per team (5 min demo + 3 min Q&A)',
              'Focus: Functionality, innovation, and impact potential',
              'Outcome: Top 10 teams advance to final round'
            ]}
            color="bg-accent"
          />

          <StageCard
            number="3"
            title="Final Pitch (Top 10)"
            description="Grand finale where top 10 teams present to judges and audience for final evaluation."
            details={[
              'Time: Day 2, 1:00 PM',
              'Duration: 12 minutes per team (8 min pitch + 4 min Q&A)',
              'Focus: Complete demonstration, impact, and presentation skills',
              'Outcome: Winners announced at prize distribution'
            ]}
            color="bg-soft-lavender"
          />
        </div>
      </section>

      <section data-testid="scoring-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-24 -mx-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Scoring System
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <ClipboardCheck className="text-secondary" size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Score Calculation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each judge scores independently based on the weighted criteria. Scores are normalized and averaged to ensure fairness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Judging Panel</h3>
              <p className="text-muted-foreground leading-relaxed">
                A diverse panel of industry experts, academics, and social impact leaders ensures comprehensive evaluation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-soft-lavender/30 flex items-center justify-center mb-4">
                <MessageSquare className="text-soft-lavender" size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Q&A Session</h3>
              <p className="text-muted-foreground leading-relaxed">
                Judges will ask technical and impact-focused questions. Clear, confident answers can significantly boost your score.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-dusty-rose/20 flex items-center justify-center mb-4">
                <Trophy className="text-dusty-rose" size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Final Decision</h3>
              <p className="text-muted-foreground leading-relaxed">
                The judge's decision is final and binding. Winners will be announced immediately after deliberation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section data-testid="tips-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Presentation Tips
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <div className="p-6 bg-[#F9F1F2] border-l-4 border-secondary rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Start with the Problem</h3>
              <p className="leading-relaxed">Begin by clearly articulating the women's welfare issue you're addressing. Make judges feel the urgency.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-accent rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Demo Over Slides</h3>
              <p className="leading-relaxed">A working demo is worth a thousand slides. Show, don't just tell. Have backup screenshots in case of technical issues.</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-soft-lavender rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Explain the Impact</h3>
              <p className="leading-relaxed">Quantify your solution's potential impact. How many women could benefit? What change does it create?</p>
            </div>

            <div className="p-6 bg-[#F9F1F2] border-l-4 border-dusty-rose rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Practice Time Management</h3>
              <p className="leading-relaxed">Rehearse your pitch to fit within time limits. Leave room for questions and avoid rushing through key points.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}