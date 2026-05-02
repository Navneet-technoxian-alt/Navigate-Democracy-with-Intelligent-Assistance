import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0 mix-blend-screen"
        animate={{
          x: mousePosition.x - 192, // 192 is half of 96 (w-96 = 384px)
          y: mousePosition.y - 192,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-64 h-64 bg-cyan/20 rounded-full blur-[80px] z-0 mix-blend-screen"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
      />
    </>
  );
}
