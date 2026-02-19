import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutSection() {
  const primaryColor = 'var(--primary)'; // Professional Science Blue
  const darkColor = '#0f172a'; // Slate 900
  const lightText = '#475569'; // Slate 600

  const cards = [
    {
      id: "01",
      title: "Networking",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: primaryColor }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      description: "Forge vital connections, spark collaborations, and expand your professional network."
    },
    {
      id: "02",
      title: "Skill Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: primaryColor }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m-9 0V12.605C5.406 12.28 2 9.5 2 6.25 2 3.338 5.798 1 10.5 1s8.5 2.338 8.5 5.25c0 3.25-3.406 6.03-8 6.605v4.645m-6 0h12" />
        </svg>
      ),
      description: "Enhance your expertise, refine your techniques, and cultivate new skills through tailored workshops."
    },
    {
      id: "03",
      title: "Career Advancement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: primaryColor }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
      ),
      description: "Chart your academic journey and unlock new career horizons through invaluable connections."
    },
    {
      id: "04",
      title: "Global Recognition",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '28px', height: '28px', color: primaryColor }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      description: "Gain international visibility for your research and achievements on a global stage."
    }
  ];

  return (
    <section id="about" style={{ padding: '3rem 0', backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(15, 103, 177, 0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center'
        }}>

          {/* Left Column: Text Content */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{
              display: 'inline-block',
              padding: '4px 10px',




              backgroundColor: 'rgba(30, 64, 175, 0.1)',
              color: primaryColor,
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}>
              WHY CHOOSE US
            </div>

            <h2 style={{
              color: darkColor,
              fontWeight: '800',
              textTransform: 'uppercase',
              fontSize: '1.75rem',
              marginBottom: '1.5rem',
              letterSpacing: '-0.5px',
              lineHeight: '1.2'
            }}>
              Why You Should <br />
              <span style={{
                background: 'var(--brand-gradient, linear-gradient(135deg, #0F172A 0%, #1E40AF 100%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block' // Ensures gradient applies correctly
              }}>Join Our Events</span>
            </h2>

            <p style={{
              fontSize: '0.95rem',
              color: lightText,
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: 'justify'
            }}>
              Scienga Global Summits stands at the forefront of academic excellence, uniting scholars, researchers, and professionals worldwide. Our conferences transcend conventional boundaries, stimulating interdisciplinary dialogue and groundbreaking insights. We ignite creativity and deepen understanding, shaping a more enlightened global community.
            </p>

            <button
              onClick={() => {
                const meetingsSection = document.getElementById('meetings');
                if (meetingsSection) {
                  meetingsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                background: 'var(--brand-gradient)', // Use gradient instead of solid
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                borderRadius: '50px',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 6px -1px rgba(30, 64, 175, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(30, 64, 175, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(30, 64, 175, 0.3)';
              }}
            >
              Our Conferences
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </button>
          </div>

          {/* Right Column: Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            flex: '1 1 500px'
          }}>
            {cards.map((card, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: '180px',
                border: '1px solid #f1f5f9'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                {/* Header: Icon Container */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#eff6ff', // Very light blue
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: primaryColor
                }}>
                  {card.icon}
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: darkColor, marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.85rem', color: lightText, lineHeight: '1.5', marginBottom: '1rem', flexGrow: 1 }}>
                  {card.description}
                </p>

                {/* Number Badge - Refined */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  color: '#e2e8f0', // Slate 200
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  letterSpacing: '1px'
                }}>
                  {card.id}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
