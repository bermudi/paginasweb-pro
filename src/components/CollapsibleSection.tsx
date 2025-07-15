import React from 'react';
import { motion } from 'framer-motion';

export interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * CollapsibleSection is a reusable component for collapsible content blocks.
 */
const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      >
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default CollapsibleSection;
