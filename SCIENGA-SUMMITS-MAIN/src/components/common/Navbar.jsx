import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Modern Professional Styles
  const navHeight = '100px';
  const primaryColor = 'var(--primary)'; // #1E40AF
  const textColor = '#0F172A'; // Slate 900

  const linkStyle = {
    textDecoration: 'none',
    color: textColor,
    fontSize: '0.95rem',
    fontWeight: '500',
    letterSpacing: '0.01em',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  };

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About Us', path: '/', hash: '#about' },
    { name: 'Upcoming Events', path: '/', hash: '#meetings' },
    { name: 'Sponsorship', path: '/sponsorship' },
    {
      name: 'Policies',
      path: '#',
      subLinks: [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Refund & Cancellations', path: '/refund-cancellation' },
        { name: 'Privacy Policy', path: '/privacy' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Register Now', path: '/register', isButton: true }
  ];

  const handleLinkClick = (hash) => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
    if (hash) {
      if (location.pathname !== '/') {
        // If not on home, regular navigation will happen, then we need to scroll
        // This might need a useEffect on global level or context, but for now:
        setTimeout(() => {
          const element = document.getElementById(hash.replace('#', ''));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      height: navHeight,
      display: 'flex',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? 'none' : '1px solid #f1f5f9'
    }}>
      <div className="container nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)} style={{ display: 'flex', alignItems: 'center', marginLeft: '-30px' }}>
          <img
            src={logo}
            alt="Scienga Summits"
            style={{
              height: '85px',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hide-mobile" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link, index) => {
            if (link.isButton) {
              return (
                <Link
                  key={index}
                  to={link.path}
                  style={{
                    padding: '0.6rem 1.5rem',
                    background: 'var(--brand-gradient)',
                    color: 'white',
                    borderRadius: '50px', // Pill shape
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    letterSpacing: '0.02em',
                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    marginLeft: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                >
                  {link.name}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            }

            if (link.subLinks) {
              return (
                <div
                  key={index}
                  style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span
                    style={{
                      ...linkStyle,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: dropdownOpen ? primaryColor : textColor
                    }}
                  >
                    {link.name}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        opacity: 0.7
                      }}
                    >
                      <path d="M1 1L5 5L9 1" />
                    </svg>
                  </span>

                  {/* Dropdown Menu */}
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% - 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1001,
                    paddingTop: '20px',
                    display: dropdownOpen ? 'block' : 'none',
                    opacity: dropdownOpen ? 1 : 0,
                    transition: 'all 0.2s ease',
                    pointerEvents: dropdownOpen ? 'auto' : 'none'
                  }}>
                    <div style={{
                      background: 'white',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      borderRadius: '12px',
                      padding: '8px',
                      minWidth: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #f1f5f9'
                    }}>
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          style={{
                            padding: '10px 16px',
                            textDecoration: 'none',
                            color: '#475569',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            borderRadius: '8px',
                            display: 'block'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#F8FAFC';
                            e.target.style.color = primaryColor;
                            e.target.style.transform = 'translateX(2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#475569';
                            e.target.style.transform = 'translateX(0)';
                          }}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={index}
                to={link.hash ? `/${link.hash}` : link.path}
                className="nav-link-custom"
                style={linkStyle}
                onClick={() => handleLinkClick(link.hash)}
                onMouseEnter={(e) => {
                  e.target.style.color = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = textColor;
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="show-mobile nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{
            background: 'transparent',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#F1F5F9'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ position: 'relative', width: '24px', height: '18px' }}>
            <span style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#1E293B',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
            }}></span>
            <span style={{
              position: 'absolute',
              top: '8px',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#1E293B',
              borderRadius: '2px',
              transition: 'opacity 0.3s ease',
              opacity: isMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#1E293B',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
            }}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: navHeight,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          height: isMenuOpen ? `calc(100vh - ${navHeight})` : 0,
          overflowY: 'auto'
        }}
      >
        {navLinks.map((link, index) => {
          if (link.isButton) {
            return (
              <Link
                key={index}
                to={link.path}
                onClick={toggleMenu}
                style={{
                  padding: '14px',
                  background: 'var(--brand-gradient)',
                  color: 'white',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  marginTop: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                }}
              >
                {link.name}
              </Link>
            )
          }

          if (link.subLinks) {
            return (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: primaryColor }}>{link.name}</span>
                <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '2px solid #E2E8F0' }}>
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.path}
                      onClick={toggleMenu}
                      style={{
                        textDecoration: 'none',
                        fontSize: '1rem',
                        color: '#64748B',
                        fontWeight: '500'
                      }}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link
              key={index}
              to={link.hash ? `/${link.hash}` : link.path}
              style={{
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: textColor, // Darker text for mobile
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '0.5rem'
              }}
              onClick={() => handleLinkClick(link.hash)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  )
}
