import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundParticles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/30 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
      
      {/* Background large glowing blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }} />
    </div>
  );
}
