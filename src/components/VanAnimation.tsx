import React from 'react';
import './VanAnimation.css';

/**
 * VanAnimation renders the animated van with surfboard, wheels, smoke, and all SVG details.
 * Animation styles are expected to be imported via CSS.
 */
/**
 * Props for VanAnimation component.
 * @param animationSpeed Animation speed multiplier (1 = normal, 0.5 = faster)
 * @param primaryColor Main van color (default: #F57D41)
 */
interface VanAnimationProps {
  animationSpeed?: number;
  primaryColor?: string;
}

/**
 * Animated Van SVG with surfboard, wheels, smoke, and shadow.
 * Modular, accessible, and customizable.
 */
const VanAnimation: React.FC<VanAnimationProps> = ({ animationSpeed = 1 }) => {
  return (
    <div className="van-container">
      {/* Smoke Animation as SVG */}
      <Smoke animationSpeed={animationSpeed} />
      {/* Main Van SVG */}
      <svg
        className="van-main"
        viewBox="0 0 545.6 313.5"
        width="100%"
        height="auto"
        aria-label="Animated camper van with surfboard and smoke"
        role="img"
      >
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

            {/* Front Windshield - Fixed */}
            <path fill="#BDE6E3" stroke="#DEDCC9" strokeWidth="2" d="M86.9,161.4 L87.3,150.4 L106.8,98.7 L206.8,97.9 L206.8,161.4" />

            {/* Front Door Details - Added */}
            <path fill="#F9F8DE" d="M118.6,106.4l-3.6-0.1l-3.6,2.1l-10.1,30.1c0,0-0.8,4.4,0,6.8s6.5,3,6.5,3s93.2,0,95,0s2-2.9,2-4.3c0-1.4,0-36.4,0-36.4l-0.4-1.6l-1.1,0.3H118.6z" />
            <path fill="#BDE6E3" d="M76.8,103.7c0,0,9,2.2,11.5,3.3s2.5,4,2.5,4s-12.8,29.8-14,32.2s-7,5.3-7,5.3h-17l-2-1c0,0,3.1-10.8,8.8-23.1c4.7-10.1,11.1-19.4,12.2-19.9C74.3,103.3,76.8,103.7,76.8,103.7z" />

            {/* Door Handle */}
            <path fill="#595757" d="M201.3,176.2h-12c-0.8,0-1.5-0.7-1.5-1.5v-1.1c0-0.8,0.7-1.5,1.5-1.5h12c0.8,0,1.5,0.7,1.5,1.5v1.1C202.8,175.6,202.1,176.2,201.3,176.2z" />

            {/* Main Body */}
            <path fill="#F9F8DE" d="M271.8,161.4l205-1c0,0,0-16.6,0-19.4c0-10.6-9.1-42.6-14.1-46.1c-3-2.1-139.9-3.1-250.9-2.7v54.2l0.6,15H271.8z" />
            <polygon fill="#F57D41" points="476.8,159.3 476.8,237.4 447.3,237.4 437.8,222.4 376.3,222.4 366.8,237.4 212.8,237.4 212.1,159.9" />

            {/* Side Windows */}
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
          <Wheel cx={146.3} cy={245.9} animationSpeed={animationSpeed} />
          <Wheel cx={408.3} cy={245.9} animationSpeed={animationSpeed} />
        </g>
      </svg>
    </div>
  );
};

/**
 * SVG Wheel component for VanAnimation.
 * @param cx Center x
 * @param cy Center y
 * @param animationSpeed Animation speed multiplier
 */
const Wheel: React.FC<{ cx: number; cy: number; animationSpeed: number }> = ({ cx, cy, animationSpeed }) => (
  <g
    className="van-wheel"
    style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${0.6 / animationSpeed}s` }}
    aria-hidden="true"
  >
    <circle cx={cx} cy={cy} r={24} fill="#898989" />
    <circle cx={cx + 0.3} cy={cy + 0.3} r={11} fill="#FFFFFF" />
    <path
      fill="#C9CACA"
      d={`M${cx + 0.5},${cy - 6.9}c-4.1,0-7.3,3.2-7.3,7.2c0,4,3.3,7.2,7.3,7.2c0-2.3,0-4.7,0-7c2.8,0,4.7,0,7.3,0c0-0.1,0-0.2,0-0.2C${cx + 7.3},${cy - 3.7},${cx + 4.1},${cy - 6.9},${cx + 0.5},${cy - 6.9}z`}
    />
  </g>
);

/**
 * SVG Smoke animation for VanAnimation.
 * @param animationSpeed Animation speed multiplier
 */
const Smoke: React.FC<{ animationSpeed: number }> = ({ animationSpeed }) => (
  <svg className="smoke-group" width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    <circle className="smoke-puff" cx="15" cy="45" r="8" style={{ animationDuration: `${1.5 / animationSpeed}s` }} />
    <circle className="smoke-puff smoke-puff2" cx="30" cy="50" r="6" style={{ animationDuration: `${1.5 / animationSpeed}s` }} />
    <circle className="smoke-puff smoke-puff3" cx="45" cy="55" r="4" style={{ animationDuration: `${1.5 / animationSpeed}s` }} />
  </svg>
);


export default VanAnimation;