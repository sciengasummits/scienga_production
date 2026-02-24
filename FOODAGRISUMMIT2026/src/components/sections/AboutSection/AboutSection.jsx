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
                    <h4 className="section-subtitle">Advancing Food Innovation</h4>
                    <h2 className="section-title">About The Conference</h2>
                    <p className="about__text">
                        The <strong>Annual International Conference on Food Science Technology and Agriculture</strong> is a premier international platform dedicated to advancing the understanding of food science, agricultural innovation, and sustainable food systems.
                    </p>
                    <p className="about__text">
                        This conference brings together leading researchers, academicians, food scientists, agricultural experts, and industry professionals to explore recent developments, innovative technologies, sustainable practices, and real-world applications in food science and agriculture.
                    </p>

                    <h3 className="section-title-sm">Conference Objectives</h3>
                    <ul className="about__list">
                        <li>Promote advancements in <strong>food science and technology</strong></li>
                        <li>Explore innovations in <strong>sustainable agriculture</strong></li>
                        <li>Discuss food safety, quality control, and <strong>nutritional science</strong></li>
                        <li>Bridge academia and industry in agricultural research</li>
                        <li>Encourage collaboration across food processing, biotechnology, and environmental sustainability domains</li>
                    </ul>

                    <h3 className="section-title-sm">Key Themes & Topics</h3>
                    <ul className="about__list">
                        <li>Food Processing and Preservation Technologies</li>
                        <li>Sustainable Agriculture and Crop Management</li>
                        <li>Food Safety and Quality Assurance</li>
                        <li>Nutritional Science and Functional Foods</li>
                        <li>Agricultural Biotechnology and Genetic Engineering</li>
                        <li>Smart Farming and Precision Agriculture</li>
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
                                    <span className="pd-day">01</span>
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
                                    <span className="pd-day">30</span>
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
                                    <span className="pd-month">NOV</span>
                                    <span className="pd-day">15</span>
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
                                    <span className="pd-month">December</span>
                                    <span className="pd-day">07</span>
                                </div>
                                <div className="pd-content">
                                    <span className="pd-year">2026</span>
                                    <h4 className="pd-event">Conference Date</h4>
                                    <span className="pd-sub">December 07-09, Singapore</span>
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
