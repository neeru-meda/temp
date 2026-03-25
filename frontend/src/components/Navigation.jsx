import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Facts', path: '/facts' },
    { name: 'Rules', path: '/rules' },
    { name: 'Sponsors & Mentors', path: '/sponsors-mentors' },
    { name: 'Safety', path: '/contingency' }
  ];

  return (
    <>
      <motion.nav
        data-testid="main-navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-soft-lift transition-all duration-300 ${
              isScrolled ? 'bg-background/80' : 'bg-background/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <Link to="/" data-testid="logo-link" className="flex items-center space-x-3">
                <span className="font-playfair text-2xl font-semibold text-foreground">
                  SHE<span className="text-secondary">rnova</span>
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-x-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors relative group ${
                      location.pathname === link.path
                        ? 'text-secondary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <DarkModeToggle />
                <button
                  data-testid="mobile-menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-foreground"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 z-40 lg:hidden"
          >
            <div className="mx-6 bg-background/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-soft-lift p-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors py-2 ${
                      location.pathname === link.path
                        ? 'text-secondary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};