import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { User, MapPin } from 'lucide-react';
import './HeroSection.css';

import { fetchContent, resolveImageUrl } from '../../../api/siteApi';

const DEFAULTS = {
    subtitle: 'INTERNATIONAL CONFERENCE ON',
    title: 'FLUID MECHANICS & TURBOMACHINERY',
    description: 'International Conference on Fluid Mechanics & Turbomachinery, where global experts unite to shape the future of engineering dynamics. Discover ground-breaking innovations in fluid systems, connect with top mechanical engineers, and explore solutions transforming industrial efficiency.',
    conferenceDate: 'December 14-16, 2026',
    venue: 'Outram, Singapore',
    countdownTarget: '2026-12-14T09:00:00+01:00',
    showRegister: true,
    showAbstract: true,
    showBrochure: true
};

const HeroSection = () => {
    const navigate = useNavigate();
    const [hero, setHero] = useState(DEFAULTS);
    const [chairs, setChairs] = useState(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });



    // Fetch dynamic hero content from backend
    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchContent('hero').then(data => {
                if (!cancelled && data) setHero(prev => ({ ...prev, ...data }));
            });
            fetchContent('heroChairs').then(data => {
                if (!cancelled) {
                    if (data && (data.list?.length > 0 || data.chair?.name || data.viceChair?.name || data.coChair?.name)) {
                        setChairs(data);
                    } else {
                        // Fallback data for Fluid Mechanics
                        setChairs({
                            list: [
                                { name: 'Prof. Yiqian Wang', affiliation: 'Soochow University', country: 'China', title: 'Conference Chairman' },
                                { name: 'Prof. Chaoqun Liu', affiliation: 'University of Texas at Arlington', country: 'USA', title: 'Conference Co-Chairman' },
                                { name: 'Prof. Pushkar Raj Pokharel', affiliation: 'Kathmandu University', country: 'Nepal', title: 'Conference Co-Chairman' },
                            ]
                        });
                    }
                }
            });
        };

        load();

        // Polling every 15s to reflect dashboard changes live
        const interval = setInterval(load, 15000);

        // Also refresh when tab becomes visible
        const onVisible = () => {
            if (document.visibilityState === 'visible') load();
        };
        document.addEventListener('visibilitychange', onVisible);

        return () => {
            cancelled = true;
            clearInterval(interval);
            document.removeEventListener('visibilitychange', onVisible);
        };
    }, []);

    useEffect(() => {
        const targetDate = new Date(hero.countdownTarget || DEFAULTS.countdownTarget).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [hero.countdownTarget]);

    const handleDownloadBrochure = () => {
        navigate('/brochure');
    };

    // Parse date for info-card (expects "Month Day-Day, Year" or similar)
    const monthStr = hero.conferenceDate?.split(' ')[0] || 'December';
    const daysStr = hero.conferenceDate?.split(' ').slice(1).join(' ') || '14-16, 2026';

    // Support multiline title via backend \n
    const renderTitle = () => {
        if (!hero.title) return DEFAULTS.title;
        return hero.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {line}
                {i !== hero.title.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const bgUrl = resolveImageUrl(hero.bgImage);

    const heroBgStyle = {
        backgroundImage: bgUrl
            ? `linear-gradient(rgba(0, 15, 31, 0.6), rgba(0, 15, 31, 0.6)), url(${bgUrl})`
            : `linear-gradient(rgba(0, 15, 31, 0.6), rgba(0, 15, 31, 0.6)), url('https://5.imimg.com/data5/SELLER/Default/2023/4/304158028/BI/ED/JG/115492319/cryopump-coldhead-and-helium-compressor-repair-services-500x500.jpg')`
    };

    return (
        <section className="hero" style={heroBgStyle}>
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">{hero.subtitle}</span> <br />
                        {renderTitle()}
                    </h1>

                    <div className="hero__countdown-wrapper">
                        <span className="days-to-go-label" style={{ display: 'block', fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-primary-end)', textTransform: 'uppercase', letterSpacing: '1px' }}>Days To Go</span>
                        <div className="hero__countdown">
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.days}</span>
                                <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.hours}</span>
                                <span className="countdown-label">Hours</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.minutes}</span>
                                <span className="countdown-label">Minutes</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.seconds}</span>
                                <span className="countdown-label">Seconds</span>
                            </div>
                        </div>
                    </div>

                    <p className="hero__desc">
                        {hero.description}
                    </p>
                    <div className="hero__actions">
                        <div className="hero__actions-row">
                            {hero.showAbstract !== false && (
                                <Button onClick={() => navigate('/abstract-submission')}>
                                    Submit Abstract
                                </Button>
                            )}
                            {hero.showBrochure !== false && (
                                <Button onClick={handleDownloadBrochure}>Download Brochure</Button>
                            )}
                        </div>
                        <div className="hero__actions-row">
                            {hero.showRegister !== false && (
                                <Button onClick={() => navigate('/register')}>Register Now</Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="hero__right">
                    <div className="hero__info-cards">
                        <div className="info-card date-card">
                            <h3>{monthStr}</h3>
                            <p>{daysStr}</p>
                        </div>

                        <div className="info-card venue-card">
                            <h3>Venue</h3>
                            <p>Event Venue: {hero.venue}</p>
                        </div>
                    </div>

                    {chairs && (
                        <div className="hero__chairs-row">
                            {chairs.list && chairs.list.length > 0 ? (
                                // New dynamic format
                                chairs.list.map((c, i) => c.name && (
                                    <div key={i} className="chair-card-v">
                                        <div className="chair-badge-v">{c.title || 'Conference Chairman'}</div>
                                        {c.image ? (
                                            <img src={resolveImageUrl(c.image)} alt={c.name} className="chair-card-bg" />
                                        ) : (
                                            <div className="chair-placeholder-v"><User size={40} color="#fff" /></div>
                                        )}
                                        <div className="chair-card-overlay">
                                            <h4 className="chair-name-v">{c.name}</h4>
                                            <p className="chair-aff-v">{c.affiliation}</p>
                                            {c.country && (
                                                <p className="chair-country-v"><MapPin size={12} /> {c.country}</p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Old fixed keys format (fallback)
                                <>
                                    {chairs.chair?.name && (
                                        <div className="chair-card-v">
                                            <div className="chair-badge-v">{chairs.chair.title || 'Conference Chairman'}</div>
                                            {chairs.chair.image ? (
                                                <img src={resolveImageUrl(chairs.chair.image)} alt={chairs.chair.name} className="chair-card-bg" />
                                            ) : (
                                                <div className="chair-placeholder-v"><User size={40} color="#fff" /></div>
                                            )}
                                            <div className="chair-card-overlay">
                                                <h4 className="chair-name-v">{chairs.chair.name}</h4>
                                                <p className="chair-aff-v">{chairs.chair.affiliation}</p>
                                                {chairs.chair.country && (
                                                    <p className="chair-country-v"><MapPin size={12} /> {chairs.chair.country}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {chairs.viceChair?.name && (
                                        <div className="chair-card-v">
                                            <div className="chair-badge-v">{chairs.viceChair.title || 'Conference Co-chair'}</div>
                                            {chairs.viceChair.image ? (
                                                <img src={resolveImageUrl(chairs.viceChair.image)} alt={chairs.viceChair.name} className="chair-card-bg" />
                                            ) : (
                                                <div className="chair-placeholder-v"><User size={40} color="#fff" /></div>
                                            )}
                                            <div className="chair-card-overlay">
                                                <h4 className="chair-name-v">{chairs.viceChair.name}</h4>
                                                <p className="chair-aff-v">{chairs.viceChair.affiliation}</p>
                                                {chairs.viceChair.country && (
                                                    <p className="chair-country-v"><MapPin size={12} /> {chairs.viceChair.country}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {chairs.coChair?.name && (
                                        <div className="chair-card-v">
                                            <div className="chair-badge-v">{chairs.coChair.title || 'Conference Co-chair'}</div>
                                            {chairs.coChair.image ? (
                                                <img src={resolveImageUrl(chairs.coChair.image)} alt={chairs.coChair.name} className="chair-card-bg" />
                                            ) : (
                                                <div className="chair-placeholder-v"><User size={40} color="#fff" /></div>
                                            )}
                                            <div className="chair-card-overlay">
                                                <h4 className="chair-name-v">{chairs.coChair.name}</h4>
                                                <p className="chair-aff-v">{chairs.coChair.affiliation}</p>
                                                {chairs.coChair.country && (
                                                    <p className="chair-country-v"><MapPin size={12} /> {chairs.coChair.country}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
