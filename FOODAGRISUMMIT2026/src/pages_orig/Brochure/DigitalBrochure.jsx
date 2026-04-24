'use client';
import React from 'react';

import { Download, CheckCircle, Calendar, MapPin, Users, Award, FileText } from 'lucide-react';
import './DigitalBrochure.css';
import usePageSEO from '../../hooks/usePageSEO';

const DigitalBrochure = () => {
    usePageSEO({
        title: 'Digital Brochure',
        description: 'View the FOODAGRISUMMIT2026 digital brochure online – conference overview, core objectives, key themes including Sustainable Farming, Food Security, and Agri-Tech Innovation.',
        canonical: 'https://foodagrisummit.com/digital-brochure',
    });
    return (
        <div className="digital-brochure">
            <div className="brochure-page-container">
                {/* PAGE 1: COVER */}
                <div className="brochure-sheet cover-page">
                    <div className="vortex-background"></div>
                    <div className="brochure-content">
                        <header className="brochure-header">
                            <h4 className="brochure-subtitle-top">INTERNATIONAL</h4>
                            <h1 className="brochure-main-title">
                                FOOD AND AGRICULTURE <br />
                                <span>SUMMIT 2026</span>
                            </h1>
                        </header>

                        <div className="brochure-hero-info">
                            <div className="info-item">
                                <Calendar size={24} />
                                <div>
                                    <p className="info-label">DATE</p>
                                    <p className="info-value">December 14-16, 2026</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <MapPin size={24} />
                                <div>
                                    <p className="info-label">VENUE</p>
                                    <p className="info-value">Outram, Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div className="brochure-edition-badge">
                            OFFICIAL 2026 EDITION
                        </div>
                    </div>
                    <footer className="brochure-footer-brand">
                        FOOD AGRI SUMMIT 2026
                    </footer>
                </div>

                {/* PAGE 2: OBJECTIVES & THEMES */}
                <div className="brochure-sheet">
                    <div className="sheet-inner">
                        <div className="sheet-side-accent"></div>
                        <h2 className="sheet-title">Conference Overview</h2>
                        <p className="sheet-description">
                            The FOOD AND AGRICULTURE SUMMIT 2026 is the premier gathering for experts in sustainable farming and food technology. This summit bridges the gap between agricultural research and practical field implementation.
                        </p>

                        <div className="sheet-grid">
                            <div className="sheet-section">
                                <h3><Award size={20} className="section-icon" /> Core Objectives</h3>
                                <ul className="sheet-list">
                                    <li><CheckCircle size={14} /> Advance the knowledge of sustainable crop management.</li>
                                    <li><CheckCircle size={14} /> Solve global food security challenges through innovation.</li>
                                    <li><CheckCircle size={14} /> Promote cross-disciplinary research in soil science and agri-tech.</li>
                                    <li><CheckCircle size={14} /> Implement AI-driven precision farming frameworks.</li>
                                </ul>
                            </div>

                            <div className="sheet-section">
                                <h3><Users size={20} className="section-icon" /> Target Audience</h3>
                                <ul className="sheet-list">
                                    <li>Agricultural Scientists & Researchers</li>
                                    <li>Food Technology Experts</li>
                                    <li>Policy Makers & Sustainability Advocates</li>
                                    <li>Agri-Tech Entrepreneurs & Investors</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sheet-section full-width">
                            <h3><FileText size={20} className="section-icon" /> Key Themes for 2026</h3>
                            <div className="themes-flex">
                                <span className="theme-tag">Sustainable Farming</span>
                                <span className="theme-tag">Food Security</span>
                                <span className="theme-tag">Agri-Tech Innovation</span>
                                <span className="theme-tag">Precision Agriculture</span>
                                <span className="theme-tag">Crop Biotechnology</span>
                                <span className="theme-tag">Supply Chain Resilience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FLOATING ACTION BAR */}
            <div className="digital-brochure-tools">
                <button className="tool-btn" onClick={() => window.print()}>
                    <Download size={20} />
                    Download as PDF
                </button>
            </div>
        </div>
    );
};

export default DigitalBrochure;
