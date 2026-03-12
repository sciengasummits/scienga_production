import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import { fetchContent } from '../../api/siteApi';
import './Venue.css';

const DEFAULTS = {
    venueFeatures: [
        {
            title: 'World-Class Facilities',
            description: 'State-of-the-art conference halls equipped with the latest audio-visual technology'
        },
        {
            title: 'Catering Services',
            description: 'International cuisine and refreshments throughout the conference'
        },
        {
            title: 'Easy Access',
            description: 'Convenient location with excellent public transport connections'
        },
        {
            title: 'High-Speed WiFi',
            description: 'Complimentary high-speed internet access throughout the venue'
        },
        {
            title: 'Parking Available',
            description: 'Ample parking space for all attendees'
        },
        {
            title: 'Accessibility',
            description: 'Fully accessible facilities for all participants'
        }
    ],
    nearbyAttractions: [
        {
            name: 'Marina Bay Sands',
            distance: '0.2 km',
            image: "https://bing.com/th?asid=432345564906096145&id=OAUMA.E5B43E086472331DC382B5935DA23216_E9CC49797C3DFBB4&pid=21.1&o=5&w=472&h=247&rs=2&qlt=100"
        },
        {
            name: 'Gardens by the Bay',
            distance: '0.5 km',
            image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/5d54defd2c066.jpeg"
        },
        {
            name: 'Botanic Gardens',
            distance: '4.5 km',
            image: "https://tse2.mm.bing.net/th/id/OIP.96-nkaoLC7k2SjWbvm5jtQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ],
    cityAbout: {
        title: 'About the Host City',
        subtitle: 'Discover Singapore',
        description1: 'Singapore is a global hub for innovation, technology, and sustainability. Known as the "Garden City," it offers a unique blend of cutting-edge infrastructure and lush greenery, making it the perfect setting for our conference on Food Science and Agriculture.',
        description2: 'The Marina Bay area represents the heart of modern Singapore, featuring iconic architecture, world-class dining, and premium conference facilities. It serves as a testament to Singapore\'s transformation into a leading global destination for international summits.',
        image: "https://tse1.mm.bing.net/th/id/OIP.wb9uUKXX0JVX87vX64NbQgHaE8?w=2936&h=1960&rs=1&pid=ImgDetMain&o=7&rm=3",
        stats: [
            { label: 'Population', value: '5.9M+' },
            { label: 'Avg. Temperature', value: '31°C' },
            { label: 'Time Zone', value: 'GMT+8' }
        ]
    }
};

const Venue = () => {
    const navigate = useNavigate();
    const [venueData, setVenueData] = useState(DEFAULTS);

    useEffect(() => {
        fetchContent('venue-page').then(data => {
            if (data && !data.error) {
                setVenueData(prev => ({ ...prev, ...data }));
            }
        }).catch(err => console.warn('[Venue] Could not load venue content:', err));
    }, []);

    const { venueFeatures, nearbyAttractions, cityAbout } = venueData;

    return (
        <div className="venue-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Event Venue</h1>
                    <p className="page-breadcrumb">Home / Venue</p>
                </div>
            </div>

            <VenueSection />

            {/* Venue Features Section */}
            <section className="venue-features section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Venue Amenities</h4>
                        <h2 className="section-title">Why Choose Our Venue</h2>
                        <p className="section-desc">
                            Experience world-class facilities designed for international conferences
                        </p>
                    </div>

                    <div className="features-grid">
                        {venueFeatures.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the City Section */}
            <section className="about-city section-padding" style={{ background: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="about-city-content">
                        <div className="about-city-text">
                            <h4 className="section-subtitle">{cityAbout.subtitle}</h4>
                            <h2 className="section-title">{cityAbout.title}</h2>
                            <p className="city-description">{cityAbout.description1}</p>
                            <p className="city-description">{cityAbout.description2}</p>
                            <div className="city-stats">
                                {cityAbout.stats.map((stat, idx) => (
                                    <div className="stat-box" key={idx}>
                                        <h3>{stat.value}</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img src={cityAbout.image} alt="City" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore {cityAbout.subtitle.replace('Discover ', '')}</h4>
                        <h2 className="section-title">Nearby Attractions</h2>
                        <p className="section-desc">
                            Make the most of your visit with these iconic destinations
                        </p>
                    </div>

                    <div className="attractions-grid">
                        {nearbyAttractions.map((attraction, index) => (
                            <div className="attraction-card" key={index}>
                                <div className="attraction-image">
                                    <img src={attraction.image} alt={attraction.name} />
                                    <div className="attraction-distance">{attraction.distance}</div>
                                </div>
                                <div className="attraction-info">
                                    <h3>{attraction.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="venue-cta section-padding" style={{ background: 'var(--color-primary-gradient)' }}>
                <div className="container text-center">
                    <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>
                        Ready to Join Us?
                    </h2>
                    <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Secure your spot at the conference and be part of this transformative event
                    </p>
                    <Button
                        onClick={() => navigate('/register')}
                        variant="outline"
                        style={{ borderColor: 'white', color: 'white', background: 'transparent' }}
                    >
                        Register Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Venue;

