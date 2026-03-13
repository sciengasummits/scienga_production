import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import { fetchContent, fetchSpeakers } from '../../../api/siteApi';

const DEFAULT = {
    subtitle: 'International Conference on',
    title: 'Liutex Theory and Applications\nin Vortex Identification and Vortex Dynamics',
    description: 'International Conference on Liutex Theory and Applications in Vortex Identification and Vortex Dynamics. where global experts unite to shape the future of fluid mechanics. Discover ground-breaking technologies, connect with top researchers, and explore solutions transforming our world.',
    conferenceDate: 'December 14-16, 2026',
    venue: 'Outram, Singapore',
    countdownTarget: '2026-12-14T09:00:00+01:00',
    showRegister: true,
    showAbstract: true,
    showBrochure: true,
};

const HeroSection = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(DEFAULT);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [chairmen, setChairmen] = useState([]);

    // Fetch live data from backend + poll every 15 s for dashboard changes
    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchContent('hero').then(d => {
                if (!cancelled && d) setData(prev => ({ ...prev, ...d }));
            });
            fetchSpeakers().then(speakersData => {
                if (!cancelled) {
                    let comm = [];
                    if (speakersData && speakersData.length > 0) {
                        comm = speakersData.filter(s => s.category && s.category.toLowerCase().includes('comm') && s.visible !== false);
                    }
                    
                    // Fallback to dummy data if no chairman exists in the database
                    if (comm.length === 0) {
                        comm = [
                            { _id: 'dummy1', name: 'Dr. Yiqian Wang', affiliation: 'Soochow University', country: 'China', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
                            { _id: 'dummy2', name: 'Dr. Yiqian Wang', affiliation: 'Soochow University', country: 'China', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
                            { _id: 'dummy3', name: 'Dr. Yiqian Wang', affiliation: 'Soochow University', country: 'China', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' }
                        ];
                    }

                    setChairmen(comm.slice(0, 3));
                }
            });
        };

        load(); // initial fetch

        // Poll every 15 seconds so dashboard edits appear without a page reload
        const interval = setInterval(load, 15000);

        // Also re-fetch immediately when the visitor switches back to this tab
        const onVisible = () => { if (document.visibilityState === 'visible') load(); };
        document.addEventListener('visibilitychange', onVisible);

        return () => {
            cancelled = true;
            clearInterval(interval);
            document.removeEventListener('visibilitychange', onVisible);
        };
    }, []);

    // Countdown
    useEffect(() => {
        const targetDate = new Date(data.countdownTarget).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [data.countdownTarget]);

    // Parse multiline title (split on \n)
    const titleLines = (data.title || '').split('\n');

    // If a custom background was uploaded via the dashboard, override the CSS bg
    const heroBgStyle = data.bgImage
        ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${data.bgImage}')` }
        : {};

    return (
        <section className="hero" style={heroBgStyle}>
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">{data.subtitle}</span>
                        {titleLines.map((line, i) => (
                            <React.Fragment key={i}>{line}{i < titleLines.length - 1 && <br />}</React.Fragment>
                        ))}
                    </h1>

                    <div className="hero__countdown-header">Days To Go</div>
                    <div className="hero__countdown">
                        {[['Days', timeLeft.days], ['Hours', timeLeft.hours], ['Minutes', timeLeft.minutes], ['Seconds', timeLeft.seconds]].map(([label, val]) => (
                            <div className="countdown-item" key={label}>
                                <span className="countdown-value">{val}</span>
                                <span className="countdown-label">{label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="hero__desc">{data.description}</p>

                    <div className="hero-actions-container">
                        <div className="hero__actions">
                            {data.showBrochure !== false && (
                                <Button onClick={() => navigate('/digital-brochure')}>DOWNLOAD BROCHURE</Button>
                            )}
                            {data.showAbstract !== false && (
                                <Button onClick={() => navigate('/abstract-submission')}>SUBMIT ABSTRACT</Button>
                            )}
                        </div>
                        {data.showRegister !== false && (
                            <div className="hero__actions-bottom">
                                <Button className="btn-elevate" onClick={() => navigate('/register')}>REGISTER NOW</Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hero__right-content">
                    <div className="hero__info-cards">
                        <div className="info-card date-card">
                            <h3>{(() => {
                                const parts = (data.conferenceDate || 'December 14-16, 2026').trim().split(' ');
                                return parts[0]; // Month
                            })()}</h3>
                            <p>{(() => {
                                const parts = (data.conferenceDate || 'December 14-16, 2026').trim().split(' ');
                                return parts.slice(1).join(' '); // Date + Year
                            })()}</p>
                        </div>
                        <div className="info-card venue-card">
                            <h3>Venue</h3>
                            <p>Event Venue: {data.venue}</p>
                        </div>
                    </div>

                    {chairmen.length > 0 && (
                        <div className="hero__chairmen-cards">
                            {chairmen.map((chairman, idx) => (
                                <div className="chairman-card" key={chairman._id || idx}>
                                    <div className="chairman-badge">CONFERENCE CHAIRMAN</div>
                                    <div className="chairman-img-wrapper">
                                        <img src={chairman.image || chairman.photo || 'https://via.placeholder.com/200'} alt={chairman.name} />
                                    </div>
                                    <div className="chairman-info">
                                        <h4>{chairman.name}</h4>
                                        <p className="chairman-affiliation">{chairman.affiliation || chairman.institution}</p>
                                        <p className="chairman-location">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px', verticalAlign: 'middle', marginTop: '-2px'}}>
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {chairman.country || 'China'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
