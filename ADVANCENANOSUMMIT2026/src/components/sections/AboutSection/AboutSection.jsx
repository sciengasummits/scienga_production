import React from 'react';
import { CalendarDays, CheckCircle, Clock, Star } from 'lucide-react';
import Button from '../../common/Button/Button';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about section-padding" id="about">
            <div className="container about__container">
                {/* Left Side: Content */}
                <div className="about__content">
                    <h4 className="section-subtitle">Advancing Material Science</h4>
                    <h2 className="section-title">About The Conference</h2>
                    <p className="about__text">
                        The <strong>Annual International Conference on Advanced Materials & Nanotechnology</strong> is a premier global platform dedicated to advancing the understanding of cutting-edge materials science and nanotechnology applications that are transforming industries worldwide.
                    </p>
                    <p className="about__text">
                        This conference brings together leading researchers, academicians, scientists, engineers, and industry professionals to explore recent developments, theoretical foundations, innovative applications, and real-world implementations of advanced materials and nanotechnology solutions.
                    </p>

                    <h3 className="section-title-sm">Conference Objectives</h3>
                    <ul className="about__list">
                        <li>Promote advancements in <strong>advanced materials research</strong></li>
                        <li>Explore innovations in <strong>nanotechnology applications</strong></li>
                        <li>Discuss computational and experimental approaches in <strong>material characterization</strong></li>
                        <li>Bridge academia and industry in materials science research</li>
                        <li>Encourage collaboration across engineering, physics, chemistry, and biotechnology domains</li>
                    </ul>

                    <h3 className="section-title-sm">Key Themes & Topics</h3>
                    <ul className="about__list">
                        <li>Nanomaterials and Nanocomposites</li>
                        <li>Smart Materials and Functional Coatings</li>
                        <li>Biomaterials and Tissue Engineering</li>
                        <li>Energy Storage and Conversion Materials</li>
                        <li>Advanced Manufacturing and 3D Printing</li>
                        <li>Quantum Materials and Nanotechnology Applications</li>
                    </ul>
                </div>

                {/* Right Side: Important Dates */}
                {/* Right Side: Important Dates */}
                <div className="about__dates-wrapper">
                    <div className="premium-dates-container">
                        <div className="premium-header">
                            <h3 className="premium-title">Important Dates</h3>
                            <div className="header-decoration"></div>
                        </div>

                        <div className="premium-dates-list">
                            {/* Card 1 */}
                            <div className="premium-date-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">JUL</span>
                                    <span className="pd-day">15</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2026</span>
                                    <h4 className="pd-event">Abstract Submission Opens</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <CalendarDays size={40} />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="premium-date-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">SEP</span>
                                    <span className="pd-day">25</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2026</span>
                                    <h4 className="pd-event">Early Bird Deadline</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <CheckCircle size={40} />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="premium-date-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">OCT</span>
                                    <span className="pd-day">25</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2026</span>
                                    <h4 className="pd-event">Submission Deadline</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <Clock size={40} />
                                </div>
                            </div>

                            {/* Card 4 - Highlight */}
                            <div className="premium-date-card highlight-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">NOV</span>
                                    <span className="pd-day">16</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2026</span>
                                    <h4 className="pd-event">Conference Date</h4>
                                    <span className="pd-sub">November 16-18, Amsterdam, Netherlands</span>
                                </div>
                                <div className="pd-icon-bg">
                                    <Star size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
