import React from 'react';
import GlobeAnimation from './GlobeAnimation';
// import heroBg from '../../assets/images/hero-bg.png'; // Not used
// import logo from '../../assets/images/logo.png'; // Replaced by GlobeAnimation

export default function HeroSection() {
  return (
    <section id="home" style={{
      position: 'relative',
      width: '100%',
      minHeight: '85vh',
      height: 'auto',
      padding: 'clamp(80px, 15vh, 150px) 0',
      backgroundColor: '#0f172a', // Dark navy base
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      overflow: 'hidden'
    }}>

      {/* 3D Animated Globe Background */}
      <style>
        {`
          .hero-globe-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(2.8);
            z-index: 0;
            opacity: 0.6;
            pointer-events: none;
          }
          @media (max-width: 1200px) {
            .hero-globe-wrapper {
              transform: translate(-50%, -50%) scale(2.2);
            }
          }
          @media (max-width: 768px) {
            .hero-globe-wrapper {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0.4;
            }
          }
          @media (max-width: 480px) {
            .hero-globe-wrapper {
              transform: translate(-50%, -50%) scale(1.1); /* Much smaller on mobile */
              opacity: 0.3; /* Less intrusive on small screens */
            }
          }
        `}
      </style>

      {/* 3D Animated Globe Background */}
      <div className="hero-globe-wrapper">
        <GlobeAnimation />
      </div>

      {/* Dark Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.95) 80%)', // Focus center, dark edges
        zIndex: 1
      }}></div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px' }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          fontWeight: '800',
          margin: '0 0 1.5rem 0',
          textTransform: 'uppercase', // Kept uppercase but made tighter
          letterSpacing: '-1px', // Tighter tracking
          lineHeight: '1.1',
          textShadow: '0 4px 6px rgba(0,0,0,0.3)',
          color: '#ffffff'
        }}>
          Scienga Global Summits
        </h1>
        <h2 style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontWeight: '500',
          margin: '0 0 3.5rem 0',
          color: '#e2e8f0', // Slate 200
          letterSpacing: '1px',
          maxWidth: '800px',
          lineHeight: '1.6'
        }}>
          Where today’s research shapes tomorrow’s world
        </h2>
        <button
          onClick={() => {
            const meetingsSection = document.getElementById('meetings');
            if (meetingsSection) {
              meetingsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '16px 46px',
            fontSize: '1.125rem',
            cursor: 'pointer',
            borderRadius: '50px',
            fontWeight: '600',
            textTransform: 'capitalize',
            boxShadow: 'none',
            backdropFilter: 'blur(2px)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = 'var(--primary)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Our Conferences
          <span style={{ fontSize: '1.25rem' }}>→</span>
        </button>
      </div>
    </section>
  )
}
