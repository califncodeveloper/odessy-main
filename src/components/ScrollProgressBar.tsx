import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-[#AA8221] via-[#D4AF37] to-[#FFF0D0] origin-left shadow-[0_0_12px_rgba(212,175,55,0.8)]"
      />
    </div>
  );
};
