import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Zap, Activity, Battery, Cpu, Factory, Lightbulb,
    BarChart, Globe, ShieldCheck, Thermometer, Wind, Sun, Droplet
} from 'lucide-react';
import './KeyThemesSection.css';
import * as siteApi from '../../../api/siteApi';

const ICON_LIST = [Zap, Battery, Cpu, Factory, Lightbulb, BarChart, Globe, ShieldCheck, Thermometer, Wind, Sun, Droplet, Activity];

const DEFAULT_SESSIONS = [
    'Smart Grid Technologies',
    'Power Electronics & Converters',
    'Renewable Energy Systems',
    'Electric Machines & Drives',
    'High Voltage Engineering',
    'Energy Storage Technologies',
    'Power Quality & Harmonics',
    'Distributed Generation Systems',
    'Electric Vehicles & Charging',
    'Microgrids & Manogrids',
    'HVDC & Flexible AC Transmission',
    'Electromagnetic Compatibility',
    'Protection & Control Systems',
    'Power System Stability & Dynamics',
    'Computational Intelligence in Power',
    'Sustainable Energy Policy',
    'Industrial Power Applications',
    'Wireless Power Transfer',
    'Energy Harvesting Technologies',
    'Digital Twins in Power Systems',
];

const DEFAULT_SCHEDULE = {
    day1: [
        { time: '8.30 – 9.00', program: 'Registration' },
        { time: '9.00 – 9.30', program: 'Conference Inauguration' },
        { time: '9.30 – 11.00', program: 'Plenary Sessions' },
        { time: '11.00 – 11.20', program: 'Tea/Coffee Break' },
        { time: '11.20 – 13.00', program: 'Plenary Sessions' },
        { time: '13.00 – 13.10', program: 'Group Photograph' },
        { time: '13.10 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.40', program: 'Keynote Sessions' },
        { time: '15.40 – 16.00', program: 'Tea/Coffee Break' },
        { time: '16.00 – 17.30', program: 'Keynote Sessions' },
        { time: '17.30 – 18.30', program: 'Workshop' },
    ],
    day2: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 13.00', program: 'Poster Presentations' },
        { time: '13.00 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.30', program: 'Panel Discussions' },
        { time: '15.30 – 16.00', program: 'Award Ceremony & Closing' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Networking Session' },
        { time: '10.30 – 11.00', program: 'Tea/Coffee Break' },
        { time: '11.00 – 12.30', program: 'Future Trends Workshop' },
        { time: '12.30 – 13.30', program: 'Lunch' },
        { time: '13.30 – 15.00', program: 'Final Remarks & Departure' },
    ]
};

const KeyThemesSection = ({ showLearnMore = false }) => {
    const [activeDay, setActiveDay] = useState('day1');
    const [sessions, setSessions] = useState(DEFAULT_SESSIONS);
    const [schedule, setSchedule] = useState(DEFAULT_SCHEDULE);
    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchContent('sessions');
                if (res?.sessions?.length) setSessions(res.sessions);
                if (res?.schedule) setSchedule({ ...DEFAULT_SCHEDULE, ...res.schedule });
            } catch { /* use defaults */ }
        };
        load();
    }, []);

    const displaySessions = showLearnMore ? sessions.slice(0, 10) : sessions;
    const displaySchedule = showLearnMore
        ? (schedule[activeDay] || DEFAULT_SCHEDULE[activeDay]).slice(0, 5)
        : (schedule[activeDay] || DEFAULT_SCHEDULE[activeDay]);

    return (
        <section className={`sessions-schedule-section section-padding ${showLearnMore ? 'preview-mode' : ''}`} id="sessions">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Conference Schedule</h2>
                    <div className="section-line"></div>
                </div>

                <div className="sessions-schedule-layout" style={showLearnMore ? { overflow: 'hidden' } : {}}>
                    {/* Left Column: Sessions */}
                    <div className="sessions-column">
                        <h3 className="column-title">Sessions</h3>
                        <div className="sessions-list-container">
                            <ul className="sessions-list-clean">
                                {displaySessions.map((session, index) => {
                                    const Icon = ICON_LIST[index % ICON_LIST.length];
                                    const title = typeof session === 'string' ? session : session.title;
                                    return (
                                        <li key={index} className="session-item-clean">
                                            <span className="session-icon-small"><Icon size={18} /></span>
                                            <span className="session-text">{title}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Center Divider */}
                    <div className="schedule-divider">
                        <div className="divider-line"></div>
                    </div>

                    {/* Right Column: Schedule */}
                    <div className="schedule-column">
                        <div className="schedule__tabs-wrapper">
                            <div className="schedule__tabs">
                                {['day1', 'day2', 'day3'].map((day, i) => {
                                    const labels = [['Day 01', 'Conference'], ['Day 02', 'Discussions'], ['Day 03', 'Workshops']];
                                    return (
                                        <button key={day} className={`schedule__tab ${activeDay === day ? 'active' : ''}`} onClick={() => setActiveDay(day)}>
                                            <span className="tab-day">{labels[i][0]}</span>
                                            <span className="tab-date">{labels[i][1]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="schedule__content fade-in">
                            <div className="schedule__table-container">
                                <table className="schedule__table">
                                    <thead>
                                        <tr><th>Time</th><th>Conference Schedule</th></tr>
                                    </thead>
                                    <tbody>
                                        {displaySchedule.map((item, index) => (
                                            <tr key={index}>
                                                <td className="time-col"><div className="time-badge">{item.time}</div></td>
                                                <td className="program-col"><div className="program-info"><span className="program-title">{item.program}</span></div></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {showLearnMore && <div className="key-themes-fade-overlay"></div>}
                </div>

                {showLearnMore && (
                    <div className="text-center mt-4">
                        <button className="btn-learn-more" onClick={() => navigate('/sessions')}>
                            Learn More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default KeyThemesSection;
