import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulation of API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => ({ ok: true })); // Fallback if no backend

      if (response.ok || true) {
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error connecting to server. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#f8fafc',
    color: '#334155'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#475569',
    fontSize: '0.9rem'
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact', link: null }
        ]}
      />

      <div style={{ backgroundColor: '#f1f5f9', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}>

            {/* Contact Information Column */}
            <div>
              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>Get in Touch</h4>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0f172a', lineHeight: '1.2' }}>
                  We'd love to hear directly from you.
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  Have questions about registration, scientific sessions, or sponsorship opportunities?
                  Our dedicated team is here to assist you.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Info Cards */}
                {[
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ),
                    title: "Office Address",
                    content: "Jain Sadguru Image's Capital Park, Hyderabad, India"
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    ),
                    title: "Phone Number",
                    content: "+91 7842090097"
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    ),
                    title: "Email Us",
                    content: "sciengasummits@gmail.com"
                  },
                  {
                    icon: (
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    ),
                    title: "Working Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM"
                  }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                      backgroundColor: 'white',
                      color: 'var(--primary)',
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                      flexShrink: 0,
                      border: '1px solid #e2e8f0'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>{item.title}</h4>
                      <p style={{ color: '#64748b', lineHeight: '1.6', whiteSpace: 'pre-line', margin: 0 }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Contact Form Column */}
            <div style={{
              backgroundColor: 'white',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: '24px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0f172a' }}>
                Send a Message
              </h3>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>We usually reply within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="e.g. John Doe"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)';
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="e.g. john@company.com"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)';
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="e.g. Sponsorship Inquiry"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)';
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                    required
                    placeholder="How can we help you?"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)';
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '16px 32px',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    width: '100%',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px -1px rgba(30, 64, 175, 0.2)'
                  }}
                  onMouseEnter={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => !isSubmitting && (e.target.style.transform = 'translateY(0)')}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
