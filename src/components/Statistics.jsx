import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Activity, ShieldCheck } from 'lucide-react';

const StatCard = ({ icon, title, value, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
      
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
      const duration = 2000;
      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(Math.floor((progress / duration) * end), end);
        setCount(current);
        if (progress < duration) {
          window.requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(animateCount);
    }
  }, [inView, value, controls]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all" />
      <div className="text-cyan-400 mb-4 bg-cyan-400/10 p-4 rounded-2xl ring-1 ring-cyan-400/20">
        {icon}
      </div>
      <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">{title}</h4>
      <div className="text-4xl font-display font-bold text-white tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </motion.div>
  );
};

export default function Statistics() {
  return (
    <section id="statistics" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Live Civic Data</h2>
          <p className="text-slate-400">Real-time metrics tracking democratic engagement.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<Users size={28} />} 
            title="Registered Voters" 
            value="154200" 
          />
          <StatCard 
            icon={<Activity size={28} />} 
            title="Current Turnout" 
            value="68" 
            suffix="%" 
          />
          <StatCard 
            icon={<ShieldCheck size={28} />} 
            title="Verified Ballots" 
            value="104800" 
          />
        </div>
      </div>
    </section>
  );
}
