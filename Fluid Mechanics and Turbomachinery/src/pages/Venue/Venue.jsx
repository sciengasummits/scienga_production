import React from 'react';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import './Venue.css';

const Venue = () => {
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
            name: 'Senso-ji Temple',
            distance: '15 mins',
            image: "https://images.unsplash.com/photo-1542640244-7e67286feb8f?w=800&q=80"
        },
        {
            name: 'Tokyo Tower',
            distance: '20 mins',
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&q=80"
        },
        {
            name: 'Shibuya Crossing',
            distance: '30 mins',
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80"
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
                            <h4 className="section-subtitle">Discover Tokyo</h4>
                            <h2 className="section-title">About the Host City</h2>
                            <p className="city-description">
                                Tokyo is the capital of Japan and the world's most populous metropolis. It is a city where
                                ultramodern neon-lit skyscrapers coexist peacefully with historic temples and shrines.
                            </p>
                            <p className="city-description">
                                As a global hub for technology, engineering, and innovation, Tokyo provides state-of-the-art
                                conference facilities and unmatched infrastructure. Visitors can explore a dazzling array of
                                culture, cuisine, and cutting-edge technology, making it the perfect location for our summit.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>14M+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>19°C</h3>
                                    <p>Avg. Temperature</p>
                                </div>
                                <div className="stat-box">
                                    <h3>GMT+9</h3>
                                    <p>Time Zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img
                                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80"
                                alt="Tokyo City"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Tokyo</h4>
                        <h2 className="section-title">Nearby Attractions</h2>
                        <p className="section-desc">
                            Make the most of your visit with these iconic Tokyo destinations
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
                        Secure your spot at the Global Summit on Fluid Mechanics and Turbomachinery and be part of this transformative event
                    </p>
                    <Button variant="outline" style={{ borderColor: 'white', color: 'white', background: 'transparent' }}>
                        Register Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Venue;
