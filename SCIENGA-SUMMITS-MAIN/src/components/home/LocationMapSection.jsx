import React from 'react'
import MapImage from '../../assets/images/map.avif'

export default function LocationMapSection() {
    return (
        <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Event <span style={{ color: 'var(--primary)' }}>Location</span>
                    </h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Join us at our premier venue in the heart of the city.
                    </p>
                </div>

                <div className="location-grid">
                    {/* Left Side - Location Image */}
                    <div className="location-item" style={{
                        height: '400px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}>
                        <img
                            src={MapImage}
                            alt="Jain Sadguru Image's Capital Park"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    {/* Right Side - Map */}
                    <div className="location-item" style={{
                        height: '400px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        position: 'relative'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=17.446943283081055,78.38612365722656&z=15&output=embed"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Event Location Map"
                        ></iframe>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>
                        Jain Sadguru Image's Capital Park
                    </h3>
                    <p style={{ color: '#64748b' }}>
                        Hyderabad, Telangana, India
                    </p>
                </div>
            </div>
        </section>
    )
}
