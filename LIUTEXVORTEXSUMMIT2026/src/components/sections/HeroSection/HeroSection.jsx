import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';
import cpdImage from '../../../assets/images/cpd-certification.jpeg';

const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    React.useEffect(() => {
        const targetDate = new Date('December 14, 2026 09:00:00 GMT+0100').getTime();

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
        navigate('/digital-brochure');
    };

    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">Annual International Conference on</span>
                        Liutex Theory and Applications <br /> in Vortex Identification and Vortex Dynamics
                    </h1>

                    <div className="hero__countdown-header">Days To Go</div>
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

                    <p className="hero__desc">
                        Annual International Conference on Liutex Theory and Applications in Vortex Identification and Vortex Dynamics. where global experts unite to shape the future of fluid mechanics. Discover ground-breaking technologies, connect with top researchers, and explore solutions transforming our world.
                    </p>
                    <div className="hero__actions">
                        <Button onClick={handleDownloadBrochure}>DOWNLOAD BROCHURE</Button>
                        <Button onClick={() => navigate('/register')}>REGISTER NOW</Button>
                        <Button onClick={() => navigate('/abstract-submission')}>
                            SUBMIT ABSTRACT
                        </Button>
                    </div>
                </div>

                <div className="hero__info-cards">
                    <div className="info-card date-card">
                        <h3> December</h3>
                        <p>14-16, 2026,</p>
                    </div>

                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>Event Venue: Outram, Singapore</p>
                    </div>


                </div>
            </div>
            <div className="hero__cpd-image">
                <img src={cpdImage} alt="CPD Certification" />
            </div>
        </section>
    );
};

export default HeroSection;
