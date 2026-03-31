import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from '../Logo/Logo';
import { fetchContent } from '../../../api/siteApi';
import './Footer.css';

const Footer = () => {
    const [contact, setContact] = useState({
        email: 'info@fluidmechsummit.com',
        phone: '+65 0000 0000',
        address: 'Singapore',
        socialLinks: { facebook: '', twitter: '', linkedin: '', instagram: '' }
    });

    const [venue, setVenue] = useState({
        name: 'Outram, Singapore'
    });

    useEffect(() => {
        const load = async () => {
            try {
                const contactData = await fetchContent('contact');
                if (contactData) setContact(contactData);
                
                const venueData = await fetchContent('venue');
                if (venueData && venueData.name) setVenue(venueData);
            } catch (err) {
                console.error("Failed to load footer data", err);
            }
        };
        load();
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__col">
                        <div className="footer__coll-logo" style={{ marginBottom: '1.5rem' }}>
                            <Logo />
                        </div>
                        <p className="footer__desc">
                            International Conference on Fluid Mechanics & Turbomachinery, where global experts unite to shape the future of engineering dynamics and turbomachinery innovation.
                        </p>
                        <div className="footer__socials">
                            {contact.socialLinks?.facebook && (
                                <a href={contact.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={20} /></a>
                            )}
                            {contact.socialLinks?.linkedin && (
                                <a href={contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                            )}
                            {contact.socialLinks?.instagram && (
                                <a href={contact.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                            )}
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Important Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/abstract-submission">Abstract Submission</Link></li>
                            <li><Link to="/register">Registration</Link></li>
                            <li><Link to="/online-registration">Discount Registration</Link></li>
                            <li><Link to="/sessions">Sessions</Link></li>
                            <li><Link to="/program">Program</Link></li>
                            <li><Link to="/speakers">Speakers</Link></li>
                            <li><Link to="/unsubscribe">Unsubscribe</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Contact Info</h4>
                        <ul className="footer__contact">
                            <li>
                                <MapPin size={18} />
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', color: 'white' }}>Venue:</span>
                                    <span>{venue.name || contact.address}</span>
                                </div>
                            </li>

                            <li>
                                <Mail size={18} />
                                <span>{contact.email}</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>{contact.phone}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Subscribe</h4>
                        <p>Get the latest updates and news.</p>
                        <form className="footer__form">
                            <input type="email" placeholder="Your Email" />
                            <button type="submit">Go</button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} International Conference on Fluid Mechanics & Turbomachinery. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
