import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'shernova2026admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-3xl shadow-soft-lift">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="text-primary" size={32} />
            </div>
            
            <h1 className="font-playfair text-3xl font-semibold text-foreground text-center mb-2">
              Admin Access
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Enter password to access admin panel
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  data-testid="admin-password-input"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {error && (
                <p className="text-sm text-destructive" data-testid="admin-error-message">{error}</p>
              )}

              <button
                type="submit"
                data-testid="admin-login-button"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform shadow-sketch"
              >
                Access Admin Panel
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-playfair text-5xl font-semibold text-foreground mb-8" data-testid="admin-dashboard-title">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Total Registrations', value: '247' },
              { label: 'Teams Formed', value: '58' },
              { label: 'Sponsors', value: '12' },
              { label: 'Mentors', value: '15' },
              { label: 'Judges', value: '8' },
              { label: 'Days Remaining', value: '45' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 backdrop-blur-sm border border-white/40 p-6 rounded-2xl"
              >
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-4xl font-playfair font-bold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-colors text-left">
                  Manage Registrations
                </button>
                <button className="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors text-left">
                  Update Sponsors
                </button>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors text-left">
                  Edit Agenda
                </button>
                <button className="w-full px-6 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors text-left">
                  Manage Mentors
                </button>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-white/40 p-8 rounded-2xl">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">Recent Activity</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="pb-4 border-b border-border">
                  <p className="text-sm">New registration: Team "Code Warriors"</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-sm">Sponsor "TechCorp" confirmed</p>
                  <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-sm">Mentor "Dr. Sarah Johnson" added</p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
                <div>
                  <p className="text-sm">Agenda updated with new session</p>
                  <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-2xl">
            <p className="text-sm text-accent font-medium">
              Note: This is a placeholder admin panel. Full CMS functionality will be implemented based on requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}