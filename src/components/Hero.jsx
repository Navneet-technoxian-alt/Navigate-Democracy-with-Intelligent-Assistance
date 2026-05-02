import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-primary/30 text-primary-400"
        >
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-sm font-medium tracking-wide uppercase text-slate-300">Next-Gen Civic Tech</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Navigate Democracy with <br/>
          <span className="text-gradient">Intelligent Assistance</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience a cinematic, interactive journey through the election process. 
          Powered by AI to provide real-time guidance and immersive data visualization.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary w-full sm:w-auto group">
            Explore Timeline
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            Talk to AI Assistant
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient sphere behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 z-0 pointer-events-none" />
    </section>
  );
}
