import React, { useState, useEffect } from 'react';
import usePageSEO from '../../hooks/usePageSEO';
import { Bell, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import { fetchContent } from '../../api/siteApi';
import './Program.css';

const Program = () => {
    usePageSEO({
        title: 'Program Schedule',
        description: 'LIUTEX2026 conference program – keynote sessions, technical presentations, and workshops on Liutex Theory, Turbulence Mechanism, and CFD. Full schedule to be announced May 2026.',
        canonical: 'https://liutex2026.com/program',
    });
    const [contactEmail, setContactEmail] = useState('contact@liutexvortexsummit.com');
    const [formData, setFormData] = useState({ name: '', email: '', number: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        fetchContent('contact').then(data => {
            if (data && data.email) setContactEmail(data.email);
        }).catch(() => {});
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}`;
        window.location.href = `mailto:${contactEmail}?subject=Requesting%20Program%20Updates&body=${body}`;
        setFormData({ name: '', email: '', number: '' });
        setIsSubmitted(true);
    };

    return (
        <div className="program-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Program</h1>
                    <p className="page-breadcrumb">Home / Program</p>
                </div>
            </div>

            <section className="program-content section-padding">
                <div className="container">
                    <div className="contact__form-wrapper" style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--color-bg-light)', padding: '2rem', borderRadius: '15px' }}>
                        <div className="form-header text-center mb-4">
                            <div className="program-icon mx-auto mb-3">
                                <Bell size={48} color="white" />
                            </div>
                            <h3>Request Program Schedule</h3>
                            <p>The comprehensive conference schedule will be revealed by May 2026. Fill the form to get notified directly.</p>
                        </div>
                        {isSubmitted ? (
                            <div className="text-center" style={{ padding: '2rem 0' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CheckCircle size={64} style={{ color: '#22c55e', margin: '0 auto 1rem auto' }} />
                                </div>
                                <h4>Request Received!</h4>
                                <p style={{ color: 'var(--color-text-body)', marginTop: '0.5rem' }}>Thank you. We have securely recorded your information and will notify you exactly when the detailed program schedule is released.</p>
                                <Button onClick={() => setIsSubmitted(false)} style={{ marginTop: '1.5rem', background: 'transparent', color: 'var(--color-primary-start)', border: '1px solid var(--color-primary-start)' }}>
                                    Submit Another Request
                                </Button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                                        <input type="text" className="form-control" placeholder="John Doe" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
                                        <input type="email" className="form-control" placeholder="john@example.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Contact Number</label>
                                    <input type="tel" className="form-control" placeholder="+1 234 567 8900" required value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button type="submit" className="w-100" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Bell size={18} style={{ marginRight: '8px' }} /> NOTIFY ME ON UPDATE
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;
