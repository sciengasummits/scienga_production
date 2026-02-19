import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import cpdImage from '../../../assets/images/cpd.jpg';
import heroBg from '../../../assets/images/hero-bg.jpg';

const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    React.useEffect(() => {
        const targetDate = new Date('March 23, 2027 09:00:00 GMT+0100').getTime();

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


    const handleDownloadBrochure = () => {
        navigate('/brochure');
    };

    return (
        <section className="hero">
            <div className="hero__bg-wrapper">
                <img src={heroBg} alt="Conference Background" className="hero__bg-img" />
                <div className="hero__overlay"></div>
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">Annual International Conference On</span>
                        POWER ENERGY & ELECTRICAL ENGINEERING
                    </h1>

                    <div className="hero__countdown-wrapper">
                        <h4 className="hero__days-label">Days To Go</h4>
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
                        Global Summit on Power Energy and Electrical Engineering, where global experts unite to shape
                        the future of sustainable energy. Discover ground-breaking power technologies, connect with
                        top industry professionals, and explore solutions transforming our planet's energy grid.
                    </p>
                    <div className="hero__actions">
                        <Button onClick={handleDownloadBrochure}>Download Brochure</Button>
                        <Button onClick={() => navigate('/register')}>Register Now</Button>
                        <Button onClick={() => navigate('/abstract-submission')}>
                            Submit Abstract
                        </Button>
                    </div>
                </div>

                <div className="hero__info-cards">
                    <div className="info-card date-card">
                        <h3>March</h3>
                        <p>23-25, 2027</p>
                    </div>

                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>Event Venue: Munich, Germany</p>
                    </div>
                </div>
            </div>

            <img src={cpdImage} alt="CPD Certified" className="hero__cpd-image" />
        </section>
    );
};

export default HeroSection;
