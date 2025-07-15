import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

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
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
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

export const CarAnalogy = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a Website is Like Buying a Car
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding the web development process through a familiar analogy that clarifies
            roles, responsibilities, and expectations for everyone involved.
          </p>
        </motion.div>


        {/* Magazine-Style Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Section 1: The Digital Journey with Van Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Digital Journey</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Like a well-equipped van ready for adventure, your website should be prepared for any digital journey. From carrying your brand's message to navigating the competitive landscape.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building a website follows the same thoughtful process as choosing the right vehicle. We'll help you identify your destination and select the perfect digital vehicle for your journey.
            </p>

            {/* Van Animation */}
            <div className="van-container relative h-48 overflow-hidden rounded-lg bg-gradient-to-b from-teal-300 to-teal-200 mt-6">
              {/* Smoke Animation */}
              <div className="absolute bottom-16 right-[15%] z-0">
                <div className="smoke-puff w-2 h-2 bg-gray-400 rounded-full opacity-60" style={{ animationDelay: '0s' }}></div>
                <div className="smoke-puff w-2 h-2 bg-gray-300 rounded-full opacity-50 absolute top-0 right-1" style={{ animationDelay: '0.3s' }}></div>
                <div className="smoke-puff w-2 h-2 bg-gray-200 rounded-full opacity-40 absolute top-0 right-2" style={{ animationDelay: '0.6s' }}></div>
              </div>

              <svg
                className="van-main absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                width="200"
                height="120"
                viewBox="0 0 545.6 313.5"
              >
                {/* Shadow */}
                <ellipse className="van-shadow" cx="277" cy="290" rx="120" ry="8" fill="#000" />

                <g className="van-wrapper">
                  {/* Surf Board */}
                  <g className="surf-board">
                    <path fill="#FDBE25" d="M418.3,59.4c-14.5-4-106.5-10.5-120.5-10.5s-92.7,0.8-108.5,3c-14.1,2-43.4,4.5-57,7.5H418.3z" />
                    <path fill="#FDBE25" d="M415.3,60.4c14.5,5,19.5,12.5,19.5,12.5l-165.2-3l-165.2,3c0,0-3.3-2,0-5.5c3.3-3.5,10.6-3.1,20.8-6c1.1-0.3,2.6-1,4.3-1H415.3z" />
                    <path fill="#FDBE25" d="M360.7,51.6c0,0-0.9-5.2,10.6-17.3s21.6-11.9,21.6-11.9h11.9l6.5,2.2L399.1,42l-3.8,12.6L360.7,51.6z" />
                    <rect x="146.3" y="73" width="6.8" height="12" fill="#FDBE25" />
                    <rect x="390.3" y="72.9" width="7.5" height="12" fill="#FDBE25" />
                  </g>

                  {/* Van Body */}
                  <g>
                    {/* Front Section */}
                    <path fill="#F9F8DE" d="M213.4,161.9l0-67.7c-73.1,0.3-134.6,1.1-136.6,2.7c-5,4-28.1,49.6-28.1,58.1c0,2,0,4.6,0,7.4L213.4,161.9z" />
                    <path fill="#F57D41" d="M213.4,161.2l0.4,76.3h-29.5l-16.5-30h-42.5l-18.5,30h-56l-2-54.9c0,0,0-11.8,0-21.1L213.4,161.2z" />
                    <polygon fill="#F57D41" stroke="#EA5514" strokeWidth="2" points="205.8,160.4 205.8,196.4 116.1,197.6 107.8,215.4 86.3,215.4 85.9,160.4" />

                    {/* Main Body */}
                    <path fill="#F9F8DE" d="M271.8,161.4l205-1c0,0,0-16.6,0-19.4c0-10.6-9.1-42.6-14.1-46.1c-3-2.1-139.9-3.1-250.9-2.7v54.2l0.6,15H271.8z" />
                    <polygon fill="#F57D41" points="476.8,159.3 476.8,237.4 447.3,237.4 437.8,222.4 376.3,222.4 366.8,237.4 212.8,237.4 212.1,159.9" />

                    {/* Windows */}
                    <path fill="#BDE6E3" d="M260.8,147.4h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C272.8,142,267.4,147.4,260.8,147.4z" />
                    <path fill="#BDE6E3" d="M325.3,147.4h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C337.3,142,331.9,147.4,325.3,147.4z" />
                    <path fill="#BDE6E3" d="M388.8,146.9h-29c-6.6,0-12-5.4-12-12v-19.5c0-6.6,5.4-12,12-12h29c6.6,0,12,5.4,12,12v19.5C400.8,141.5,395.4,146.9,388.8,146.9z" />

                    {/* Details */}
                    <path fill="#F9F8DE" d="M72.3,99.4h395c0,0-6-6.1-8.7-8c-2.8-1.9-8.1-6-13.4-6s-345.1,0-345.1,0l-7.5,0.5c0,0-8.7,2.6-11.8,4.4C77.7,92,72.3,99.4,72.3,99.4z" />
                    <rect x="204.8" y="155.9" width="272" height="5.5" fill="#EA5514" />
                    <rect x="48.8" y="155.9" width="37.1" height="5.5" fill="#EA5514" />
                    <rect x="85.8" y="155.9" width="122.5" height="5.5" fill="#EA5514" />

                    {/* Side Lines */}
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="167.9" x2="447.8" y2="167.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="173.9" x2="447.8" y2="173.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="179.9" x2="447.8" y2="179.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="185.9" x2="447.8" y2="185.9" />
                    <line stroke="#595757" strokeWidth="3" x1="407.8" y1="191.9" x2="447.8" y2="191.9" />
                  </g>

                  {/* Wheels */}
                  <g>
                    {/* Front Wheel */}
                    <circle cx="146.3" cy="245.9" r="24" fill="#898989" />
                    <circle cx="146.6" cy="246.2" r="11" fill="#FFFFFF" />
                    <g className="inner-wheel" style={{ transformOrigin: '146.3px 245.9px' }}>
                      <path fill="#C9CACA" d="M146.8,239c-4.1,0-7.3,3.2-7.3,7.2c0,4,3.3,7.2,7.3,7.2c0-2.3,0-4.7,0-7c2.8,0,4.7,0,7.3,0c0-0.1,0-0.2,0-0.2C154.1,242.2,150.9,239,146.8,239z" />
                    </g>

                    {/* Back Wheel */}
                    <circle cx="408.3" cy="245.9" r="24" fill="#898989" />
                    <circle cx="408.6" cy="246.2" r="11" fill="#FFFFFF" />
                    <g className="inner-wheel" style={{ transformOrigin: '408.3px 245.9px' }}>
                      <path fill="#C9CACA" d="M408.8,239c-4.1,0-7.3,3.2-7.3,7.2c0,4,3.3,7.2,7.3,7.2c0-2.3,0-4.7,0-7c2.8,0,4.7,0,7.3,0c0-0.1,0-0.2,0-0.2C416.1,242.2,412.9,239,408.8,239z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Section 2: Performance with Bouncy Car Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Peak Performance</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your website should perform like a finely-tuned sports car - fast, responsive, and reliable. Every component working in perfect harmony to deliver an exceptional user experience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Just as you expect your car to start every time and handle smoothly, your customers expect your website to load quickly and function flawlessly across all devices.
            </p>

            {/* Bouncy Car Animation */}
            <div className="car-container relative h-48 overflow-hidden rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-100 mt-6">
              <svg
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                width="180"
                height="120"
                viewBox="0 0 800 600"
              >
                <ellipse className="bouncy-car-shadow" fill="#000" cx="410.8" cy="411.6" rx="143" ry="7.4" />
                <g className="bouncy-car-chassis">
                  <line fill="none" stroke="#3B82F6" strokeWidth="26" strokeLinecap="round" strokeMiterlimit="10" x1="290" y1="370" x2="528" y2="370" />
                  <path fill="#3B82F6" d="M378,361.167v-47.833c0-17.05,13.95-31,31-31h1.833c17.05,0,31,13.95,31,31v47.833" />
                  <path fill="#1E40AF" d="M290,361.167v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833" />
                  <polygon fill="#1E40AF" stroke="#60A5FA" strokeWidth="8" strokeMiterlimit="10" points="496.4,282.3 323.5,282.3 340.5,202.2 483.4,202.2" />
                  <circle className="headlight" fill="#FEF3C7" cx="331.7" cy="326.9" r="17.5" />
                  <circle className="headlight" fill="#FEF3C7" cx="487.8" cy="326.9" r="17.5" />
                  <rect x="514.2" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
                  <rect x="276.9" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
                </g>
                <g>
                  <path className="tyre" fill="#374151" d="M345.8,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C349.8,409.1,348,410.9,345.8,410.9z" />
                  <path className="tyre" fill="#374151" d="M502.3,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C506.3,409.1,504.5,410.9,502.3,410.9z" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections with Collapsible Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Role vs. Our Role: A Detailed Breakdown
          </h3>

          <CollapsibleSection title="What You Bring to the Table" defaultOpen={true}>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Your Business Vision</h5>
                  <p className="text-gray-600">Just like knowing whether you need a family SUV or a sports car, you understand your business goals, target audience, and brand identity.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Content & Materials</h5>
                  <p className="text-gray-600">You provide the text, images, logos, and other content - the equivalent of telling us your preferred car color and features.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Feedback & Decisions</h5>
                  <p className="text-gray-600">Like test-driving different models, you review our work and provide feedback to ensure we're building exactly what you need.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What We Handle for You">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Technical Implementation</h5>
                  <p className="text-gray-600">We handle all the coding, hosting, security, and technical aspects - like the car dealer handling financing, paperwork, and delivery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Design & User Experience</h5>
                  <p className="text-gray-600">We create intuitive, beautiful designs that work perfectly across all devices - ensuring your digital vehicle runs smoothly on every road.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Optimization & Performance</h5>
                  <p className="text-gray-600">We optimize for speed, search engines, and conversions - like a mechanic fine-tuning your engine for peak performance.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Common Expectations vs. Reality">
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-800 mb-2">❌ Unrealistic Expectation</h5>
                <p className="text-red-700 mb-2">"I want a website like Amazon, but I only have $500 and need it next week."</p>
                <p className="text-red-600 text-sm">This is like wanting a luxury car with a bicycle budget and expecting instant delivery.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">✅ Realistic Approach</h5>
                <p className="text-green-700 mb-2">"I need a professional website that showcases my services and converts visitors into customers. What's possible within my budget?"</p>
                <p className="text-green-600 text-sm">This allows us to recommend the best solution for your specific needs and budget.</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="The Development Process">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">1</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Discovery & Planning</h5>
                  <p className="text-gray-600">Like discussing your needs with a car salesperson before looking at options.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">2</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Design & Prototyping</h5>
                  <p className="text-gray-600">Creating mockups and wireframes - your website's equivalent of a test drive.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">3</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Development & Testing</h5>
                  <p className="text-gray-600">Building and testing your website - like manufacturing and quality control.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">4</div>
                <div>
                  <h5 className="font-semibold text-gray-900">Launch & Support</h5>
                  <p className="text-gray-600">Going live and providing ongoing maintenance - like delivery and warranty service.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Just like choosing the right vehicle for your journey, selecting the right web development
              partner is crucial. We'll help you navigate from concept to launch, ensuring your digital
              presence performs at its peak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};