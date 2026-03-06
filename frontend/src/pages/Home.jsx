import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Clock, Award, Trophy } from 'lucide-react';
import { Footer } from '../components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-24T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mb-10" data-testid="countdown-timer">
      <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">Event Starts In</p>
      <div className="flex gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl px-6 py-4 min-w-[100px] text-center shadow-sm">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-secondary">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="custom-cursor">
      <section data-testid="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-24 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-soft-lavender/30 rounded-full watercolor-blob" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-dusty-rose/20 rounded-full watercolor-blob" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-dark-violet/10 text-dark-violet text-xs font-semibold tracking-widest uppercase rounded-full">
                March 24-25, 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-6xl md:text-8xl font-semibold text-foreground leading-none mb-6"
              data-testid="hero-title"
            >
              SHE<span className="text-secondary">rnova</span>
              <br />
              <span className="text-5xl md:text-6xl">2026</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light max-w-3xl mx-auto"
              data-testid="hero-subtitle"
            >
              30-Hour Offline Hackathon | Women's Welfare Innovation Challenge
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Countdown />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                data-testid="register-cta-button"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-sketch"
              >
                Register Now
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/agenda"
                data-testid="explore-agenda-button"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-primary bg-transparent rounded-full font-medium text-lg hover:bg-primary/5 transition-colors"
              >
                View Agenda
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section data-testid="about-section" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-semibold text-foreground mb-6">
              About SHE<span className="text-secondary">rnova</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A 30-hour offline hackathon focused on women's welfare, open innovation, and social impact. Hosted by GDGOC AUCE & Girl Up as part of Women's Day Month and Andhra University's Centenary Celebrations.
            </p>
            <p className="text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed mt-6">
              Building solutions that create lasting change for women across education, safety, health, and leadership.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Clock, title: '30 Hours', desc: 'Non-stop innovation' },
              { icon: Users, title: 'Open to All', desc: 'Inclusive participation' },
              { icon: Award, title: 'Amazing Prizes', desc: 'Recognition & rewards' },
              { icon: Sparkles, title: 'Real Impact', desc: 'Solutions that matter' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl hover:shadow-md transition-all group"
                data-testid={`feature-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section data-testid="prizes-section" className="py-24 md:py-32 px-6 md:px-12 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold text-foreground text-center mb-4"
          >
            Prize Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Recognition and rewards for outstanding innovation and impact
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Best Overall', desc: 'The team with the highest overall score' },
              { title: 'Most Innovative', desc: 'Most creative and unique solution' },
              { title: 'Best Social Impact', desc: 'Solution with greatest potential impact' },
              { title: 'Best UX/UI', desc: 'Most polished user experience' },
              { title: 'Best Technical', desc: 'Most technically sophisticated' },
              { title: "People's Choice", desc: 'Voted by participants and audience' }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-2xl hover:shadow-soft-lift transition-all text-center"
                data-testid={`prize-category-${idx}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-violet/10 flex items-center justify-center">
                  <Trophy className="text-dark-violet" size={28} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{category.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_womens-impact-lab/artifacts/q6s61svf_Screenshot%202026-03-02%20145720.png"
              alt="Prize illustration"
              className="max-w-md mx-auto rounded-2xl opacity-80"
            />
          </motion.div>
        </div>
      </section>

      <section data-testid="why-section" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/7283202/pexels-photo-7283202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Women collaborating"
                className="rounded-3xl shadow-soft-lift"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Why SHE<span className="text-secondary">rnova</span> Exists
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Technology has the power to solve real-world problems. But too often, women's issues are overlooked in innovation spaces.
                </p>
                <p className="text-lg">
                  SHErnova is about changing that. It's about building solutions that matter — for safety, education, health, leadership, and empowerment.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Social impact {'>'} just winning.<br />
                  Interdisciplinary collaboration encouraged.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section data-testid="highlights-section" className="py-24 md:py-32 px-6 md:px-12 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold text-foreground text-center mb-16"
          >
            Event Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Mentor Rounds', desc: 'Get guidance from industry experts at multiple checkpoints' },
              { title: 'Tech Talks', desc: 'Inspiring sessions on innovation, impact, and leadership' },
              { title: 'Guest Sessions', desc: 'Learn from successful women entrepreneurs and technologists' },
              { title: 'Screening Rounds', desc: 'Multiple evaluation stages to refine your solution' },
              { title: 'Final Pitching', desc: 'Present to judges and compete for top recognition' },
              { title: 'Awards & Recognition', desc: 'Prizes, certificates, and opportunities for winning teams' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F9F1F2] border-l-4 border-dark-violet p-8 rounded-r-xl hover:shadow-md transition-shadow"
                data-testid={`highlight-card-${idx}`}
              >
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="pricing-section" className="py-24 md:py-32 px-6 md:px-12" id="register">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold text-foreground text-center mb-16"
          >
            Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Early Bird', price: '₹399', active: false },
              { name: 'Standard', price: '₹599', active: true },
              { name: 'Late Bird', price: '₹699', active: false }
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-white/60 p-8 rounded-3xl hover:shadow-soft-lift transition-all relative overflow-hidden group"
                data-testid={`pricing-card-${idx}`}
              >
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="font-playfair text-5xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ person</span>
                </div>
                {tier.active ? (
                  <a
                    href="https://forms.gle/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center px-6 py-3 bg-muted text-muted-foreground rounded-full font-medium cursor-not-allowed"
                  >
                    {idx === 0 ? 'Closed' : 'Coming Soon'}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12"
          >
            Questions? Contact us at{' '}
            <a href="mailto:shernova2k26@gmail.com" className="text-secondary font-medium hover:underline">
              shernova2k26@gmail.com
            </a>
          </motion.p>
        </div>
      </section>

      <section data-testid="cta-section" className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl font-semibold mb-6"
          >
            Build for Her. Build for Impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-10 opacity-90"
          >
            Join innovators in creating solutions that matter.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="#register"
            data-testid="final-cta-button"
            className="inline-flex items-center px-10 py-5 bg-white text-primary rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-soft-lift"
          >
            Secure Your Spot Now
            <ArrowRight className="ml-2" size={24} />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}