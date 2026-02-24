import React from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-primary/5 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
              SHE<span className="text-secondary">rnova</span> 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A 30-hour innovation movement celebrating women-centric tech solutions that create real impact.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-secondary" />
                <span className="text-sm">hello@shernova.tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm">Algorithm Building, AUCE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#" className="block text-sm hover:text-secondary transition-colors">
                Code of Conduct
              </a>
              <a href="#" className="block text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm hover:text-secondary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 SHErnova. Part of Andhra University Centenary Celebrations.
            </p>
            <motion.div
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <Heart size={16} className="text-secondary fill-secondary" />
              <span>by GDGOC AUCE & Girl Up</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};