import React from 'react';
import { Link } from 'react-router-dom';

const Sponsorship = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const packages = [
        {
            title: "Platinum Sponsorship",
            price: "$5000",
            features: [
                "4 Complimentary registrations",
                "Complementary workshop",
                "Complimentary Lunch and Coffee Break",
                "Acknowledgement during the opening and closing ceremony",
                "Logo in website with hyperlink",
                "Logo in social media publication for the event",
                "Logo in email campaigns to all attendees",
                "Logo in booklets, flyers, and proceedings",
                "Logo in main poster for the conference",
                "15 Minutes presentation opportunity about company's products or services in the congress"
            ]
        },
        {
            title: "Gold Sponsorship",
            price: "$4000",
            features: [
                "3 Complimentary registrations",
                "Complimentary Lunch and Coffee Break",
                "Acknowledgement during the opening and closing ceremony",
                "Logo in website with hyperlink",
                "Logo in social media publication for the event",
                "Logo in email campaigns to all attendees",
                "Logo in booklets, flyers, and proceedings",
                "Logo in main poster for the conference"
            ]
        },
        {
            title: "Silver Sponsorship",
            price: "$3000",
            features: [
                "2 Complimentary registrations",
                "Complimentary Lunch and Coffee Break",
                "Acknowledgement during the opening and closing ceremony",
                "Logo in website with hyperlink",
                "Logo in social media publication for the event",
                "Logo in email campaigns to all attendees",
                "Logo in booklets, flyers, and proceedings",
                "Logo in main poster for the conference"
            ]
        },
        {
            title: "Exhibitor / Table exhibit",
            price: "$2500",
            features: [
                "1 Table in exhibition area",
                "2 Complimentary conference registrations",
                "Complimentary Lunch and Coffee Break",
                "Acknowledgement during the opening and closing ceremony",
                "Logo in website with hyperlink",
                "Logo in social media publication for the event",
                "Logo in email campaigns to all attendees",
                "Logo in booklets, flyers, and proceedings",
                "Logo in main poster for the conference",
                "Direct interactions with participants"
            ]
        }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1e293b', marginBottom: '1rem' }}>
                        Sponsorship & Exhibitors
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Showcase your brand to valid industry leaders and researchers.
                    </p>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'var(--primary, #2563eb)',
                        margin: '1.5rem auto',
                        borderRadius: '2px'
                    }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    {packages.map((pkg, index) => (
                        <div key={index} style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '2rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            border: '1px solid #e2e8f0',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>{pkg.title}</h2>
                                <span style={{ fontSize: '1.25rem', color: 'var(--primary, #2563eb)', fontWeight: '600' }}>{pkg.price}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} style={{
                                        marginBottom: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'baseline', // Align with text top if multiline
                                        gap: '10px',
                                        color: '#475569',
                                        lineHeight: '1.5'
                                    }}>
                                        <span style={{ color: 'var(--primary, #2563eb)', fontSize: '1.2rem' }}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                    <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>
                        The exhibit provides a platform for companies and institutions to present their products and distribute brochures and business cards. The exhibit also provides a unique networking opportunity with many experts and researchers.
                    </p>
                    <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        For more information about sponsorship/exhibitor click here. <br />
                        If you are interested in sponsoring this event, please write an email to: <a href="mailto:sciengasummits@gmail.com" style={{ color: 'var(--primary, #2563eb)', fontWeight: '600' }}>sciengasummits@gmail.com</a>
                    </p>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <button style={{
                            background: 'var(--primary, #2563eb)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                            transition: 'all 0.2s',
                        }}
                            onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
                            onMouseLeave={(e) => e.target.style.background = 'var(--primary, #2563eb)'}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsorship;
