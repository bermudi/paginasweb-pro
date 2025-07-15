import { motion } from "framer-motion";
import { useEffect } from "react";

export const CarAnalogy = () => {
  useEffect(() => {
    // Add Schema.org JSON-LD for the Car Analogy section
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Car Analogy - Web Development Process",
      "description": "Understanding web development through automotive analogies - from concept to delivery"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Car Analogy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Just like building a car, creating your website is a journey from concept to reality.
            Let us drive your digital transformation forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Van Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Journey</h3>
              <p className="text-gray-600 mb-6">
                Like a well-equipped van ready for adventure, your website should be prepared
                for any digital journey. From carrying your brand's message to navigating
                the competitive landscape.
              </p>

              {/* Van SVG Animation */}
              <div className="van-container relative h-64 overflow-hidden rounded-lg bg-gradient-to-b from-sky-200 to-sky-100">
                <style>
                  {`
                    .van-body {
                      animation: van-drive 0.8s ease-in-out infinite;
                    }
                    @keyframes van-drive {
                      0% { transform: translateY(0); }
                      50% { transform: translateY(-4px); }
                      100% { transform: translateY(0); }
                    }

                    .van-main {
                       animation: van-move 10s ease-in-out infinite;
                    }
                    @keyframes van-move {
                        0%, 100% { transform: translateX(-20px); }
                        50% { transform: translateX(20px); }
                    }
                    
                    .wheel-spin {
                      animation: spin 0.7s linear infinite;
                      transform-origin: center;
                    }
                    @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    
                    .surf-board {
                      animation: sway 2.5s ease-in-out infinite alternate;
                      transform-origin: 50% 90%;
                    }
                    @keyframes sway {
                      from { transform: rotate(-2deg); }
                      to { transform: rotate(2deg); }
                    }

                    .van-shadow {
                      animation: shadow-pulse 0.8s ease-in-out infinite;
                      transform-origin: center;
                    }
                    @keyframes shadow-pulse {
                      0%, 100% { transform: scaleX(1); opacity: 0.1; }
                      50% { transform: scaleX(0.95); opacity: 0.05; }
                    }
                  `}
                </style>

                <svg
                  className="van-main absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  width="250"
                  height="150"
                  viewBox="0 0 545.6 313.5"
                >
                  <ellipse className="van-shadow" cx="277" cy="285" rx="160" ry="8" fill="#000" />
                  <g className="van-body">
                    <g>
                      <g className="surf-board">
                        <path fill="#8B5CF6" d="M418.3,59.4c-14.5-4-106.5-10.5-120.5-10.5s-92.7,0.8-108.5,3c-14.1,2-43.4,4.5-57,7.5H418.3z" />
                        <path fill="#A78BFA" d="M415.3,60.4c14.5,5,19.5,12.5,19.5,12.5l-165.2-3l-165.2,3c0,0-3.3-2,0-5.5c3.3-3.5,10.6-3.1,20.8-6c1.1-0.3,2.6-1,4.3-1H415.3z" />
                      </g>
                      <g>
                        <path fill="#E5E7EB" d="M213.4,161.9l0-67.7c-73.1,0.3-134.6,1.1-136.6,2.7c-5,4-28.1,49.6-28.1,58.1c0,2,0,4.6,0,7.4L213.4,161.9z" />
                        <path fill="#F3F4F6" d="M271.8,161.4l205-1c0,0,0-16.6,0-19.4c0-10.6-9.1-42.6-14.1-46.1c-3-2.1-139.9-3.1-250.9-2.7v54.2l0.6,15H271.8z" />
                        <path fill="#4B5563" d="M213.4,161.2l0.4,76.3h-29.5l-16.5-30h-42.5l-18.5,30h-56l-2-54.9c0,0,0-11.8,0-21.1L213.4,161.2z" />
                        <polygon fill="#4B5563" points="476.8,159.3 476.8,237.4 447.3,237.4 437.8,222.4 376.3,222.4 366.8,237.4 212.8,237.4 212.1,159.9" />
                        <rect x="219" y="104" width="180" height="58" fill="#60A5FA" rx="5" />
                      </g>
                    </g>
                    <g>
                      <circle className="wheel-spin" cx="146.3" cy="245.9" r="34" fill="#374151" />
                      <circle cx="146.3" cy="245.9" r="15" fill="#9CA3AF" />
                      <circle className="wheel-spin" cx="408.3" cy="245.9" r="34" fill="#374151" />
                      <circle cx="408.3" cy="245.9" r="15" fill="#9CA3AF" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Bouncy Car Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Performance</h3>
              <p className="text-gray-600 mb-6">
                Your website should perform like a finely-tuned sports car - fast, responsive,
                and reliable. Every component working in perfect harmony to deliver an
                exceptional user experience.
              </p>

              {/* Bouncy Car SVG Animation */}
              <div className="car-container relative h-64 overflow-hidden rounded-lg bg-gradient-to-b from-emerald-200 to-emerald-100">
                <style>
                  {`
                    .bouncy-car-chassis {
                      animation: bounce 1.2s ease-in-out infinite;
                    }
                    @keyframes bounce {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-12px); }
                    }

                    .bouncy-car-shadow {
                      animation: shadowPulse 1.2s ease-in-out infinite;
                      transform-origin: center;
                    }
                    @keyframes shadowPulse {
                      0%, 100% { transform: scale(1); opacity: 0.2; }
                      50% { transform: scale(0.85); opacity: 0.1; }
                    }

                    .tyre {
                       animation: tyre-squash 1.2s ease-in-out infinite;
                       transform-origin: bottom;
                    }
                    @keyframes tyre-squash {
                      0%, 100% { transform: scaleY(1); }
                      50% { transform: translateY(-2px); }
                      55% { transform: scaleY(0.95) translateY(2px); }
                    }
                    
                    .headlight {
                      animation: blink 4s 1s ease-in-out infinite;
                    }
                    @keyframes blink {
                      0%, 90%, 100% { opacity: 1; }
                      95% { opacity: 0.2; }
                    }
                  `}
                </style>

                <svg
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  width="220"
                  height="150"
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
            </div>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Just like choosing the right vehicle for your journey, selecting the right web development
              partner is crucial. We'll help you navigate from concept to launch, ensuring your digital
              presence performs at its peak.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
