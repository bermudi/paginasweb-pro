import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * BouncyCarAnimation renders the animated car SVG with bounce and drive-away effect.
 */
const BouncyCarAnimation: React.FC = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carRef, { once: false, amount: 0.5 });
  const carControls = useAnimation();
  const shadowControls = useAnimation();
  const tyreControls = useAnimation();
  const chassisControls = useAnimation();
  const headlightControls = useAnimation();

  // Animation sequence logic (identical to CarAnalogy.tsx)
  const runAnimationSequence = async () => {
    carControls.set({ y: -80, scale: 1, x: -150 });
    shadowControls.set({ opacity: 0.2, scaleX: 0.5, scaleY: 0.5 });
    tyreControls.set({ y: -30, scaleX: 1 });
    chassisControls.set({ y: 0 });
    headlightControls.set({ scale: 0 });
    await Promise.all([
      carControls.start({ y: 10, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }),
      shadowControls.start({ opacity: 0.4, scaleX: 1, scaleY: 1, transition: { duration: 1, ease: "easeInOut" } }),
      tyreControls.start({ y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 } }),
      headlightControls.start({ scale: 1, transition: { duration: 1, ease: "easeInOut" } })
    ]);
    await tyreControls.start({ scaleX: 1.1, transition: { duration: 0.2, ease: "easeOut" } });
    await chassisControls.start({ y: 5, transition: { duration: 0.2, ease: "easeIn" } });
    await chassisControls.start({ y: 0, transition: { duration: 0.4 } });
    await tyreControls.start({ scaleX: 1, transition: { duration: 2, type: "spring", stiffness: 100, damping: 8 } });
    await shadowControls.start({ opacity: 0, transition: { duration: 0.3 } });
    await carControls.start({ y: 600, scale: 1.82, transition: { duration: 2, ease: "easeIn" } });
    await new Promise(resolve => setTimeout(resolve, 500));
    runAnimationSequence();
  };

  useEffect(() => {
    if (isInView) {
      runAnimationSequence();
    }
    return () => {
      carControls.stop();
      shadowControls.stop();
      tyreControls.stop();
      chassisControls.stop();
      headlightControls.stop();
    };
  }, [isInView]);

  return (
    <div ref={carRef} className="relative w-full h-full">
      <motion.div
        className="absolute bottom-0 left-1/2"
        animate={carControls}
        initial={{ y: -80, x: -150 }}
      >
        <svg
          width="300"
          height="200"
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
          <motion.g animate={chassisControls} className="bouncy-car-chassis">
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
            <motion.path
              className="tyre"
              fill="#374151"
              d="M345.8,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C349.8,409.1,348,410.9,345.8,410.9z"
              animate={tyreControls}
              style={{ transformOrigin: '50% 50%' }}
            />
            <motion.path
              className="tyre"
              fill="#374151"
              d="M502.3,410.9h-29.1c-2.2,0-4-1.8-4-4v-40.9c0-2.2,1.8-4,4-4h29.1c2.2,0,4,1.8,4,4v40.9C506.3,409.1,504.5,410.9,502.3,410.9z"
              animate={tyreControls}
              style={{ transformOrigin: '50% 50%' }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default BouncyCarAnimation;
