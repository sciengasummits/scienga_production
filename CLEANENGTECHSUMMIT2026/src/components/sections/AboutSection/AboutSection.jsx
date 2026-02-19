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
                            We are truly delighted to welcome you to the <strong>Global Summit on Clean Energy and Sustainable Technologies</strong>, scheduled to take place from <strong>March 23-25, 2027</strong>, in the vibrant city of <strong>Munich, Germany</strong>. This premier international summit brings together top minds from academia, industry, and government to explore transformative innovations in clean energy and sustainable technologies.
                        </p>
                        <p className="about__text">
                            The congress is designed to bridge the gap between visionary research and real-world implementation, serving as a dynamic platform for collaboration, knowledge exchange, and future-focused thinking. The conference aims to accelerate progress across disciplines and foster impactful connections that will drive a sustainable future for our planet.
                        </p>
                        <p className="about__text">
                            Join us in <strong>Germany</strong> for three impactful days of insight, innovation, and connection at the forefront of clean energy and environmental science!
                        </p>
                        <p className="about__text">
                            Industry Excellence: Munich is home to world-leading energy exhibitions like Intersolar Europe, making it a focal point for the global solar and clean-tech industry.
                            State-of-the-Art Infrastructure: The summit will leverage Munich’s advanced conference facilities, such as the Messe München or ICM, known for hosting premier international trade shows.
                            Sustainability Leadership: Germany’s "Energiewende" (Energy Transition) policy makes Munich an inspiring location to witness real-world implementations of renewable energy at scale
                        </p>

                        <h3 className="about__subhead">Conference Objectives</h3>
                        <ul className="about__list">
                            <li>Facilitate global collaboration on renewable energy solutions.</li>
                            <li>Showcase cutting-edge sustainable technologies and innovations.</li>
                            <li>Bridge the gap between academic research and industrial application.</li>
                            <li>Formulate policy frameworks for a carbon-neutral future.</li>
                            <li>Inspire next-generation leaders in environmental science.</li>
                        </ul>

                        <h3 className="about__subhead">Key Themes & Topics</h3>
                        <ul className="about__list">
                            <li>Solar, Wind, and Hydro Energy Systems.</li>
                            <li>Green Hydrogen and Fuel Cell Technologies.</li>
                            <li>Smart Grids and Energy Storage Solutions.</li>
                            <li>Carbon Capture, Utilization, and Storage (CCUS).</li>
                            <li>Sustainable Urban Planning and Green Architecture.</li>
                        </ul>
                    </div>
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
                                    <span className="pd-day">23</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Conference Date</h4>
                                    <span className="pd-sub">March 23-25, Munich</span>
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
