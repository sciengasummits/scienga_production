import React, { useState } from 'react';
import usePageSEO from '../../hooks/usePageSEO';
import './Brochure.css';
import { useNavigate } from 'react-router-dom';
import { Download, FileText, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const Brochure = () => {
    usePageSEO({
        title: 'Conference Brochure',
        description: 'Download the official LIUTEX2026 conference brochure – program schedule, keynote speaker profiles, workshop details, venue maps, and sponsorship opportunities.',
        canonical: 'https://liutex2026.com/brochure',
    });
    const navigate = useNavigate();

    const handleDownloadClick = (e) => {
        e.preventDefault();
        alert("The full PDF brochure is currently being updated for the 2026 Edition. Please use the 'View Online' button to see the digital version.");
    };

    const [formFilled, setFormFilled] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', number: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.number) {
            setFormFilled(true);
        }
    };

    return (
        <div className="brochure-page pt-5">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Conference Brochure</h1>
                    <p className="page-breadcrumb">Home / Brochure</p>
                </div>
            </div>

            <section className="brochure-content section-padding">
                <div className="container">
                    <div className="brochure-grid">
                        <div className="brochure-preview">
                            <div className="preview-card">
                                <div className="preview-header">
                                    <div className="preview-logo-placeholder">LTVS 2026</div>
                                    <div className="preview-badge">2026 Edition</div>
                                </div>
                                <div className="preview-main">
                                    <div className="vortex-accent"></div>
                                    <h3 className="preview-title">INTERNATIONAL CONFERENCE ON LIUTEX THEORY AND TURBULENCE MECHANISM</h3>
                                    <div className="preview-divider"></div>
                                    <p className="preview-subtitle">Official Conference Brochure</p>
                                </div>
                                <div className="preview-footer">
                                    <p>December 14-16, 2026</p>
                                    <p>Outram, Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div className="brochure-details">
                            <h2 className="mb-4">Inside the Brochure</h2>
                            <p className="mb-4 text-muted">
                                Download the official conference brochure to get comprehensive information about the INTERNATIONAL CONFERENCE ON LIUTEX THEORY AND TURBULENCE MECHANISM.
                                It serves as your complete guide to the event, featuring detailed schedules, speaker profiles, and venue information.
                            </p>

                            <ul className="brochure-features mb-5">
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Complete 3-Day Program Schedule</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Keynote Speaker Biographies & Topics</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Workshop & Breakout Session Details</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Venue Maps & Accommodation Guide</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Sponsorship & Exhibition Opportunities</span>
                                </li>
                            </ul>

                            <div className="brochure-actions">
                                {!formFilled ? (
                                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                                        <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                        <input type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                        <input type="tel" placeholder="Your Number" required value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                                        <Button type="submit">Submit to Access</Button>
                                    </form>
                                ) : (
                                    <>
                                        <Button onClick={handleDownloadClick}>
                                            <Download size={20} style={{ marginRight: '8px' }} />
                                            Download Brochure
                                        </Button>
                                        <Button variant="secondary" onClick={() => navigate('/digital-brochure')}>
                                            <FileText size={20} style={{ marginRight: '8px' }} />
                                            View Online
                                        </Button>
                                    </>
                                )}
                            </div>
                            <p className="download-note mt-3">
                                * File size: 2.5 MB • Format: PDF • Updated: February 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brochure;
