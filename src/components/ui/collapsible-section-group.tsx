import React, { useState } from 'react';
import CollapsibleSection, { CollapsibleSectionProps } from './collapsible-section';

export interface CollapsibleSectionGroupProps {
  children: React.ReactElement<CollapsibleSectionProps>[];
  defaultOpenSection?: string | null;
}

/**
 * CollapsibleSectionGroup manages a group of CollapsibleSection components
 * ensuring only one section can be open at a time.
 */
const CollapsibleSectionGroup: React.FC<CollapsibleSectionGroupProps> = ({
  children,
  defaultOpenSection = null
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(defaultOpenSection);

  const handleToggle = (id: string) => {
    // If clicking the already open section, close it
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="collapsible-section-group">
      {React.Children.map(children, (child) => {
        // Ensure we're only processing CollapsibleSection components
        if (React.isValidElement(child)) {
          // Clone the child to pass the necessary props
          return React.cloneElement(child, {
            id: child.props.id || child.props.title.replace(/\s+/g, '-').toLowerCase(),
            activeSection,
            onToggle: handleToggle,
            singleOpenMode: true
          });
        }
        return child;
      })}
    </div>
  );
};

export default CollapsibleSectionGroup;