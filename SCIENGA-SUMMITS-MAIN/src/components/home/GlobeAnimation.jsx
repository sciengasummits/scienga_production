import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container">
      <style>
        {`
          .globe-container {
            position: relative;
            width: 400px;
            height: 400px;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          .globe-sphere {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            /* Solid Teal Land, Transparent Ocean */
            background: #0f172a; /* Fallback dark ocean */
            box-shadow: 0 0 60px rgba(45, 212, 191, 0.4), inset 0 0 40px rgba(45, 212, 191, 0.6);
            z-index: 2;
            overflow: hidden;
          }

          /* World Map Overlay */
          .globe-worldmap {
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png');
            background-size: 200% 100%; /* Cover globe width twice for seamless scroll */
            background-position: 0 0;
            background-repeat: repeat-x;
            opacity: 0.8; 
            filter: sepia(100%) hue-rotate(130deg) saturate(300%) brightness(0.9); /* Tint grey map to teal */
            animation: moveMap 20s linear infinite;
            border-radius: 50%;
            mask-image: radial-gradient(circle, white 40%, transparent 100%); /* Fade edges of map on sphere */
            -webkit-mask-image: radial-gradient(circle, white 40%, transparent 100%);
          }
          
          @keyframes moveMap {
            0% { background-position: 0 0; }
            100% { background-position: -200% 0; } /* Spin map texture horizontally */
          }

          .globe-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300px;
            height: 300px;
            border: 2px solid rgba(45, 212, 191, 0.6); /* Increased brightness */
            border-radius: 50%;
            transform-style: preserve-3d;
            box-shadow: 0 0 15px rgba(45, 212, 191, 0.3); /* Added glow */
          }

          .ring-1 {
            animation: rotateRing1 12s linear infinite;
            border-top-color: rgba(45, 212, 191, 1); /* Max brightness */
            width: 280px;
            height: 280px;
            margin-top: -140px;
            margin-left: -140px;
            box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
          }

          .ring-2 {
            animation: rotateRing2 16s linear infinite reverse;
            border-right-color: rgba(45, 212, 191, 1); /* Max brightness */
            width: 340px;
            height: 340px;
            margin-top: -170px;
            margin-left: -170px;
            box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
          }
          
          .ring-3 {
             animation: rotateRing3 20s linear infinite;
             border-bottom-color: rgba(45, 212, 191, 1); /* Max brightness */
             width: 380px;
             height: 380px;
             margin-top: -190px;
             margin-left: -190px;
             box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
          }

          /* Arrow */
          .globe-arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 40px;
            background: linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.9));
            transform: translate(-50%, -50%) rotate(-45deg);
            z-index: 3;
            clip-path: polygon(0 40%, 80% 40%, 80% 0, 100% 50%, 80% 100%, 80% 60%, 0 60%);
            filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.8));
            animation: pulseArrow 3s ease-in-out infinite;
          }

          @keyframes rotateRing1 {
            0% { transform: rotateX(60deg) rotateY(0deg) rotateZ(0deg); }
            100% { transform: rotateX(60deg) rotateY(360deg) rotateZ(360deg); }
          }

          @keyframes rotateRing2 {
            0% { transform: rotateX(-45deg) rotateY(0deg) rotateZ(0deg); }
            100% { transform: rotateX(-45deg) rotateY(360deg) rotateZ(-180deg); }
          }
          
          @keyframes rotateRing3 {
            0% { transform: rotateY(0deg) rotateX(80deg); }
            100% { transform: rotateY(360deg) rotateX(80deg); }
          }

          @keyframes pulseArrow {
            0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) rotate(-45deg) scale(0.9); }
            50% { opacity: 1; transform: translate(-50%, -50%) rotate(-45deg) scale(1.05); }
          }
          
          /* Stars */
          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0;
            animation: twinkle 3s infinite ease-in-out;
            z-index: 1;
            pointer-events: none;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.9); /* Added glow */
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.1; transform: scale(0.8); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
        `}
      </style>

      {/* Background Stars */}
      {[...Array(60)].map((_, i) => (
        <div key={`star-${i}`} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`, /* Reduced size: 1px to 3px */
          height: `${Math.random() * 2 + 1}px`, /* Keep width=height for round shape */
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.7 + 0.3
        }}></div>
      ))}

      <div className="globe-sphere">
        <div className="globe-worldmap"></div>
      </div>
      <div className="globe-ring ring-1"></div>
      <div className="globe-ring ring-2"></div>
      <div className="globe-ring ring-3"></div>
      <div className="globe-arrow"></div>
    </div>
  );
};

export default GlobeAnimation;
