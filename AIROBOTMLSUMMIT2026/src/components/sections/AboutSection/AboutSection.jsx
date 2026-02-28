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
                            We are truly delighted to welcome you to the <strong>Annual International Conference on AI, Robotics & Machine Learning Summit 2026</strong>, scheduled to take place from <strong>March 10-12, 2027</strong>, in the vibrant city of <strong>Seoul, South Korea</strong>. This premier international summit brings together top minds from academia, industry, and government to explore transformative innovations in artificial intelligence, robotics, and machine learning.
                        </p>
                        <p className="about__text">
                            The conference is designed to bridge the gap between cutting-edge research and real-world implementation, serving as a dynamic platform for collaboration, knowledge exchange, and future-focused thinking. The summit aims to accelerate progress across AI disciplines and foster impactful connections that will drive intelligent automation and innovation across industries.
                        </p>
                        <p className="about__text">
                            Join us in <strong>Seoul, South Korea</strong> for three impactful days of insight, innovation, and connection at the forefront of artificial intelligence and intelligent systems!
                        </p>
                        <p className="about__text">
                            Industry Excellence: Munich is home to world-leading technology companies and research institutions, making it a focal point for AI innovation and robotics development.
                            State-of-the-Art Infrastructure: The summit will leverage Munich's advanced conference facilities, such as the Messe München or ICM, known for hosting premier international technology events.
                            Innovation Leadership: Seoul, South Korea's strong focus on Industry 4.0 and AI research makes Munich an inspiring location to witness real-world implementations of intelligent systems at scale.
                        </p>

                        <div className="about__objectives" style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-header)' }}>Conference Objectives</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-body)' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Advance Global Knowledge Exchange:</strong> To facilitate a premier platform for researchers, industry leaders, and policymakers to exchange groundbreaking ideas and research in artificial intelligence, robotics, and machine learning.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Foster Interdisciplinary Collaboration:</strong> To encourage cross-sector partnerships between academia, government bodies, and private industries for accelerating AI-driven solutions and intelligent automation.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Showcase Innovative Technologies:</strong> To present state-of-the-art AI technologies and methodologies that address complex challenges across industries through machine learning and robotics.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Promote Policy Development:</strong> To discuss and formulate actionable policy frameworks that support responsible AI development, ethical considerations, and global innovation standards.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Empower Future Leaders:</strong> To mentor and inspire young AI researchers and engineers through workshops, networking, and exposure to cutting-edge developments in intelligent systems.</li>
                            </ul>
                        </div>

                        <div className="about__themes" style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-header)' }}>Key Themes & Topics</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-body)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                                <li>Machine Learning & Deep Learning</li>
                                <li>Natural Language Processing & Computer Vision</li>
                                <li>Robotics & Autonomous Systems</li>
                                <li>AI Ethics & Responsible AI</li>
                                <li>Intelligent Automation & Industry 4.0</li>
                                <li>Neural Networks & Reinforcement Learning</li>
                                <li>AI in Healthcare & Medical Robotics</li>
                                <li>Edge AI & IoT Integration</li>
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
                                    <span className="pd-month">MAR</span>
                                    <span className="pd-day">12</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Conference Date</h4>
                                    <span className="pd-sub"> 10-12, Munich</span>
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
