import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './PricingSection.css';

const PricingSection = () => {
    const navigate = useNavigate();

    const pricingPlans = [
        {
            id: 1,
            title: 'SPEAKER',
            price: '799',
            currency: '$',
            features: [
                'Oral Presentation',
                'Networking with Fellow Speakers',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference Schedule Handout',
                'Access to All Sessions and Workshops',
                'Lunch and Coffee Breaks'
            ]
        },
        {
            id: 2,
            title: 'DELEGATE',
            price: '899',
            currency: '$',
            featured: true,
            features: [
                'Delegate Opportunities',
                'Connect with Fellow Delegates',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference Schedule Handout',
                'Access to All Sessions and Workshops',
                'Lunch and Coffee Breaks'
            ]
        },
        {
            id: 3,
            title: 'STUDENT',
            price: '499',
            currency: '$',
            features: [
                'Student Presentation',
                'Meet Our Experts',
                'E-Abstract Book',
                'Certificate of Attendance',
                'Conference Schedule Handout',
                'Access to All Sessions and Workshops',
                'Lunch and Coffee Breaks'
            ]
        }
    ];

    return (
        <section className="pricing-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">REGISTRATION PRICING</h2>
                    <div className="section-line"></div>
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            <div className="pricing-header">
                                <h3 className="pricing-title">{plan.title}</h3>
                                <div className="pricing-price">
                                    <span className="currency">{plan.currency}</span>
                                    <span className="amount">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="pricing-feature">
                                        <Check size={20} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                className="pricing-btn"
                                onClick={() => navigate('/register')}
                            >
                                REGISTER NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
