import React from 'react';
import { motion } from 'framer-motion';

export interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
  activeSection?: string | null;
  onToggle?: (id: string) => void;
  singleOpenMode?: boolean;
}

/**
 * CollapsibleSection is a reusable component for collapsible content blocks.
 */
const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
  id = '',
  activeSection = null,
  onToggle,
  singleOpenMode = false
}) => {
  // Use local state only when not in single open mode
  const [localIsOpen, setLocalIsOpen] = React.useState(defaultOpen);
  
  // Determine if section is open based on mode
  const isOpen = singleOpenMode ? activeSection === id : localIsOpen;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => {
          if (singleOpenMode && onToggle) {
            onToggle(id);
          } else {
            setLocalIsOpen(!localIsOpen);
          }
        }}
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
