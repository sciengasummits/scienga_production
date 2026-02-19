import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'

export default function Prices() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pricingData = [
        {
            title: 'Speaker',
            type: 'Early Bird',
            priceUSD: 749,
            priceINR: '62,725',
            popular: true, // Let's highlight the Speaker one as standard
            features: [
                'Speaker Opportunity',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference schedule handout',
                'Entry to all session and workshops',
                'Lunch & Coffee breaks'
            ]
        },
        {
            title: 'Delegate',
            type: 'Early Bird',
            priceUSD: 899,
            priceINR: '75,286',
            popular: false,
            features: [
                'Delegate Opportunity',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference schedule handout',
                'Entry to all session and workshops',
                'Lunch & Coffee breaks'
            ]
        },
        {
            title: 'Student',
            type: 'Early Bird',
            priceUSD: 299,
            priceINR: '25,037',
            popular: false,
            features: [
                'Poster Opportunity',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference schedule handout',
                'Entry to all session and workshops',
                'Lunch & Coffee breaks'
            ]
        }
    ];

    const primaryColor = 'var(--primary)';
    const hoverColor = '#111827';
    const textColor = '#333';
    const mutedText = '#666';

    return (
        <>
            <Navbar />
            <PageHeader
                title="Prices"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Prices', link: null }
                ]}
            />
            <div style={{ backgroundColor: '#f9fafb', padding: '6rem 0', minHeight: '80vh' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: hoverColor, marginBottom: '1rem' }}>Registration Plans</h2>
                        <p style={{ color: mutedText, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Choose the perfect plan that suits your participation needs. Early bird discounts available for a limited time.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        justifyContent: 'center'
                    }}>
                        {pricingData.map((plan, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        boxShadow: isHovered
                                            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        padding: '3rem 2rem',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        border: isHovered ? `2px solid ${primaryColor}` : '2px solid transparent',
                                        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
                                    }}
                                >
                                    {plan.popular && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-15px',
                                            backgroundColor: primaryColor,
                                            color: 'white',
                                            padding: '5px 15px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            Most Popular
                                        </div>
                                    )}

                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem', color: hoverColor }}>
                                        {plan.title}
                                    </h3>
                                    <span style={{
                                        backgroundColor: '#e0e7ff',
                                        color: primaryColor,
                                        padding: '4px 12px',
                                        borderRadius: '50px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        marginBottom: '2rem'
                                    }}>
                                        {plan.type}
                                    </span>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: '800', color: hoverColor, lineHeight: '1' }}>
                                            ${plan.priceUSD}
                                        </div>
                                        <div style={{ fontSize: '1.25rem', color: mutedText, marginTop: '5px' }}>
                                            / ₹{plan.priceINR}
                                        </div>
                                    </div>

                                    <Link to="/register" style={{
                                        display: 'inline-block',
                                        width: '100%',
                                        backgroundColor: isHovered ? primaryColor : 'white',
                                        color: isHovered ? 'white' : primaryColor,
                                        border: `2px solid ${primaryColor}`,
                                        padding: '12px 20px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        transition: 'all 0.3s ease',
                                        marginBottom: '2.5rem'
                                    }}>
                                        Register Now
                                    </Link>

                                    <div style={{ width: '100%', textAlign: 'left' }}>
                                        {plan.features.map((feature, fIndex) => (
                                            <div key={fIndex} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                padding: '10px 0',
                                                color: textColor,
                                                fontSize: '0.95rem',
                                                lineHeight: '1.5'
                                            }}>
                                                <div style={{
                                                    color: 'white',
                                                    backgroundColor: feature.includes('Opportunity') ? '#10b981' : primaryColor, // Green for opportunities, Blue for standard
                                                    borderRadius: '50%',
                                                    minWidth: '20px',
                                                    height: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '10px',
                                                    marginTop: '2px'
                                                }}>
                                                    ✓
                                                </div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center', color: mutedText, fontSize: '0.9rem' }}>
                        Looking for group discounts? <Link to="/contact" style={{ color: primaryColor, fontWeight: 'bold', textDecoration: 'none' }}>Contact us</Link> for special rates.
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
