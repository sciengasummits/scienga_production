import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Register() {

    // Smooth scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        plan: 'Speaker', // Default plan
        currency: 'USD'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Scroll to form function
    const scrollToForm = (selectedPlan) => {
        setFormData(prev => ({ ...prev, plan: selectedPlan }));
        const formElement = document.getElementById('registration-form');
        if (formElement) {
            const yOffset = -150; // Offset for fixed navbar
            const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            alert(`Thank you for registering as a ${formData.plan}! We will contact you at ${formData.email}.`);
            setIsSubmitting(false);
            setFormData({ name: '', email: '', plan: 'Speaker', currency: 'USD' });
        }, 1500);
    };

    const plans = [
        {
            title: "Speaker",
            tag: "Early Bird",
            popular: true,
            priceUSD: "$749",
            priceINR: "₹62,725",
            features: [
                "Speaker Opportunity",
                "E-Abstract Book",
                "Certificate of Attendance",
                "Conference schedule handout",
                "Entry to all session and workshops",
                "Lunch & Coffee breaks"
            ]
        },
        {
            title: "Delegate",
            tag: "Early Bird",
            priceUSD: "$899",
            priceINR: "₹75,286",
            features: [
                "Delegate Opportunity",
                "E-Abstract Book",
                "Certificate of Attendance",
                "Conference schedule handout",
                "Entry to all session and workshops",
                "Lunch & Coffee breaks"
            ]
        },
        {
            title: "Student",
            tag: "Early Bird",
            priceUSD: "$299",
            priceINR: "₹25,037",
            features: [
                "Poster Opportunity",
                "E-Abstract Book",
                "Certificate of Attendance",
                "Conference schedule handout",
                "Entry to all session and workshops",
                "Lunch & Coffee breaks"
            ]
        }
    ];

    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        backgroundColor: '#f8fafc'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#334155',
        fontSize: '0.95rem'
    };

    return (
        <>
            <Navbar />

            {/* Pricing Section */}
            <div style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: '#f9fbfd', minHeight: '60vh' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{
                            color: 'var(--primary, #2563eb)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            background: 'rgba(37, 99, 235, 0.1)',
                            padding: '6px 16px',
                            borderRadius: '50px'
                        }}>
                            Join The Summit
                        </span>
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            color: '#0f172a',
                            marginTop: '1.5rem',
                            marginBottom: '1rem'
                        }}>
                            Registration Plans
                        </h1>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Choose the perfect plan for your participation.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem',
                        marginBottom: '6rem',
                        alignItems: 'flex-start'
                    }}>
                        {plans.map((plan, index) => (
                            <div key={index} style={{
                                background: 'white',
                                borderRadius: '16px',
                                padding: '3rem 2rem',
                                boxShadow: plan.popular ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : '0 10px 30px -10px rgba(0,0,0,0.05)',
                                border: '1px solid #e2e8f0',
                                textAlign: 'center',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease',
                                transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
                                zIndex: plan.popular ? 2 : 1
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = plan.popular ? 'scale(1.02) translateY(-5px)' : 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = plan.popular ? 'scale(1.02)' : 'translateY(0)';
                                    e.currentTarget.style.boxShadow = plan.popular ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : '0 10px 30px -10px rgba(0,0,0,0.05)';
                                }}
                            >
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-16px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#3b82f6',
                                        color: 'white',
                                        padding: '6px 20px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.4)'
                                    }}>
                                        Most Popular
                                    </div>
                                )}

                                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem' }}>{plan.title}</h3>

                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                    <span style={{
                                        background: '#eff6ff',
                                        color: '#3b82f6',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        {plan.tag}
                                    </span>
                                </div>

                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                                        {plan.priceUSD}
                                    </div>
                                    <div style={{ fontSize: '1.2rem', color: '#94a3b8', marginTop: '8px' }}>
                                        / <span style={{ fontWeight: 500 }}>{plan.priceINR}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => scrollToForm(plan.title)}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        background: 'transparent',
                                        color: '#3b82f6',
                                        border: '2px solid #3b82f6',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        marginBottom: '2.5rem',
                                        transition: 'all 0.2s',
                                        textTransform: 'capitalize'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#3b82f6';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#3b82f6';
                                    }}
                                >
                                    Register Now
                                </button>

                                <div style={{ flex: 1, textAlign: 'left' }}>
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} style={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            color: '#475569',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5'
                                        }}>
                                            <div style={{
                                                minWidth: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                background: '#10b981',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.7rem',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>✓</div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Registration Form */}
                    <div id="registration-form" style={{ maxWidth: '700px', margin: '0 auto', scrollMarginTop: '180px' }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: '24px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            border: '1px solid #f1f5f9'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e293b', marginBottom: '0.5rem' }}>
                                    Complete Your Registration
                                </h3>
                                <p style={{ color: '#64748b' }}>
                                    Fill in your details below to secure your spot for the <strong style={{ color: 'var(--primary, #2563eb)' }}>{formData.plan}</strong> plan.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label htmlFor="name" style={labelStyle}>Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            required
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" style={labelStyle}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                    <div>
                                        <label htmlFor="plan" style={labelStyle}>Selected Category</label>
                                        <select
                                            id="plan"
                                            name="plan"
                                            value={formData.plan}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            required
                                        >
                                            <option value="Speaker">Speaker</option>
                                            <option value="Delegate">Delegate</option>
                                            <option value="Student">Student</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="currency" style={labelStyle}>Currency</label>
                                        <select
                                            id="currency"
                                            name="currency"
                                            value={formData.currency}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            required
                                        >
                                            <option value="USD">USD ($)</option>
                                            <option value="INR">INR (₹)</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        backgroundColor: 'var(--primary, #2563eb)',
                                        color: 'white',
                                        padding: '16px 30px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        opacity: isSubmitting ? 0.8 : 1,
                                        boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                                    }}
                                    onMouseEnter={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                                    onMouseLeave={(e) => !isSubmitting && (e.target.style.transform = 'translateY(0)')}
                                >
                                    {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                                </button>
                                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                                    By registering, you agree to our Terms & Conditions and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
