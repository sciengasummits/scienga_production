import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './PricingSection.css';

const PricingSection = () => {
    const navigate = useNavigate();

    const pricingPlans = [
        {
            title: 'SPEAKER',
            price: '799',
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
            title: 'DELEGATE',
            price: '899',
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
            title: 'STUDENT',
            price: '499',
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
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="pricing-card">
                            <div className="pricing-card__header">
                                <h3 className="pricing-card__title">{plan.title}</h3>
                                <div className="pricing-card__price">
                                    <span className="currency">$</span>
                                    <span className="amount">{plan.price}</span>
                                </div>
                            </div>
                            <ul className="pricing-card__features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className="pricing-card__button"
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
