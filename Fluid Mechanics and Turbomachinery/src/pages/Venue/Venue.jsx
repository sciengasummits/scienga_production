import React from 'react';
import { useNavigate } from 'react-router-dom';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import './Venue.css';

const Venue = () => {
    const navigate = useNavigate();
    const venueFeatures = [
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
    ];

    const nearbyAttractions = [
        {
            name: 'Marina Bay Sands',
            distance: '10 mins',
            image: "https://th.bing.com/th/id/OIP.4_AuZL9WmNGB-YSbATiFFwHaDn?w=367&h=170&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        },
        {
            name: 'Gardens by the Bay',
            distance: '12 mins',
            image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&q=80"
        },
        {
            name: 'Jewel Changi Airport',
            distance: '25 mins',
            image: "https://c8.alamy.com/comp/WTPKN7/jewel-changi-airport-in-singapore-a-glass-dome-with-indoor-waterfall-and-forest-shopping-mall-terminal-and-hotel-WTPKN7.jpg"
        }
    ];

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
                            <h4 className="section-subtitle">Discover Singapore</h4>
                            <h2 className="section-title">About the Host City</h2>
                            <p className="city-description">
                                Singapore is a global financial center and a tropical city-state located at the southern tip of the Malay Peninsula. It is a city where
                                colonial history meets futuristic architecture and lush green spaces.
                            </p>
                            <p className="city-description">
                                As a premier global hub for technology, aerospace engineering, and trade, Singapore provides state-of-the-art
                                conference facilities and unparalleled connectivity. Participants can experience a unique blend of
                                cultures, world-class dining, and innovative urban solutions.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>5.9M+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>31°C</h3>
                                    <p>Avg. Temperature</p>
                                </div>
                                <div className="stat-box">
                                    <h3>GMT+8</h3>
                                    <p>Time Zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img
                                src="https://www.itsliquid.com/wp-content/uploads/2020/10/Jewel-Changi-Airport_Safdie-Architects-15.jpg"
                                alt="Singapore City"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Singapore</h4>
                        <h2 className="section-title">Nearby Attractions</h2>
                        <p className="section-desc">
                            Make the most of your visit with these iconic Singapore destinations
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
                        Secure your spot at the ANNUAL INTERNATIONAL CONFERENCE ON FLUID MECHANICS & TURBOMACHINERY and be part of this transformative event
                    </p>
                    <Button
                        variant="outline"
                        style={{ borderColor: 'white', color: 'white', background: 'transparent' }}
                        onClick={() => navigate('/register')}
                    >
                        Register Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Venue;
