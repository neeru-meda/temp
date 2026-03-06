import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, GraduationCap, Users, Github, Linkedin, BookOpen, Calendar, Building2, CheckCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    branch: '',
    year: '',
    teamName: '',
    teamMembers: '',
    teamLeader: '',
    github: '',
    linkedin: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.college.trim()) newErrors.college = 'College/University is required';
    if (!formData.degree.trim()) newErrors.degree = 'Degree is required';
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
    if (!formData.year.trim()) newErrors.year = 'Year is required';
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (!formData.teamMembers.trim()) newErrors.teamMembers = 'Number of team members is required';
    if (!formData.teamLeader.trim()) newErrors.teamLeader = 'Team leader name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        window.location.href = 'https://konfhub.com/shernova2026';
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-warm-beige via-background to-soft-lavender/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl p-12 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Registration Successful!
          </h2>
          <p className="text-muted-foreground mb-6">
            Redirecting you to payment page...
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto animate-pulse" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-32 pb-24 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-background to-soft-lavender/20 -z-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-dusty-rose/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-dark-violet/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4" data-testid="registration-title">
              Register for SHErnova Hackathon
            </h1>
            <p className="text-lg text-muted-foreground">
              Join 200+ innovators building solutions that matter
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  College / University Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="Your college or university"
                  />
                </div>
                {errors.college && <p className="text-sm text-red-500 mt-1">{errors.college}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Degree <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <select
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none"
                  >
                    <option value="">Select degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.E">B.E</option>
                    <option value="BCA">BCA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="BSc">BSc</option>
                    <option value="MSc">MSc</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.degree && <p className="text-sm text-red-500 mt-1">{errors.degree}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Branch <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="e.g., Computer Science"
                  />
                </div>
                {errors.branch && <p className="text-sm text-red-500 mt-1">{errors.branch}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Year <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="5th Year">5th Year</option>
                  </select>
                </div>
                {errors.year && <p className="text-sm text-red-500 mt-1">{errors.year}</p>}
              </div>

              <div className="md:col-span-2 pt-6 border-t border-border">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">Team Details</h3>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Team Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="Your team name"
                  />
                </div>
                {errors.teamName && <p className="text-sm text-red-500 mt-1">{errors.teamName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Number of Team Members <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <select
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                    <option value="5">5 Members</option>
                  </select>
                </div>
                {errors.teamMembers && <p className="text-sm text-red-500 mt-1">{errors.teamMembers}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Team Leader Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="teamLeader"
                    value={formData.teamLeader}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="Team leader full name"
                  />
                </div>
                {errors.teamLeader && <p className="text-sm text-red-500 mt-1">{errors.teamLeader}</p>}
              </div>

              <div className="md:col-span-2 pt-6 border-t border-border">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Additional Links</h3>
                <p className="text-sm text-muted-foreground mb-6">Optional but recommended</p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  GitHub / Portfolio Link
                </label>
                <div className="relative">
                  <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="https://github.com/yourusername"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  LinkedIn Profile
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                data-testid="submit-registration"
                className="flex-1 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                Proceed to Payment
              </button>
              <button
                type="button"
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/5 transition-colors"
              >
                Cancel
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              By registering, you agree to our Terms & Conditions
            </p>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
