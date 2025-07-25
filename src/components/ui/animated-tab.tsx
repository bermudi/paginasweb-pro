import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTabProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const AnimatedTab: React.FC<AnimatedTabProps> = ({ title, icon, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 font-medium ${isActive
        ? 'bg-white text-primary shadow-lg border border-primary/10'
        : 'glass text-primary/70 hover:text-primary hover:bg-white/60'
        }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{title}</span>
    </motion.button>
  );
};