import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin } from 'lucide-react';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import { fetchContent, resolveImageUrl } from '../../../api/siteApi';

const DEFAULTS = {
    subtitle: 'International Conference on',
    title: 'Liutex Theory and Applications',
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
    const [hero, setHero] = useState(DEFAULTS);
    const [chairs, setChairs] = useState(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const resolveUrl = resolveImageUrl;

    // Fetch dynamic content from backend
    useEffect(() => {
        let cancelled = false;

        const load = () => {
            fetchContent('hero').then(data => {
                if (!cancelled && data) setHero(prev => ({ ...prev, ...data }));
            });

            fetchContent('heroChairs').then(data => {
                if (!cancelled) {
                    if (data && (data.chair?.name || data.viceChair?.name || data.coChair?.name)) {
                        setChairs(data);
                    } else {
                        // Fallback dummy data if nothing is saved yet
                        setChairs({
                            chair: { name: 'Dr. Chaoqun Liu', affiliation: 'University of Texas at Arlington', country: 'USA', title: 'Conference Chairman' },
                            viceChair: { name: 'Dr. Yiqian Wang', affiliation: 'Soochow University', country: 'China', title: 'Conference Co-chairman' },
                            coChair: { name: 'Dr. James Chen', affiliation: 'Singapore Food Agency', country: 'Singapore', title: 'Conference Co-chairman' }
                        });
                    }
                }
            }).catch(err => {
                console.error('Failed to fetch heroChairs:', err);
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

    // Parse date for info-card (expects "Month Day-Day, Year" or similar)
    const monthStr = hero.conferenceDate?.split(' ')[0] || 'December';
    const daysStr = hero.conferenceDate?.split(' ').slice(1).join(' ') || '14-16, 2026';

    const renderTitle = () => {
        if (!hero.title) return DEFAULTS.title;
        const lines = hero.title.trim().split('\n');
        return lines.map((line, i) => (
            <React.Fragment key={i}>
                {line}
                {i !== lines.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const bgUrl = resolveUrl(hero.bgImage);
    const heroBgStyle = bgUrl 
        ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${bgUrl}')` }
        : {};

    return (
        <section className="hero" style={heroBgStyle}>
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">{hero.subtitle}</span> 
                        {renderTitle()}
                    </h1>

                    <div className="hero__countdown-wrapper">
                        <span className="days-to-go-label" style={{ display: 'block', fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#4da3ff', textTransform: 'uppercase', letterSpacing: '1px' }}>Days To Go</span>
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

                    <p className="hero__desc">{hero.description}</p>
                    
                    <div className="hero-actions-container">
                        <div className="hero__actions">
                            {hero.showBrochure !== false && (
                                <Button onClick={() => navigate('/digital-brochure')}>DOWNLOAD BROCHURE</Button>
                            )}
                            {hero.showAbstract !== false && (
                                <Button onClick={() => navigate('/abstract-submission')}>SUBMIT ABSTRACT</Button>
                            )}
                        </div>
                        {hero.showRegister !== false && (
                            <div className="hero__actions-bottom">
                                <Button className="btn-elevate" onClick={() => navigate('/register')}>REGISTER NOW</Button>
                            </div>
                        )}
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

                    {chairs && (chairs.chair?.name || chairs.viceChair?.name || chairs.coChair?.name) && (
                        <div className="hero__chairs-row">
                            {chairs.chair?.name && (
                                <div className="chair-card-v">
                                    <div className="chair-badge-v">{chairs.chair.title || 'Conference Chairman'}</div>
                                    {chairs.chair.image ? (
                                        <img src={resolveUrl(chairs.chair.image)} alt={chairs.chair.name} className="chair-card-bg" />
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
                                        <img src={resolveUrl(chairs.viceChair.image)} alt={chairs.viceChair.name} className="chair-card-bg" />
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
                                        <img src={resolveUrl(chairs.coChair.image)} alt={chairs.coChair.name} className="chair-card-bg" />
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
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
