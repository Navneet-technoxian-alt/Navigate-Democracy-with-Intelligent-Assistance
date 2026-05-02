import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, RefreshCw } from 'lucide-react';

const terms = [
  { id: 1, term: "Ballot", definition: "A piece of paper or electronic system used to record a vote. It lists the candidates running for office." },
  { id: 2, term: "Constituency", definition: "A specific geographical area that is represented by a legislative body member. Also known as a district." },
  { id: 3, term: "Manifesto", definition: "A public declaration of policy and aims, especially one issued before an election by a political party." },
  { id: 4, term: "Polling Station", definition: "A designated building where voters go during an election to cast their votes securely and privately." }
];

export default function Flashcards() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="flashcards" className="py-24 relative z-10 bg-dark-800/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-accent-400 mb-2">
            <BookOpen size={18} />
            <span className="font-semibold uppercase tracking-wider text-sm">Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Civic Terminology</h2>
          <p className="text-slate-400">Interactive flashcards. Click to reveal definitions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {terms.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative w-full h-64 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleFlip(card.id)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="w-full h-full absolute top-0 left-0"
                initial={false}
                animate={{ rotateY: flippedCards[card.id] ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* Front */}
                <div 
                  className="absolute inset-0 glass-card flex flex-col items-center justify-center p-6 text-center shadow-neon-blue/10"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-400 mb-4 border border-primary/20">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{card.term}</h3>
                  <div className="mt-auto flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest">
                    <RefreshCw size={12} /> Click to flip
                  </div>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 glass-panel border-accent/30 bg-gradient-to-br from-dark-800 to-accent/10 flex flex-col items-center justify-center p-6 text-center shadow-neon-blue/20"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                    {card.definition}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
