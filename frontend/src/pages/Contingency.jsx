import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Wifi, HeartPulse, Phone, AlertTriangle } from 'lucide-react';
import { Footer } from '../components/Footer';

const SafetyCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all"
  >
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-5`}>
      <Icon className="text-white" size={26} />
    </div>
    <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default function Contingency() {
  return (
    <div className="pt-32 pb-24 overflow-x-hidden">
      <section data-testid="contingency-hero" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
              <Shield className="text-secondary" size={48} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-7xl font-semibold text-foreground mb-6"
            data-testid="contingency-title"
          >
            Contingency & Safety
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Your safety and comfort are our top priorities. We're prepared for everything.
          </motion.p>
        </div>
      </section>

      <section data-testid="safety-measures-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-16 text-center"
          >
            Safety Measures in Place
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SafetyCard
              icon={Zap}
              title="Power Backup"
              description="Generator backup and UPS systems in place to minimize power disruptions during the event."
              color="bg-dark-violet"
            />

            <SafetyCard
              icon={Wifi}
              title="Internet Redundancy"
              description="Multiple internet connections available with backup options to maintain connectivity."
              color="bg-secondary"
            />

            <SafetyCard
              icon={HeartPulse}
              title="Medical Support"
              description="First-aid facilities and medical personnel available on-site. Nearest hospital within proximity."
              color="bg-soft-lavender"
            />

            <SafetyCard
              icon={Shield}
              title="Security Supervision"
              description="Professional security personnel on duty. CCTV monitoring to maintain a safe environment."
              color="bg-dusty-rose"
            />

            <SafetyCard
              icon={Phone}
              title="Emergency Contacts"
              description="Dedicated helpline numbers for participants. Organizer contacts shared via communication groups."
              color="bg-dark-violet"
            />

            <SafetyCard
              icon={AlertTriangle}
              title="Emergency Response"
              description="Emergency response protocols in place. Clear evacuation procedures and fire safety equipment."
              color="bg-secondary"
            />
          </div>
        </div>
      </section>

      <section data-testid="contingency-plans-section" className="px-6 md:px-12 mb-24 bg-primary/5 py-24 -mx-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center"
          >
            Contingency Plans
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Power Failure</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In case of power outage, backup generators will automatically activate within 5 seconds. UPS systems ensure zero downtime for critical equipment.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Generator capacity: Supports full venue for 48+ hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Battery backup for networking equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Emergency lighting in all areas</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Internet Disruption</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Multiple ISP connections (fiber + broadband). If primary fails, secondary connection takes over instantly. Mobile hotspots as final backup.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Load-balanced dual ISP setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>50+ mobile hotspots available for distribution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Offline coding encouraged; sync when online</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Medical Emergency</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Immediate first-aid by on-site medical team. Ambulance ready for hospital transfer if needed. Nearest hospital: 5-minute drive.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Paramedic on duty 24/7</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Fully equipped first-aid station</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Partnership with nearby hospital</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Security Incident</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional security team trained to handle all situations. Clear protocols for harassment, theft, or safety concerns.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Zero-tolerance policy for harassment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Immediate organizer notification system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Local police station informed of event</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-testid="emergency-contacts-section" className="px-6 md:px-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-5xl font-semibold text-foreground mb-8"
          >
            Emergency Contacts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl text-left">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Event Helpline</h3>
              <p className="text-3xl font-playfair font-bold text-secondary mb-2">+91 XXXXX XXXXX</p>
              <p className="text-sm text-muted-foreground">Available 24/7 during the event</p>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl text-left">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Medical Emergency</h3>
              <p className="text-3xl font-playfair font-bold text-secondary mb-2">+91 XXXXX XXXXX</p>
              <p className="text-sm text-muted-foreground">Direct line to on-site medical team</p>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl text-left">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Security Desk</h3>
              <p className="text-3xl font-playfair font-bold text-secondary mb-2">+91 XXXXX XXXXX</p>
              <p className="text-sm text-muted-foreground">For safety concerns and incidents</p>
            </div>

            <div className="p-8 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl text-left">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Tech Support</h3>
              <p className="text-3xl font-playfair font-bold text-secondary mb-2">+91 XXXXX XXXXX</p>
              <p className="text-sm text-muted-foreground">For internet/power issues</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-muted-foreground text-lg"
          >
            All emergency numbers will be shared in the participant WhatsApp group before the event.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}