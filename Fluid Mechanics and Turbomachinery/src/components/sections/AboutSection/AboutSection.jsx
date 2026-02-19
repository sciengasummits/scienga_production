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
                            We are truly delighted to welcome you to the <strong>Global Summit on Fluid Mechanics and Turbomachinery</strong>, scheduled to take place from <strong>April 12-14, 2028</strong>, in the vibrant city of <strong>Tokyo, Japan</strong>. This premier international summit brings together top minds from academia, industry, and government to explore transformative innovations in fluid dynamics and turbomachinery systems.
                        </p>
                        <p className="about__text">
                            The congress is designed to bridge the gap between visionary research and real-world implementation, serving as a dynamic platform for collaboration, knowledge exchange, and future-focused thinking. The conference aims to accelerate progress across disciplines and foster impactful connections that will drive a sustainable future for engineering efficiency.
                        </p>
                        <p className="about__text">
                            Join us in <strong>Japan</strong> for three impactful days of insight, innovation, and connection at the forefront of mechanical engineering and fluid sciences!
                        </p>
                        <p className="about__text">
                            Industry Excellence: Tokyo is a global hub for advanced manufacturing and robotics, making it a focal point for the fluid mechanics and turbomachinery industry.
                            State-of-the-Art Infrastructure: The summit will leverage Tokyo’s advanced conference facilities, known for hosting premier international trade shows.
                            Innovation Leadership: Japan’s commitment to precision engineering makes Tokyo an inspiring location to witness real-world implementations of advanced fluid systems at scale.
                        </p>

                        <div className="about__lists-container">
                            <div className="about__list-group">
                                <h3 className="about__list-title">Conference Objectives</h3>
                                <ul className="about__list">
                                    <li><strong>Global Collaboration:</strong> Facilitate networking among researchers, engineers, and industry leaders to tackle global challenges.</li>
                                    <li><strong>Innovation Showcase:</strong> Highlight cutting-edge research, advanced technologies, and novel methodologies in turbomachinery.</li>
                                    <li><strong>Bridge Academia & Industry:</strong> Create a platform for translational research, ensuring academic breakthroughs lead to industrial applications.</li>
                                    <li><strong>Sustainability Focus:</strong> Explore energy-efficient solutions and green technologies within fluid dynamics.</li>
                                    <li><strong>Empower Future Leaders:</strong> Provide mentorship and presentation opportunities for students and early-career researchers.</li>
                                    <li><strong>Knowledge Dissemination:</strong> Publish high-quality findings and foster discussions that shape the future of engineering.</li>
                                </ul>
                            </div>

                            <div className="about__list-group">
                                <h3 className="about__list-title">Key Themes & Topics</h3>
                                <ul className="about__list">
                                    <li><strong>Computational Fluid Dynamics (CFD):</strong> Advanced simulations, turbulence modeling, and high-performance computing.</li>
                                    <li><strong>Aerodynamics & Hydrodynamics:</strong> Flow analysis, drag reduction techniques, and vehicle/marine propulsion.</li>
                                    <li><strong>Turbomachinery Design:</strong> Gas turbines, steam turbines, compressors, pumps, and wind turbine aerodynamics.</li>
                                    <li><strong>Heat & Mass Transfer:</strong> Thermal management, multiphase flows, and combustion instability.</li>
                                    <li><strong>Renewable Energy Systems:</strong> Hydropower, tidal energy, and wind energy conversion technologies.</li>
                                    <li><strong>Fluid-Structure Interaction:</strong> Vibration analysis, aeroelasticity, and material resilience in fluid systems.</li>
                                </ul>
                            </div>
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
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Abstract Submission Opens</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <CalendarDays size={40} />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="premium-date-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">DEC</span>
                                    <span className="pd-day">15</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2027</span>
                                    <h4 className="pd-event">Early Bird Deadline</h4>
                                </div>
                                <div className="pd-icon-bg">
                                    <CheckCircle size={40} />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="premium-date-card">
                                <div className="pd-date-box">
                                    <span className="pd-month">FEB</span>
                                    <span className="pd-day">15</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2028</span>
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
                                    <span className="pd-year">2028</span>
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
