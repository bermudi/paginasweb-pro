import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const AnimatedTabContent: React.FC<AnimatedTabContentProps> = ({ isActive, children }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl p-8 shadow-lg border border-white/20"
    >
      {children}
    </motion.div>
  );
};