import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, CheckCircle, Clock, Star, Calendar, MapPin } from 'lucide-react';
import Button from '../../common/Button/Button';
import './AboutSection.css';
import { fetchContent } from '../../../api/siteApi';

const ICON_MAP = { CalendarDays, CheckCircle, Clock, Star, Calendar, MapPin };

const DEFAULT_ABOUT = {
    subtitle: 'Welcome to Our Summit',
    title: 'About The Conference',
    paragraph1: 'We are truly delighted to welcome you to the Annual International Conference on Astronomy, Astrophysics and Space Science, scheduled to take place from April 12-14, 2027, in the vibrant city of Tokyo, Japan. This premier international conference brings together top minds from academia, research institutions, and space agencies to explore groundbreaking discoveries in astronomy, astrophysics, and space exploration.',
    paragraph2: 'The conference is designed to bridge the gap between theoretical research and observational discoveries, serving as a dynamic platform for collaboration, knowledge exchange, and future-focused thinking. The conference aims to accelerate progress across disciplines and foster impactful connections that will advance our understanding of the cosmos.',
    objectives: [
        'Advance Global Knowledge Exchange in astronomy and astrophysics',
        'Foster Interdisciplinary Collaboration between academia and space agencies',
        'Showcase Innovative Research in cosmic phenomena and space exploration',
        'Promote Scientific Development and collaborative frameworks',
        'Empower Future Astronomers through workshops and networking',
    ],
    keyThemes: [
        'Observational Astronomy & Telescopes',
        'Exoplanets & Planetary Systems',
        'Stellar Evolution & Supernovae',
        'Galaxies & Cosmology',
        'Dark Matter & Dark Energy',
        'Black Holes & Neutron Stars',
        'Space Missions & Exploration',
        'Astrobiology & Search for Life',
    ],
};

const DEFAULT_DATES = {
    dates: [
        { month: 'SEP', day: '15', year: '2026', event: 'Abstract Submission Opens', icon: 'CalendarDays' },
        { month: 'NOV', day: '25', year: '2026', event: 'Early Bird Deadline', icon: 'CheckCircle' },
        { month: 'JAN', day: '25', year: '2027', event: 'Submission Deadline', icon: 'Clock' },
        { month: 'APR', day: '12', year: '2027', event: 'Conference Date', icon: 'Star', sub: 'April 12-14, 2027, Tokyo' },
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
                    <div className="about__scroll-content">
                        <p className="about__text">{about.paragraph1}</p>
                        {about.paragraph2 && <p className="about__text">{about.paragraph2}</p>}

                        {about.objectives?.length > 0 && (
                            <div className="about__objectives" style={{ marginTop: '2rem' }}>
                                <h3 className="section-title-sm">Conference Objectives</h3>
                                <ul className="about__list">
                                    {about.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                                </ul>
                            </div>
                        )}

                        {about.keyThemes?.length > 0 && (
                            <div className="about__themes" style={{ marginTop: '2rem' }}>
                                <h3 className="section-title-sm">Key Themes &amp; Topics</h3>
                                <ul className="about__list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                                    {about.keyThemes.map((t, i) => <li key={i}>{t}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>

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
