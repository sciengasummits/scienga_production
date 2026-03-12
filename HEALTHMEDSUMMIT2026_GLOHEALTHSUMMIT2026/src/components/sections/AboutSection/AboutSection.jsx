import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, CheckCircle, Clock, Star, Calendar, MapPin } from 'lucide-react';
import Button from '../../common/Button/Button';
import './AboutSection.css';
import { fetchContent } from '../../../api/siteApi';

const ICON_MAP = { CalendarDays, CheckCircle, Clock, Star, Calendar, MapPin };

const DEFAULT_ABOUT = {
    subtitle: 'Advancing Global Health & Preventive Medicine',
    title: 'About The Conference',
    paragraph1: 'The Global Summit on Public Health & Preventive Medicine (HEALTHMEDSUMMIT2026 / GLOHEALTHSUMMIT2026) is a premier international platform dedicated to advancing the understanding of public health challenges and promoting innovative preventive medicine strategies.',
    paragraph2: 'This summit brings together leading researchers, academicians, clinical scientists, public health professionals, and industry experts to explore recent developments, evidence-based approaches, and real-world applications in global health.',
    objectives: [
        'Promote advancements in public health research and preventive medicine',
        'Explore innovations in global health policy and implementation',
        'Discuss evidence-based approaches to disease prevention',
        'Bridge academia and healthcare industry professionals',
        'Encourage interdisciplinary collaboration across health sciences',
    ],
    keyThemes: [
        'Epidemiology & Disease Surveillance',
        'Vaccination & Immunization Programs',
        'Non-Communicable Disease Prevention',
        'Mental Health & Wellbeing',
        'Health Systems & Policy',
        'Digital Health & AI in Medicine',
    ],
};

const DEFAULT_DATES = {
    dates: [
        { month: 'SEP', day: '15', year: '2026', event: 'Abstract Submission Opens', icon: 'CalendarDays' },
        { month: 'NOV', day: '25', year: '2026', event: 'Early Bird Deadline', icon: 'CheckCircle' },
        { month: 'JAN', day: '25', year: '2027', event: 'Submission Deadline', icon: 'Clock' },
        { month: 'MAR', day: '23', year: '2027', event: 'Conference Date', icon: 'Star', sub: 'March 23-25, 2027, Munich' },
    ],
};

const AboutSection = () => {
    const navigate = useNavigate();
    const [about, setAbout] = useState(DEFAULT_ABOUT);
    const [datesData, setDatesData] = useState(DEFAULT_DATES);

    useEffect(() => {
        fetchContent('about').then(d => { if (d) setAbout(prev => ({ ...prev, ...d })); });
        fetchContent('importantDates').then(d => { if (d) setDatesData(prev => ({ ...prev, ...d })); });
    }, []);

    const isHighlight = (idx, total) => idx === total - 1;

    return (
        <section className="about section-padding" id="about">
            <div className="container about__container">
                {/* Left Side: Content */}
                <div className="about__content">
                    <h4 className="section-subtitle">{about.subtitle}</h4>
                    <h2 className="section-title">{about.title}</h2>
                    <p className="about__text">{about.paragraph1}</p>
                    {about.paragraph2 && <p className="about__text">{about.paragraph2}</p>}

                    {about.objectives?.length > 0 && (
                        <>
                            <h3 className="section-title-sm">Conference Objectives</h3>
                            <ul className="about__list">
                                {about.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                        </>
                    )}

                    {about.keyThemes?.length > 0 && (
                        <>
                            <h3 className="section-title-sm">Key Themes &amp; Topics</h3>
                            <ul className="about__list">
                                {about.keyThemes.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </>
                    )}

                    <div className="about__actions" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                        <Button onClick={() => navigate('/program')}>LEARN MORE</Button>
                        <Button variant="secondary" onClick={() => navigate('/register')}>REGISTER NOW</Button>
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
                            {(datesData.dates || []).map((d, idx) => {
                                const IconComp = ICON_MAP[d.icon] || CalendarDays;
                                const highlight = isHighlight(idx, datesData.dates.length);
                                return (
                                    <div className={`premium-date-card${highlight ? ' highlight-card' : ''}`} key={idx}>
                                        <div className="pd-date-box">
                                            <span className="pd-month">{d.month}</span>
                                            <span className="pd-day">{d.day}</span>
                                        </div>
                                        <div className="pd-content">
                                            <span className="pd-year">{d.year}</span>
                                            <h4 className="pd-event">{d.event}</h4>
                                            {d.sub && <span className="pd-sub">{d.sub}</span>}
                                        </div>
                                        <div className="pd-icon-bg">
                                            <IconComp size={40} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
