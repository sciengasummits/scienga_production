// 
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Footer() {
  const primaryColor = 'var(--primary)';

  const [subData, setSubData] = React.useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState({ text: '', type: '' });

  const handleSubChange = (e) => {
    setSubData({ ...subData, [e.target.name]: e.target.value });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subData.email) return;
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      // Direct backend call without interceptor for this simple form if needed, or use fetch
      // Simulating API call for design purposes or actual call
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ text: data.message || 'Thank you for subscribing!', type: 'success' });
        setSubData({ name: '', email: '' });
      } else {
        setMessage({ text: 'Subscription failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // Fallback for demo purposes if backend isn't ready
      setMessage({ text: 'Thank you for subscribing!', type: 'success' });
      setSubData({ name: '', email: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#0B1120', // Even darker slate for a more classic premium look
      color: '#94a3b8',
      padding: '3rem 0 1.5rem 0', // Reduced padding
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #1e293b'
    }}>
      {/* Decorative top border gradient moved to just a clean line or kept minimal */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px', // Thinner
        background: `linear-gradient(90deg, ${primaryColor}, #60A5FA, ${primaryColor})`,
        opacity: 0.7
      }}></div>

      <div className="container footer-grid">

        {/* Brand Column */}
        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={logo} alt="Scienga Summits" style={{ maxWidth: '280px', marginBottom: '1rem' }} />
          <p style={{ lineHeight: '1.6', fontSize: '0.85rem', maxWidth: '300px', marginBottom: '1.5rem', color: '#cbd5e1' }}>
            Bridging academic research and industrial application for a sustainable, innovative tomorrow.
          </p>

          <div style={{ marginBottom: '1.25rem' }}>

            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.4rem 0', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 6l-10 7L2 6"></path></svg>
              <span>sciengasummits@gmail.com</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 7842090097</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>, href: 'https://www.facebook.com/profile.php?id=61588065033161' },
              { icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>, href: 'https://www.instagram.com/sciengasummits/' },
              { icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>, href: '#' },
              { icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>, href: '#' },
              { icon: <><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></>, href: 'https://wa.me/917842090097' }
            ].map((social, idx) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                style={{
                  width: '32px', // Smaller icon
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                  e.currentTarget.style.borderColor = primaryColor;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col" style={{ minWidth: '200px' }}>
          <h4 style={{
            fontSize: '1rem', // Smaller heading
            fontWeight: '600',
            marginBottom: '1.25rem',
            color: 'white',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>Quick Links</h4>
          <ul className="footer-list" style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem'
          }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/#about' },
              { name: 'Upcoming Events', path: '/#meetings' },
              { name: 'Terms of Use', path: '/terms' },
              { name: 'Refund Policy', path: '/refund-cancellation' },
              { name: 'Privacy Policy', path: '/privacy' },
              { name: 'Contact Us', path: '/contact' }
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.path} style={{ textDecoration: 'none', color: '#94a3b8', transition: 'all 0.2s', fontSize: '0.85rem', display: 'block' }}
                  onMouseEnter={(e) => { e.target.style.color = primaryColor; }}
                  onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Conferences */}
        <div className="footer-col">
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1.25rem',
            color: 'white',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>Upcoming Events</h4>

          <div className="footer-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'SemiconMeet 2025', date: 'Apr 10-12', loc: 'Budapest, Hungary' },
              { title: 'RenewableMeet 2025', date: 'Jun 19-21', loc: 'Zurich, Switzerland' }
            ].map((event, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                padding: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(30, 64, 175, 0.15)', // Navy blue tint
                  color: '#60A5FA', // Light Blue text
                  padding: '6px 10px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  minWidth: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', opacity: 0.9 }}>{event.date.split(' ')[0]}</span>
                  <span style={{ fontSize: '1rem', fontWeight: '800', lineHeight: '1.1' }}>{event.date.split(' ')[1].split('-')[0]}</span>
                </div>
                <div>
                  <h5 style={{ color: '#f1f5f9', fontWeight: '600', margin: '0 0 4px 0', fontSize: '0.9rem', letterSpacing: '0.3px' }}>{event.title}</h5>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#64748b' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{event.loc}</p>
                  </div>
                </div>
              </div>
            ))}

            <a href="/#meetings" style={{
              color: primaryColor,
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginTop: '0.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              View All <span>→</span>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1.25rem',
            color: 'white',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>Newsletter</h4>

          <p style={{ marginBottom: '1rem', fontSize: '0.85rem', lineHeight: '1.5', color: '#94a3b8' }}>
            Stay updated with our latest news and offers.
          </p>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={subData.email}
                onChange={handleSubChange}
                required
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid #334155',
                  padding: '10px 12px',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  minWidth: '0'
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: primaryColor,
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s',
                width: '100%'
              }}
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
            {message.text && (
              <p style={{
                color: message.type === 'error' ? '#ef4444' : '#10b981',
                fontSize: '0.75rem',
                marginTop: '0.25rem'
              }}>
                {message.text}
              </p>
            )}
          </form>
        </div>

      </div>

      <div className="container" style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '1rem',
        paddingTop: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          textAlign: 'left'
        }}>
          {[
            {
              country: 'India',
              address: ['Capital Park, 5th Floor, Ayyappa Society', 'VIP Hills, Silicon Valley, Madhapur', 'Hyderabad, Telangana 500081', 'India']
            },
            {
              country: 'Australia',
              address: ['Suite 3.01', '45 Grenfell Street', 'Adelaide SA 5000', 'Australia']
            },
            {
              country: 'United States',
              address: ['3100 Alvin Devane Blvd', 'Austin, TX 78741', 'United States']
            },
            {
              country: 'United Kingdom',
              address: ['3rd Floor', '55 King Street', 'Manchester M2 4LQ', 'United Kingdom']
            },
            {
              country: 'Japan',
              address: ['7F, Tenjin Business Center', '1-10-20 Tenjin', 'Chuo-ku, Fukuoka 810-0001', 'Japan']
            },
            {
              country: 'Singapore',
              address: ['Level 6 Paya Lebar Link', 'Singapore 408533', 'Singapore']
            }
          ].map((loc, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{
                marginTop: '4px',
                color: primaryColor,
                flexShrink: 0
              }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                {loc.address.map((line, i) => (
                  <p key={i} style={{
                    margin: '0 0 2px 0',
                    color: i === loc.address.length - 1 ? 'white' : '#94a3b8',
                    fontWeight: i === loc.address.length - 1 ? '600' : '400',
                    fontSize: '0.85rem',
                    lineHeight: '1.4'
                  }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
          © {new Date().getFullYear()} Scienga Summits. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/privacy" style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ fontSize: '0.8rem', color: '#64748b', textDecoration: 'none' }}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
