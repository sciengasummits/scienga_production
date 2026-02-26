import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import cpdImage from '../../../assets/images/cpd.jpg';


const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = React.useState({
        days: 776,
        hours: 12,
        minutes: 17,
        seconds: 12
    });

    React.useEffect(() => {
        const targetDate = new Date('December 14, 2026 09:00:00').getTime();

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
    }, []);

    return (
        <section className="hero">
            <div className="hero__bg"></div>

            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__titles">
                        <h4 className="hero__title-sub">ANNUAL INTERNATIONAL CONFERENCE ON</h4>
                        <h1 className="hero__title-main">
                            FLUID MECHANICS &<br />
                            TURBOMACHINERY
                        </h1>
                    </div>

                    <div className="hero__countdown-section">
                        <h5 className="hero__countdown-label">DAYS TO GO</h5>
                        <div className="hero__countdown-grid">
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.days}</span>
                                <span className="countdown-tag">DAYS</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.hours}</span>
                                <span className="countdown-tag">HOURS</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.minutes}</span>
                                <span className="countdown-tag">MINUTES</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.seconds}</span>
                                <span className="countdown-tag">SECONDS</span>
                            </div>
                        </div>
                    </div>

                    <p className="hero__description">
                        Global Summit on Fluid Mechanics and Turbomachinery, where global experts unite to shape the future of engineering dynamics. Discover ground-breaking innovations in fluid systems, connect with top mechanical engineers, and explore solutions transforming industrial efficiency.
                    </p>
                </div>

                <div className="hero__cards">
                    <div className="hero-card hero-card--top">
                        <h2 className="card-month">December</h2>
                        <p className="card-date">14-16, 2026</p>
                    </div>
                    <div className="hero-card hero-card--bottom">
                        <h3 className="card-venue-title">Venue</h3>
                        <div className="card-venue-detail">
                            <p className="venue-label">Event Venue: Outram,</p>
                            <p className="venue-location">Singapore</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
