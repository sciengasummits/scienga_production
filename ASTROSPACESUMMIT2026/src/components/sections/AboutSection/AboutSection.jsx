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
                    <h4 className="section-subtitle">Welcome To Our Summit</h4>
                    <h2 className="section-title">About The Conference</h2>
                    <div className="about__scroll-content">
                        <p className="about__text">
                            We are truly delighted to welcome you to the <strong>Annual International Conference on Astronomy, Astrophysics and Space Science</strong>, scheduled to take place from <strong>April 12-14, 2027</strong>, in the vibrant city of <strong>Tokyo, Japan</strong>. This premier international conference brings together top minds from academia, research institutions, and space agencies to explore groundbreaking discoveries in astronomy, astrophysics, and space exploration.
                        </p>
                        <p className="about__text">
                            The conference is designed to bridge the gap between theoretical research and observational discoveries, serving as a dynamic platform for collaboration, knowledge exchange, and future-focused thinking. The conference aims to accelerate progress across disciplines and foster impactful connections that will advance our understanding of the cosmos.
                        </p>
                        <p className="about__text">
                            Join us in <strong>Japan</strong> for three impactful days of insight, innovation, and connection at the forefront of astronomical research and space science!
                        </p>
                        <p className="about__text">
                            Innovation Hub: Tokyo is a global leader in space technology and astronomical research, home to cutting-edge observatories and institutions pioneering our exploration of the universe.
                            State-of-the-Art Infrastructure: The summit will leverage Munich’s advanced conference facilities, such as the Messe München or ICM, known for hosting premier international trade shows.
                            Sustainability Leadership: Germany’s "Energiewende" (Energy Transition) policy makes Munich an inspiring location to witness real-world implementations of renewable energy at scale.
                        </p>

                        <div className="about__objectives" style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-header)' }}>Conference Objectives</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-body)' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Advance Global Knowledge Exchange:</strong> To facilitate a premier platform for astronomers, astrophysicists, and space scientists to exchange groundbreaking ideas and research in cosmic phenomena and space exploration.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Foster Interdisciplinary Collaboration:</strong> To encourage cross-sector partnerships between academia, space agencies, and research institutions for accelerating astronomical discoveries.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Showcase Innovative Research:</strong> To present state-of-the-art research and methodologies that address the fundamental questions about the universe, from exoplanets to dark matter.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Promote Scientific Development:</strong> To discuss and formulate collaborative frameworks that support global space exploration goals and astronomical research.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Empower Future Astronomers:</strong> To mentor and inspire young scientists and researchers through workshops, networking, and exposure to cutting-edge astronomical research.</li>
                            </ul>
                        </div>

                        <div className="about__themes" style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-header)' }}>Key Themes & Topics</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-body)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                                <li>Observational Astronomy & Telescopes</li>
                                <li>Exoplanets & Planetary Systems</li>
                                <li>Stellar Evolution & Supernovae</li>
                                <li>Galaxies & Cosmology</li>
                                <li>Dark Matter & Dark Energy</li>
                                <li>Black Holes & Neutron Stars</li>
                                <li>Space Missions & Exploration</li>
                                <li>Astrobiology & Search for Life</li>
                            </ul>
                        </div>
                    </div>
                </div>

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
                                    <span className="pd-month">SEP</span>
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
                                    <span className="pd-month">NOV</span>
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
                                    <span className="pd-month">JAN</span>
                                    <span className="pd-day">25</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Submission Deadline</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <Clock size={40} />
                                </div>
                            </div>

                            {/* Card 4 - Highlight */}
                            <div className="premium-date-card highlight-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">APR</span>
                                    <span className="pd-day">12</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Conference Date</h4>
                                    <span className="pd-sub">April 12-14, Tokyo</span>
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
