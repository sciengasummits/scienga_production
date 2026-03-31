import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Download, Printer, ArrowLeft, CheckCircle, Calendar, MapPin, Users, Zap, Battery, Wind, Sun, Globe } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './DigitalBrochure.css';

const DigitalBrochure = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const shouldPrint = queryParams.get('print') === 'true';

    useEffect(() => {
        if (shouldPrint) {
            const timer = setTimeout(() => {
                window.print();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [shouldPrint]);

    const handleBack = () => {
        navigate('/brochure');
    };

    return (
        <div className="digital-brochure">
            <div className="brochure-toolbar no-print">
                <div className="container toolbar-container">
                    <button className="back-link" onClick={handleBack}>
                        <ArrowLeft size={18} /> Back to Overview
                    </button>
                    <div className="toolbar-actions">
                        <Button variant="outline" className="btn-sm" onClick={() => window.print()}>
                            <Printer size={16} /> Print
                        </Button>
                        <Button variant="primary" className="btn-sm" onClick={() => window.print()}>
                            <Download size={16} /> Save as PDF
                        </Button>
                    </div>
                </div>
            </div>

            <div className="brochure-paper">
                {/* Page 1: Cover */}
                <div className="brochure-page cover-page">
                    <div className="cover-grid">
                        <div className="cover-content">
                            <div className="badge">OFFICIAL BROCHURE 2026</div>
                            <h1 className="brochure-title">
                                <span className="title-sub">ANNUAL INTERNATIONAL CONFERENCE ON</span>
                                <span className="title-main">POWERENGSUMMIT2026</span>
                            </h1>
                            <p className="brochure-tagline">
                                Advancing the Future of Global Power Systems and Sustainable Energy Solutions.
                            </p>

                            <div className="event-meta">
                                <div className="meta-item">
                                    <Calendar className="meta-icon" size={24} />
                                    <div className="meta-info">
                                        <span className="meta-label">DATE</span>
                                        <span className="meta-value">March 23-25, 2027</span>
                                    </div>
                                </div>
                                <div className="meta-item">
                                    <MapPin className="meta-icon" size={24} />
                                    <div className="meta-info">
                                        <span className="meta-label">VENUE</span>
                                        <span className="meta-value">Munich, Germany</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cover-footer">
                        <div className="footer-line"></div>
                        <p>www.powerenergysummit.com</p>
                    </div>
                </div>

                {/* Page 2: Welcome & Vision */}
                <div className="brochure-page">
                    <div className="page-section">
                        <h2 className="section-heading">Vision & Scope</h2>
                        <p className="section-text">
                            The <strong>POWERENGSUMMIT2026</strong> is a premier global forum for energy specialists, electrical engineers, and sustainability researchers.
                            Our mission is to explore the technological frontiers of power generation, distribution, and the critical integration of renewable energy sources into modern grids.
                        </p>
                        <p className="section-text">
                            This year's summit focuses on "Electrifying the Future," bringing together industry leaders and academics to solve the challenges of grid stabilization, energy storage, and decarbonization.
                        </p>
                    </div>

                    <div className="page-section">
                        <h2 className="section-heading">Key Highlights</h2>
                        <ul className="feature-list-digital">
                            <li><CheckCircle className="check-icon" size={18} /> <strong>World-Class Keynotes:</strong> Hear from pioneers in HVDC and Smart Grid technology.</li>
                            <li><CheckCircle className="check-icon" size={18} /> <strong>Technical Tracks:</strong> Over 40 sessions covering Solar, Wind, and Nuclear energy.</li>
                            <li><CheckCircle className="check-icon" size={18} /> <strong>Exhibition Zone:</strong> Discover the latest hardware from top energy tech providers.</li>
                            <li><CheckCircle className="check-icon" size={18} /> <strong>Networking Hub:</strong> Dedicated sessions for B2B collaboration and academic exchange.</li>
                        </ul>
                    </div>

                    <div className="stats-grid-digital">
                        <div className="stat-card-digital">
                            <Zap size={32} />
                            <div className="stat-num">50+</div>
                            <div className="stat-label">Scientific Sessions</div>
                        </div>
                        <div className="stat-card-digital">
                            <Globe size={32} />
                            <div className="stat-num">30+</div>
                            <div className="stat-label">Countries Represented</div>
                        </div>
                        <div className="stat-card-digital">
                            <Users size={32} />
                            <div className="stat-num">600+</div>
                            <div className="stat-label">Expected Delegates</div>
                        </div>
                    </div>
                </div>

                {/* Page 3: Technical Themes */}
                <div className="brochure-page">
                    <h2 className="section-heading">Core Scientific Themes</h2>
                    <div className="themes-grid-digital">
                        <div className="theme-item-digital">
                            <Sun size={24} className="theme-icon" />
                            <div>
                                <h3>Renewable Energy Integration</h3>
                                <p>Large-scale solar and wind farm management and grid synchronization.</p>
                            </div>
                        </div>
                        <div className="theme-item-digital">
                            <Battery size={24} className="theme-icon" />
                            <div>
                                <h3>Next-Gen Energy Storage</h3>
                                <p>Solid-state batteries, hydrogen storage, and pumped hydro innovations.</p>
                            </div>
                        </div>
                        <div className="theme-item-digital">
                            <Zap size={24} className="theme-icon" />
                            <div>
                                <h3>Smart Grids & Microgrids</h3>
                                <p>AI-driven demand response and decentralized energy management systems.</p>
                            </div>
                        </div>
                        <div className="theme-item-digital">
                            <Globe size={24} className="theme-icon" />
                            <div>
                                <h3>Power System Stability</h3>
                                <p>Addressing inertia issues and voltage control in inverter-dominated grids.</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-box-digital">
                        <h3>Registration Information</h3>
                        <p>Early Bird Registration is now open. Secure your participation to shape the future of energy.</p>
                        <div className="cta-digital">Register Today at www.powerenergysummit.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalBrochure;
