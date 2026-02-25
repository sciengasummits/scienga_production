import './Brochure.css';
import { Link } from 'react-router-dom';
import brochurePdf from '../../assets/brochure/World-General-Medicine-Congress-Your-Official-Digital-Platform.pdf';
import { Download, FileText, CheckCircle } from 'lucide-react';

const Brochure = () => {
    return (
        <div className="brochure-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Conference Brochure</h1>
                </div>
            </div>

            <section className="brochure-content section-padding">
                <div className="container">
                    <div className="brochure-grid">
                        <div className="brochure-preview">
                            <div className="preview-card">
                                <div className="preview-top">
                                    <div className="preview-badge">2026 EDITION</div>
                                    <div className="preview-icon-circle">
                                        <FileText size={40} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className="preview-main">
                                    <div className="preview-title-small">ANNUAL INTERNATIONAL CONFERENCE ON</div>
                                    <div className="preview-title-large">POWERENGSUMMIT2026</div>
                                    <div className="preview-subtitle">
                                        November 10-12, 2026<br />
                                        London, United Kingdom
                                    </div>
                                </div>
                                <div className="preview-footer">
                                    <div className="footer-line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="brochure-details">
                            <h2 className="section-title-premium mb-4">Inside the Brochure</h2>
                            <p className="mb-4 text-muted">
                                Bridging Modern Power Systems and Sustainable Energy Solutions for a Greener Tomorrow. Download the official guide to explore global trends in renewable integration, high-voltage innovations, and smart grid automation.
                            </p>
                            <ul className="brochure-features mb-5">
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Technical Track Breakdown (Solar, Wind, Smart Grids)</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Keynote Speaker Profiles & Global Energy Insights</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Industrial Workshop & B2B Matchmaking Schedule</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>Exhibition Map & Partner Opportunities</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="feature-icon" />
                                    <span>London Venue Guide & Accommodation Deals</span>
                                </li>
                            </ul>

                            <div className="brochure-actions">
                                <Link to="/digital-brochure?print=true" className="download-btn">
                                    <Download size={20} />
                                    Download Brochure
                                </Link>
                                <Link to="/digital-brochure" className="view-btn">
                                    <FileText size={20} />
                                    View Online
                                </Link>
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
