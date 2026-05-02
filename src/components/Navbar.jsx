import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Vote, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Timeline', href: '#timeline' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Flashcards', href: '#flashcards' },
    { name: 'AI Assistant', href: '#assistant' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${scrolled ? 'mx-4' : ''}`}>
        <div className={`flex items-center justify-between ${scrolled ? 'glass-panel px-6 py-3' : ''}`}>
          
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-cyan shadow-neon-blue">
              <Vote size={20} className="text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Elec<span className="text-cyan-400">Assist</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative group text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
            <button className="px-5 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:shadow-neon-cyan">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mx-4 mt-2 p-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 font-medium p-2 hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
