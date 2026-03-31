import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import heroBg from '../../../assets/images/hero-bg.jpg';
import * as siteApi from '../../../api/siteApi';

const DEFAULTS = {
    subtitle: 'ANNUAL INTERNATIONAL CONFERENCE ON',
    title: 'POWER ENERGY AND ELECTRICAL ENGINEERING',
    description: 'Annual International Conference on Power Energy and Electrical Engineering, where global experts unite to shape the future of sustainable energy. Discover ground-breaking power technologies, connect with top industry professionals, and explore solutions transforming our planet\'s energy grid.',
    conferenceDate: 'March 23-25, 2027',
    venue: 'Munich, Germany',
    countdownTarget: '2027-03-23T09:00:00+01:00',
};

const HeroSection = () => {
    const navigate = useNavigate();
    const [heroData, setHeroData] = useState(DEFAULTS);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchContent('hero');
                if (res && !res.error) setHeroData({ ...DEFAULTS, ...res });
            } catch { /* use defaults */ }
        };
        load();
        const poll = setInterval(load, 60000);
        const onVisible = () => { if (!document.hidden) load(); };
        document.addEventListener('visibilitychange', onVisible);
        return () => { clearInterval(poll); document.removeEventListener('visibilitychange', onVisible); };
    }, []);

    useEffect(() => {
        const target = new Date(heroData.countdownTarget || DEFAULTS.countdownTarget).getTime();
        const interval = setInterval(() => {
            const diff = target - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / 86400000),
                    hours: Math.floor((diff % 86400000) / 3600000),
                    minutes: Math.floor((diff % 3600000) / 60000),
                    seconds: Math.floor((diff % 60000) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [heroData.countdownTarget]);

    const dateStr = heroData.conferenceDate || DEFAULTS.conferenceDate;
    const [month, rest] = dateStr.includes(' ') ? [dateStr.split(' ')[0], dateStr.split(' ').slice(1).join(' ')] : [dateStr, ''];

    return (
        <section className="hero">
            <div className="hero__bg-wrapper">
                <img src={heroBg} alt="Conference Background" className="hero__bg-img" />
                <div className="hero__overlay"></div>
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">{heroData.subtitle}</span>
                        {heroData.title}
                    </h1>

                    <div className="hero__countdown-wrapper">
                        <h4 className="hero__days-label">Days To Go</h4>
                        <div className="hero__countdown">
                            {[['days', 'Days'], ['hours', 'Hours'], ['minutes', 'Minutes'], ['seconds', 'Seconds']].map(([key, label]) => (
                                <div className="countdown-item" key={key}>
                                    <span className="countdown-value">{timeLeft[key]}</span>
                                    <span className="countdown-label">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="hero__desc">{heroData.description}</p>
                    <div className="hero__actions">
                        <Button onClick={() => navigate('/brochure')}>Download Brochure</Button>
                        <Button onClick={() => navigate('/register')}>Register Now</Button>
                        <Button onClick={() => navigate('/abstract-submission')}>Submit Abstract</Button>
                    </div>
                </div>

                <div className="hero__info-cards">
                    <div className="info-card date-card">
                        <h3>{month}</h3>
                        <p>{rest}</p>
                    </div>
                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>{heroData.venue}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
