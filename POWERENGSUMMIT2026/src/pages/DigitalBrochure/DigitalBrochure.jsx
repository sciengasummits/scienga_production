import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Printer, ArrowLeft, CheckCircle, Calendar, MapPin, Users, Award, Globe, Zap, Battery, Wind, Sun } from 'lucide-react';
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
                        <ArrowLeft size={18} /> Back to Brochure
                    </button>
                    <div className="toolbar-actions">
                        <Button variant="outline" className="btn-sm" onClick={() => window.print()}>
                            <Printer size={16} /> Print
                        </Button>
                        <Button variant="primary" className="btn-sm" onClick={() => window.print()}>
                            Download PDF
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
                                Bridging Modern Power Systems and Sustainable Energy Solutions for a Greener Tomorrow.
                            </p>

                            <div className="event-meta">
                                <div className="meta-item">
                                    <Calendar className="meta-icon" size={24} />
                                    <div className="meta-info">
                                        <span className="meta-label">DATE</span>
                                        <span className="meta-value">November 10-12, 2026</span>
                                    </div>
                                </div>
                                <div className="meta-item">
                                    <MapPin className="meta-icon" size={24} />
                                    <div className="meta-info">
                                        <span className="meta-label">VENUE</span>
                                        <span className="meta-value">London, United Kingdom</span>
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
                            The **POWERENGSUMMIT2026** is the largest gathering of energy specialists, electrical engineers, and sustainability researchers.
                            Our mission is to foster a global dialogue on the decarbonization of power grids and the integration of large-scale renewable energy.
                        </p>
                        <p className="section-text">
                            With over 20+ specialized tracks, this summit offers a deep dive into the latest breakthroughs in high-voltage engineering,
                            smart grid management, and energy storage lifecycle.
                        </p>
                    </div>

                    <div className="page-section">
                        <h2 className="section-heading">Key Highlights</h2>
                        <ul className="feature-list">
                            <li><CheckCircle className="check-icon" size={18} /> **Keynote Plenaries:** Insights from world-renowned energy policy makers.</li>
                            <li><CheckCircle className="check-icon" size={18} /> **Interactive Workshops:** Hands-on sessions on Grid Simulation software.</li>
                            <li><CheckCircle className="check-icon" size={18} /> **B2B Networking:** Connect with top utility companies and technology providers.</li>
                            <li><CheckCircle className="check-icon" size={18} /> **Poster Sessions:** Showcasing the latest academic research from PhD scholars.</li>
                        </ul>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <Zap size={32} />
                            <div className="stat-num">40+</div>
                            <div className="stat-label">Power Tracks</div>
                        </div>
                        <div className="stat-card">
                            <Globe size={32} />
                            <div className="stat-num">25+</div>
                            <div className="stat-label">Nations Involved</div>
                        </div>
                        <div className="stat-card">
                            <Users size={32} />
                            <div className="stat-num">500+</div>
                            <div className="stat-label">Total Delegates</div>
                        </div>
                    </div>
                </div>

                {/* Page 3: Technical Tracks */}
                <div className="brochure-page">
                    <h2 className="section-heading">Core Scientific Tracks</h2>
                    <div className="themes-list">
                        <div className="theme-item">
                            <div className="theme-header">
                                <Sun size={20} className="theme-icon" />
                                <h3>Solar & PV Integration</h3>
                            </div>
                            <p>Scaling up grid-tied photovoltaic systems and addressing variability through advanced prediction models.</p>
                        </div>
                        <div className="theme-item">
                            <div className="theme-header">
                                <Wind size={20} className="theme-icon" />
                                <h3>Advanced Wind Turbines</h3>
                            </div>
                            <p>Floating offshore wind platforms and the next generation of aero-elastic turbine designs.</p>
                        </div>
                        <div className="theme-item">
                            <div className="theme-header">
                                <Zap size={20} className="theme-icon" />
                                <h3>HVDC & Smart Grids</h3>
                            </div>
                            <p>High Voltage Direct Current (HVDC) transmission for long-distance renewable energy transport.</p>
                        </div>
                        <div className="theme-item">
                            <div className="theme-header">
                                <Battery size={20} className="theme-icon" />
                                <h3>Next-Gen Energy Storage</h3>
                            </div>
                            <p>Beyond Lithium-Ion: Solid-state batteries, Flow batteries, and Green Hydrogen storage solutions.</p>
                        </div>
                    </div>

                    <div className="registration-info-box">
                        <h3>Registration Tiers</h3>
                        <p>Student Pass: From **$299**</p>
                        <p>Academic Professional: From **$499**</p>
                        <p>Industry Professional: From **$699**</p>
                        <div className="cta-note">Secure your spot at www.powerenergysummit.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalBrochure;
