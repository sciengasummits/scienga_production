import React, { useState, useEffect } from 'react';
import { CalendarDays, CheckCircle, Clock, Star } from 'lucide-react';
import './AboutSection.css';
import * as siteApi from '../../../api/siteApi';

const ICON_MAP = { CalendarDays, CheckCircle, Clock, Star };

const DEFAULTS = {
    subtitle: 'Annual International Conference on Power Energy and Electrical Engineering',
    title: 'About The Conference',
    paragraph1: 'The Annual International Conference on Power Energy and Electrical Engineering is a premier international platform dedicated to advancing the understanding of power systems, electrical engineering, and sustainable energy technologies.',
    paragraph2: 'This conference brings together leading researchers, academicians, electrical engineers, and industry professionals to explore recent developments, innovative technologies, and real-world applications in power energy systems.',
    objectives: [
        'Facilitate global collaboration on renewable energy solutions',
        'Showcase cutting-edge sustainable technologies and innovations',
        'Bridge the gap between academic research and industrial application',
        'Formulate policy frameworks for a carbon-neutral future',
        'Inspire next-generation leaders in electrical and energy engineering'
    ],
    dates: [
        { month: 'SEP', day: '15', year: '2026', event: 'Abstract Submission Opens', icon: 'CalendarDays' },
        { month: 'NOV', day: '25', year: '2026', event: 'Early Bird Deadline', icon: 'CheckCircle' },
        { month: 'JAN', day: '25', year: '2027', event: 'Submission Deadline', icon: 'Clock' },
        { month: 'MAR', day: '23', year: '2027', event: 'Conference Date', icon: 'Star', sub: 'March 23-25, Munich' }
    ]
};

const AboutSection = () => {
    const [aboutData, setAboutData] = useState(DEFAULTS);
    const [datesData, setDatesData] = useState(DEFAULTS.dates);

    useEffect(() => {
        const load = async () => {
            try {
                const [aboutRes, datesRes] = await Promise.all([
                    siteApi.fetchContent('about'),
                    siteApi.fetchContent('importantDates'),
                ]);
                if (aboutRes && !aboutRes.error) setAboutData({ ...DEFAULTS, ...aboutRes });
                if (datesRes?.dates) setDatesData(datesRes.dates);
            } catch { /* use defaults */ }
        };
        load();
    }, []);

    return (
        <section className="about section-padding" id="about">
            <div className="container about__container">
                {/* Left Side: Content */}
                <div className="about__content">
                    <h4 className="section-subtitle">{aboutData.subtitle}</h4>
                    <h2 className="section-title">{aboutData.title}</h2>
                    <div className="about__scroll-content">
                        {aboutData.paragraph1 && <p className="about__text">{aboutData.paragraph1}</p>}
                        {aboutData.paragraph2 && <p className="about__text">{aboutData.paragraph2}</p>}

                        {aboutData.objectives?.length > 0 && (
                            <>
                                <h3 className="about__subhead">Conference Objectives</h3>
                                <ul className="about__list">
                                    {aboutData.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                                </ul>
                            </>
                        )}

                        {aboutData.keyThemes?.length > 0 && (
                            <>
                                <h3 className="about__subhead">Key Themes & Topics</h3>
                                <ul className="about__list">
                                    {aboutData.keyThemes.map((theme, i) => <li key={i}>{theme}</li>)}
                                </ul>
                            </>
                        )}
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
                            {datesData.map((date, i) => {
                                const IconComp = ICON_MAP[date.icon] || CalendarDays;
                                const isHighlight = date.icon === 'Star';
                                return (
                                    <div key={i} className={`premium-date-card${isHighlight ? ' highlight-card' : ''}`}>
                                        <div className="pd-date-box">
                                            <span className="pd-month">{date.month}</span>
                                            <span className="pd-day">{date.day}</span>
                                        </div>
                                        <div className="pd-content">
                                            <span className="pd-year">{date.year}</span>
                                            <h4 className="pd-event">{date.event}</h4>
                                            {date.sub && <span className="pd-sub">{date.sub}</span>}
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
