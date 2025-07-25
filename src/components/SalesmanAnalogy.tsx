import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SalesmanAnalogyIntro } from './salesman-analogy/SalesmanAnalogyIntro';
import { DigitalJourneySection } from './salesman-analogy/DigitalJourneySection';
import { PerformanceSection } from './salesman-analogy/PerformanceSection';
import { RolesResponsibilitiesSection } from './salesman-analogy/RolesResponsibilitiesSection';
import { WorkflowSection } from './salesman-analogy/WorkflowSection';
import { CallToActionSection } from './salesman-analogy/CallToActionSection';
import './SalesmanAnalogyAnimations.css';

export const SalesmanAnalogy = () => {
  useEffect(() => {
    // Schema.org JSON-LD for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Building a Website is Like Buying a Car',
      description: 'Understanding web development through the analogy of car buying - roles, responsibilities, and expectations.',
      author: {
        '@type': 'Organization',
        name: 'PaginasWeb Pro'
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="digital-journey" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SalesmanAnalogyIntro />

        {/* Magazine-Style Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <DigitalJourneySection />
          <PerformanceSection />
        </div>

        <RolesResponsibilitiesSection />
        <WorkflowSection />
        <CallToActionSection />
      </div>
    </section>
  );
};