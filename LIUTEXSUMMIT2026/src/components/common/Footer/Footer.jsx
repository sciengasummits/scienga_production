import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Loader2 } from 'lucide-react';
import Logo from '../Logo/Logo';
import { fetchContent, submitSubscribe } from '../../../api/siteApi';
import './Footer.css';

const Footer = () => {
    const [contactInfo, setContactInfo] = useState({ email: 'contact@liutexvortexsummit.com', phone: '+91 7842090097' });
    const [subscribing, setSubscribing] = useState(false);

    useEffect(() => {
        fetchContent('contact').then(data => {
            if (data) {
                setContactInfo(prev => ({
                    email: data.email || prev.email,
                    phone: data.phone || prev.phone
                }));
            }
        }).catch(() => {});
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setSubscribing(true);
        const formData = new FormData(e.target);
        try {
            await submitSubscribe({
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('number')
            });
            alert("Subscribed successfully!");
            e.target.reset();
        } catch (error) {
            alert("Failed to subscribe. Please try again later.");
        } finally {
            setSubscribing(false);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__col">
                        <div className="footer__coll-logo" style={{ marginBottom: '1.5rem' }}>
                            <Logo />
                        </div>
                        <p className="footer__desc">
                            Advancing the science of Liutex-based vortex identification to unlock deeper insights into turbulence and rotational flow dynamics.
                        </p>
                        <div className="footer__socials">
                            <a href="https://www.facebook.com/profile.php?id=61588065033161" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={20} /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/sciengasummits/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Important Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/abstract-submission">Abstract Submission</Link></li>
                            <li><Link to="/register">Registration</Link></li>
                            <li><Link to="/sessions">Sessions</Link></li>
                            <li><Link to="/program">Program</Link></li>
                            <li><Link to="/speakers">Speakers</Link></li>
                            <li><a href="https://www.sciengasummits.com/" target="_blank" rel="noopener noreferrer">Policies</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Contact Info</h4>
                        <ul className="footer__contact">
                            <li>
                                <MapPin size={18} />
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', color: 'white' }}>Venue:</span>
                                    <span> Outram, Singapore</span>
                                </div>
                            </li>

                            <li>
                                <Mail size={18} />
                                <span>{contactInfo.email}</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>{contactInfo.phone}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Subscribe</h4>
                        <p>Get the latest updates and news.</p>
                        <form className="footer__form-vertical" onSubmit={handleSubscribe}>
                            <input type="text" name="name" placeholder="Your Name" required disabled={subscribing} />
                            <input type="email" name="email" placeholder="Your Email" required disabled={subscribing} />
                            <input type="tel" name="number" placeholder="Your Number" required disabled={subscribing} />
                            <button type="submit" disabled={subscribing} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {subscribing ? <Loader2 size={16} className="animate-spin" style={{ marginRight: '6px' }} /> : null}
                                {subscribing ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} INTERNATIONAL CONFERENCE ON LIUTEX THEORY AND TURBULENCE MECHANISM. All Rights Reserved by SCIENGA SUMMITS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
