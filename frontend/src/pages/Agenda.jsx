import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { Footer } from '../components/Footer';

const TimelineItem = ({ time, title, description, isExpanded, onClick, testId }) => (
  <motion.div
    data-testid={testId}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l-2 border-secondary/30 hover:border-secondary transition-colors cursor-pointer"
    onClick={onClick}
  >
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
    
    <div className="bg-white/50 backdrop-blur-sm border border-white/40 p-6 rounded-2xl hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">{time}</span>
        <ChevronDown className={`text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} size={20} />
      </div>
      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{title}</h3>
      {isExpanded && description && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </motion.div>
);

export default function Agenda() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const day1Events = [
    { time: '09:00 AM', title: 'Registration & Check-in', description: 'Team registration, ID verification, and kit distribution' },
    { time: '10:00 AM', title: 'Inauguration Ceremony', description: 'Welcome address by organizers and chief guests' },
    { time: '10:30 AM', title: 'Cultural Performance', description: 'Opening cultural program celebrating diversity and innovation' },
    { time: '11:00 AM', title: 'Tech Talks - Session 1', description: 'Inspiring talks on women in tech and social impact innovation' },
    { time: '12:00 PM', title: 'Coding Begins', description: 'Hackathon officially starts! Time to build your solutions' },
    { time: '01:00 PM', title: 'Lunch Break', description: 'Networking lunch with participants and mentors' },
    { time: '02:00 PM', title: 'Mentor Round 1', description: 'First mentor consultation round for all teams' },
    { time: '04:00 PM', title: 'Tea & Snacks', description: 'Refreshment break with networking opportunities' },
    { time: '06:00 PM', title: 'Screening Round 1', description: 'Initial evaluation and progress check by judges' },
    { time: '08:00 PM', title: 'Dinner', description: 'Evening meal and team bonding time' },
    { time: '09:00 PM - 06:00 AM', title: 'Overnight Development', description: 'Continuous coding with mentor support and midnight snacks' }
  ];

  const day2Events = [
    { time: '06:30 AM', title: 'Zumba Session', description: 'Energizing morning fitness session to refresh teams' },
    { time: '07:30 AM', title: 'Breakfast', description: 'Healthy breakfast to fuel the final stretch' },
    { time: '08:00 AM', title: 'Final Build Phase', description: 'Last hours to polish your project and prepare presentation' },
    { time: '11:00 AM', title: 'Screening Round 2', description: 'Second evaluation to select top 10 finalists' },
    { time: '12:00 PM', title: 'Lunch Break', description: 'Final meal before the grand finale' },
    { time: '01:00 PM', title: 'Top 10 Final Pitch', description: 'Finalists present their solutions to judges and audience' },
    { time: '03:00 PM', title: 'Judging & Deliberation', description: 'Judges evaluate and select winners' },
    { time: '04:00 PM', title: 'Prize Distribution', description: 'Announcement of winners and prize ceremony' },
    { time: '05:00 PM', title: 'Closing Ceremony', description: 'Thank you address, group photo, and celebration' }
  ];

  return (
    <div className="pt-32 pb-24">
      <section data-testid="agenda-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase rounded-full">
              <Calendar size={16} />
              <span>March 24-25, 2026</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="agenda-title"
          >
            Event Agenda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Your journey through 30 hours of innovation, collaboration, and impact.
          </motion.p>
        </div>
      </section>

      <section data-testid="day1-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <span className="font-playfair text-2xl font-bold text-secondary">1</span>
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">Day 1</h2>
              <p className="text-muted-foreground">March 24, 2026 - Foundation & Innovation</p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {day1Events.map((event, idx) => (
              <TimelineItem
                key={`day1-${idx}`}
                testId={`day1-event-${idx}`}
                time={event.time}
                title={event.title}
                description={event.description}
                isExpanded={expandedItems[`day1-${idx}`]}
                onClick={() => toggleItem(`day1-${idx}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section data-testid="day2-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
              <span className="font-playfair text-2xl font-bold text-accent">2</span>
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">Day 2</h2>
              <p className="text-muted-foreground">March 25, 2026 - Refinement & Recognition</p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {day2Events.map((event, idx) => (
              <TimelineItem
                key={`day2-${idx}`}
                testId={`day2-event-${idx}`}
                time={event.time}
                title={event.title}
                description={event.description}
                isExpanded={expandedItems[`day2-${idx}`]}
                onClick={() => toggleItem(`day2-${idx}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}