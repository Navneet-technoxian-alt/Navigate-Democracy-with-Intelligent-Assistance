import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserPlus, Megaphone, CheckSquare, BarChart } from 'lucide-react';

const steps = [
  { id: 1, title: "Voter Registration", date: "Phase 1", desc: "Ensure your civic identity is verified and active in the national database.", icon: <UserPlus /> },
  { id: 2, title: "Candidate Nominations", date: "Phase 2", desc: "Official filing of candidacy by representatives and independent runners.", icon: <Calendar /> },
  { id: 3, title: "Campaigning", date: "Phase 3", desc: "Public discourse, rallies, and manifesto presentations across districts.", icon: <Megaphone /> },
  { id: 4, title: "Election Day", date: "Phase 4", desc: "The democratic process in action. Secure, verifiable, and transparent voting.", icon: <CheckSquare /> },
  { id: 5, title: "Results Declaration", date: "Phase 5", desc: "Algorithmic tallying and official certification of the electoral outcome.", icon: <BarChart /> }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">Electoral Process Flow</h2>
          <p className="text-slate-400">A structured timeline of civic duty and democratic progression.</p>
        </motion.div>

        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cyan to-accent rounded-full opacity-30" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                className={`relative flex items-center mb-12 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-dark-900 border-2 border-cyan shadow-neon-cyan flex items-center justify-center z-10 text-cyan-400">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <motion.div 
                    className="glass-card p-6 relative group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-sm font-bold text-primary-400 mb-2 block">{step.date}</span>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
