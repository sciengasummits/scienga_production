import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Download, FileText, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './Brochure.css';
import heroBg from '../../assets/images/hero-bg.jpg';
import brochurePdf from '../../assets/brochure/World-General-Medicine-Congress-Your-Official-Digital-Platform.pdf';

const Brochure = () => {
    const navigate = useNavigate();
    const handleDownload = () => {
        navigate('/digital-brochure?print=true');
    };

    const handleViewOnline = () => {
        navigate('/digital-brochure');
    };

    return (
        <div className="brochure-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Conference Brochure</h1>
                    <div className="page-breadcrumb">
                        <Link to="/">HOME</Link> / <span>BROCHURE</span>
                    </div>
                </div>
            </div>

            <section className="brochure-section section-padding">
                <div className="container">
                    <div className="brochure-grid">
                        <div className="brochure-preview">
                            <div className="preview-card">
                                <div className="preview-badge">2026 EDITION</div>
                                <div className="preview-icon-wrapper">
                                    <FileText size={48} color="white" strokeWidth={1.5} />
                                </div>
                                <div className="preview-content">
                                    <p className="preview-subtitle">ANNUAL INTERNATIONAL CONFERENCE ON</p>
                                    <h3 className="preview-main-title">POWERENGSUMMIT2026</h3>
                                    <p className="preview-platform">Official Digital Platform Brochure</p>
                                </div>
                            </div>
                        </div>

                        <div className="brochure-details">
                            <h2 className="details-title">Inside the Brochure</h2>
                            <p className="details-desc">
                                Download the official conference brochure to get comprehensive information about the ANNUAL INTERNATIONAL CONFERENCE ON POWER ENERGY AND ELECTRICAL ENGINEERING. It serves as your complete guide to the event, featuring detailed schedules, speaker profiles, and venue information.
                            </p>

                            <ul className="feature-list">
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>Comprehensive 3-Day Technical Program</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>Keynote Speaker Profiles & Global Energy Insights</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>Industrial Workshop & B2B Matchmaking</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>Venue Guide & Accommodation Opportunities</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>Sponsorship & Exhibition Packages</span>
                                </li>
                            </ul>

                            <div className="brochure-actions">
                                <Button onClick={handleDownload} className="btn-download">
                                    <Download size={20} />
                                    Download Brochure
                                </Button>
                                <Button variant="secondary" onClick={handleViewOnline} className="btn-view">
                                    <FileText size={20} />
                                    View Online
                                </Button>
                            </div>
                            <p className="update-note">* Official Digital Platform Guide • Updated: February 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brochure;
