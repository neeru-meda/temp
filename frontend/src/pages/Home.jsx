import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Clock, Award, Trophy, Zap, Target, Gift, Star, Heart, Code, Lightbulb, TrendingUp } from 'lucide-react';
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
    <div className="grid grid-cols-4 gap-3 mb-8" data-testid="countdown-timer">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 min-w-[80px] text-center shadow-lg">
            <div className="font-playfair text-3xl md:text-4xl font-bold">
              {String(item.value).padStart(2, '0')}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="custom-cursor">
      <section data-testid="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-soft-lavender/30 rounded-full watercolor-blob" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-dusty-rose/20 rounded-full watercolor-blob" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-dark-violet/10 rounded-full watercolor-blob" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-violet text-white text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg">
                <Sparkles size={14} />
                <span>March 24-25, 2026</span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4"
              data-testid="hero-title"
            >
              SHE<span className="text-secondary">rnova</span> 2026
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground font-medium mb-3"
              data-testid="hero-subtitle"
            >
              Build for Her. Code for Impact.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
            >
              30-Hour Offline Hackathon • Women's Welfare Innovation Challenge
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-6">
              <Countdown />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#register"
                data-testid="register-cta-button"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg group"
              >
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="/agenda"
                data-testid="explore-agenda-button"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary bg-white/80 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Agenda
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-muted-foreground font-medium">Limited Spots</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-secondary" />
                <span className="text-muted-foreground font-medium">200+ Registered</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop"
                alt="Women in tech innovation"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-playfair text-2xl font-bold mb-2">This is not just 30 hours.</p>
                <p className="text-white text-lg font-medium">This is 30 hours of rewriting narratives.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-testid="stats-section" className="py-16 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, number: '30', label: 'Hours of Innovation' },
              { icon: Award, number: '₹50K+', label: 'Prize Pool' },
              { icon: Users, number: '15+', label: 'Expert Mentors' },
              { icon: Trophy, number: '6', label: 'Prize Categories' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <stat.icon size={24} />
                </div>
                <div className="font-playfair text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="about-section" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                About SHE<span className="text-secondary">rnova</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A 30-hour offline hackathon focused on women's welfare, open innovation, and social impact.
              </p>
              <p className="text-lg text-foreground font-semibold leading-relaxed mb-6">
                Building solutions that create lasting change for women across education, safety, health, and leadership.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, text: 'Hosted by GDGOC AUCE & Girl Up' },
                  { icon: Star, text: 'Part of Women\'s Day Month Celebration' },
                  { icon: Heart, text: 'Andhra University Centenary Event' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Code, title: 'Open Innovation', desc: 'All tech stacks welcome' },
                { icon: Users, title: 'Team Building', desc: '2-5 members per team' },
                { icon: Lightbulb, title: 'Mentorship', desc: 'Expert guidance rounds' },
                { icon: TrendingUp, title: 'Real Impact', desc: 'Solutions that matter' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-dark-violet" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section data-testid="prizes-section" className="py-20 px-6 md:px-12 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Prize Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and rewards for outstanding innovation and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Best Overall', desc: 'The team with the highest overall score', gradient: 'from-yellow-400 to-orange-500' },
              { title: 'Most Innovative', desc: 'Most creative and unique solution', gradient: 'from-purple-400 to-pink-500' },
              { title: 'Best Social Impact', desc: 'Solution with greatest potential impact', gradient: 'from-green-400 to-cyan-500' },
              { title: 'Best UX/UI', desc: 'Most polished user experience', gradient: 'from-blue-400 to-purple-500' },
              { title: 'Best Technical', desc: 'Most technically sophisticated', gradient: 'from-red-400 to-pink-500' },
              { title: "People's Choice", desc: 'Voted by participants and audience', gradient: 'from-indigo-400 to-purple-500' }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-xl transition-all group overflow-hidden"
                data-testid={`prize-category-${idx}`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-dark-violet/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="text-dark-violet" size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2 text-center">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">{category.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="why-section" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why SHE<span className="text-secondary">rnova</span> Exists
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technology has the power to solve real-world problems. But too often, women's issues are overlooked in innovation spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safety Solutions',
                desc: 'Build tools that protect and empower women in physical and digital spaces',
                icon: '🛡️'
              },
              {
                title: 'Education Access',
                desc: 'Create platforms that open doors to learning and skill development',
                icon: '📚'
              },
              {
                title: 'Healthcare Innovation',
                desc: 'Design healthcare solutions that save lives and improve well-being',
                icon: '💚'
              },
              {
                title: 'Leadership Tools',
                desc: 'Develop platforms that amplify women\'s voices in leadership',
                icon: '📢'
              },
              {
                title: 'Economic Empowerment',
                desc: 'Build solutions for financial independence and entrepreneurship',
                icon: '💼'
              },
              {
                title: 'Community Building',
                desc: 'Create spaces for connection, support, and collective growth',
                icon: '🤝'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-primary/5 border border-white/60 p-8 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl font-semibold text-foreground">
              Social impact {'>'} just winning • Interdisciplinary collaboration encouraged
            </p>
          </motion.div>
        </div>
      </section>

      <section data-testid="highlights-section" className="py-20 px-6 md:px-12 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-12"
          >
            Event Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Mentor Rounds', desc: 'Get guidance from industry experts at multiple checkpoints', icon: Users },
              { title: 'Tech Talks', desc: 'Inspiring sessions on innovation, impact, and leadership', icon: Sparkles },
              { title: 'Guest Sessions', desc: 'Learn from successful women entrepreneurs and technologists', icon: Star },
              { title: 'Screening Rounds', desc: 'Multiple evaluation stages to refine your solution', icon: Target },
              { title: 'Final Pitching', desc: 'Present to judges and compete for top recognition', icon: Trophy },
              { title: 'Awards & Recognition', desc: 'Prizes, certificates, and opportunities for winning teams', icon: Gift }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-lg transition-all group"
                data-testid={`highlight-card-${idx}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-violet/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-dark-violet" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="pricing-section" className="py-20 px-6 md:px-12" id="register">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing
            </h2>
            <p className="text-lg text-muted-foreground">Invest in your innovation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Early Bird', price: '₹399', active: false, badge: 'Closed' },
              { name: 'Standard', price: '₹599', active: true, badge: 'Active Now' },
              { name: 'Late Bird', price: '₹699', active: false, badge: 'Coming Soon' }
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white/80 backdrop-blur-sm border-2 p-8 rounded-3xl transition-all ${
                  tier.active
                    ? 'border-secondary shadow-2xl scale-105'
                    : 'border-white/60 hover:shadow-lg'
                }`}
                data-testid={`pricing-card-${idx}`}
              >
                {tier.active && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full shadow-lg">
                    {tier.badge}
                  </div>
                )}
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="font-playfair text-5xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ person</span>
                </div>
                {tier.active ? (
                  <a
                    href="https://forms.gle/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                  >
                    Register Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center px-6 py-4 bg-muted text-muted-foreground rounded-full font-semibold cursor-not-allowed"
                  >
                    {tier.badge}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 space-y-3"
          >
            <p className="text-muted-foreground">
              Questions? Contact us at{' '}
              <a href="mailto:shernova2k26@gmail.com" className="text-secondary font-semibold hover:underline">
                shernova2k26@gmail.com
              </a>
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground">Limited spots remaining</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground font-medium">Register before spots fill up!</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section data-testid="cta-section" className="py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join innovators in creating solutions that matter. This is your chance to be part of something bigger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                data-testid="final-cta-button"
                className="inline-flex items-center px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Secure Your Spot Now
                <ArrowRight className="ml-2" size={24} />
              </a>
              <a
                href="/agenda"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
              >
                View Full Agenda
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}