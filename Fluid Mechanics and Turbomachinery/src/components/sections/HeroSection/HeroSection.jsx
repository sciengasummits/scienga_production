import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import mediaImage from '../../../assets/images/Media.jpg';


const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
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


    const handleDownloadBrochure = () => {
        navigate('/brochure');
    };

    return (
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 15, 31, 0.6), rgba(0, 15, 31, 0.6)), url('https://5.imimg.com/data5/SELLER/Default/2023/4/304158028/BI/ED/JG/115492319/cryopump-coldhead-and-helium-compressor-repair-services-500x500.jpg')` }}>
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">ANNUAL INTERNATIONAL CONFERENCE ON</span> <br />
                        FLUID MECHANICS & TURBOMACHINERY
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
                        ANNUAL INTERNATIONAL CONFERENCE ON FLUID MECHANICS & TURBOMACHINERY, where global experts unite to shape
                        the future of engineering dynamics. Discover ground-breaking innovations in fluid systems, connect with
                        top mechanical engineers, and explore solutions transforming industrial efficiency.
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
                        <h3>December</h3>
                        <p>14-16, 2026</p>
                    </div>

                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>Event Venue:  Outram, Singapore</p>
                    </div>
                </div>
            </div>

            <img src={mediaImage} alt="Media Partner" className="hero__cpd-image" />
        </section>
    );
};

export default HeroSection;
