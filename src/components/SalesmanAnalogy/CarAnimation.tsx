import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * BouncyCarAnimation renders the animated car SVG with bounce and drive-away effect.
 */
const BouncyCarAnimation: React.FC = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carRef, { once: false, amount: 0.5 });
  const isAnimating = useRef(false); // New: Flag to prevent overlapping sequences
  const carControls = useAnimation();
  const shadowControls = useAnimation();
  const headlightControls = useAnimation();

  const runAnimationSequence = async () => {
    if (isAnimating.current) return; // Prevent overlaps
    isAnimating.current = true;

    // console.log('Starting sequence'); // Debug (uncomment for testing)

    carControls.set({ y: -80, scale: 1, x: -200 });
    shadowControls.set({ opacity: 0.2, scaleX: 0.3, scaleY: 0.3 }); // Amplified initial scale for more noticeable growth
    headlightControls.set({ scale: 0 });

    await Promise.all([
      carControls.start({ y: 10, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }),
      shadowControls.start({ opacity: 0.4, scaleX: 1, scaleY: 1, transition: { duration: 1, ease: "easeInOut" } }),
      headlightControls.start({ scale: 1, transition: { duration: 1, ease: "easeInOut" } }) // Optional: Change to { scale: 1.2 } for more noticeability, then add await headlightControls.start({ scale: 1 });
    ]);
    // console.log('Initial drop and shadow growth complete'); // Debug

    // Pause briefly in middle (implicit from timings, but add delay if needed)
    await new Promise(resolve => setTimeout(resolve, 300)); // Optional: Explicit short pause in middle

    await shadowControls.start({ opacity: 0, transition: { duration: 0.3 } });
    // console.log('Shadow fade complete'); // Debug

    await carControls.start({ y: 600, scale: 1.5, transition: { duration: 2, ease: "easeIn" } }); // Toned down scale to 1.5 to reduce "huge" growth; keeps downward exit
    // console.log('Drive-away complete'); // Debug

    await new Promise(resolve => setTimeout(resolve, 500));
    isAnimating.current = false; // Allow next run
    runAnimationSequence(); // Recursive loop
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isInView && !isAnimating.current) {
      // Debounce to stabilize during scrolling
      timeout = setTimeout(() => {
        runAnimationSequence();
      }, 100); // Short delay to avoid rapid triggers
    }
    return () => {
      clearTimeout(timeout);
      carControls.stop();
      shadowControls.stop();
      headlightControls.stop();
    };
  }, [isInView]);

  return (
    <div ref={carRef} className="relative w-full h-full">
      <motion.div
        className="absolute bottom-0 left-1/2"
        animate={carControls}
        initial={{ y: -80, x: -180 }} // Kept -180 for centering as you mentioned
      >
        <svg
          width="400"
          height="250"
          viewBox="200 150 420 350"
          className="overflow-visible"
        >
          <motion.ellipse
            className="bouncy-car-shadow"
            fill="#000"
            cx="410.8"
            cy="411.6"
            rx="143"
            ry="7.4"
            animate={shadowControls}
            style={{ transformOrigin: 'center' }}
          />
          <motion.g className="bouncy-car-chassis"> {/* Removed chassisControls since bounce is unwanted */}
            <line fill="none" stroke="#3B82F6" strokeWidth="26" strokeLinecap="round" strokeMiterlimit="10" x1="290" y1="370" x2="528" y2="370" />
            <path fill="#3B82F6" d="M378,361.167v-47.833c0-17.05,13.95-31,31-31h1.833c17.05,0,31,13.95,31,31v47.833" />
            <path fill="#1E40AF" d="M290,361.167v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833" />
            <polygon fill="#1E40AF" stroke="#60A5FA" strokeWidth="8" strokeMiterlimit="10" points="496.4,282.3 323.5,282.3 340.5,202.2 483.4,202.2" />
            <motion.circle
              className="headlight"
              fill="#FEF3C7"
              cx="331.7"
              cy="326.9"
              r="17.5"
              animate={headlightControls}
              style={{ transformOrigin: '410px 320px' }}
            />
            <motion.circle
              className="headlight"
              fill="#FEF3C7"
              cx="487.8"
              cy="326.9"
              r="17.5"
              animate={headlightControls}
              style={{ transformOrigin: '410px 320px' }}
            />
            <rect x="514.2" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
            <rect x="276.9" y="262.8" width="28.6" height="20.2" rx="6" ry="6" fill="#9CA3AF" />
          </motion.g>
          <g>
            {/* Removed motion.path and tyreControls */}
            <path
              className="tyre"
              fill="#374151"
              d="M345.8,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C349.8,409.1,348,410.9,345.8,410.9z"
              style={{ transformOrigin: '50% 50%' }}
            />
            {/* Removed motion.path and tyreControls */}
            <path
              className="tyre"
              fill="#374151"
              d="M502.3,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C506.3,409.1,504.5,410.9,502.3,410.9z"
              style={{ transformOrigin: '50% 50%' }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default BouncyCarAnimation;