import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PricingSection.css';

const pricingPlans = [
    {
        id: 1,
        type: 'SPEAKER',
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
        id: 2,
        type: 'DELEGATE',
        price: '899',
        features: [
            'Delegate Opportunities',
            'Connect with Fellow Delegates',
            'E-Abstract Book',
            'Certificate of Attendance',
            'Conference Schedule Handout',
            'Access to All Sessions and Workshops',
            'Lunch and Coffee Breaks'
        ],
        featured: true
    },
    {
        id: 3,
        type: 'STUDENT',
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

const PricingSection = () => {
    const navigate = useNavigate();

    const handleRegister = (planType) => {
        navigate('/register', { state: { selectedPlan: planType } });
    };

    return (
        <section className="pricing-section section-padding">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="section-title">REGISTRATION PRICING</h2>
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                        >
                            <div className="pricing-card-header">
                                <h3 className="pricing-type">{plan.type}</h3>
                                <div className="pricing-amount">
                                    <span className="currency">$</span>
                                    <span className="price">{plan.price}</span>
                                </div>
                            </div>

                            <div className="pricing-card-body">
                                <ul className="pricing-features">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="pricing-feature-item">
                                            <Check size={20} className="check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pricing-card-footer">
                                <button 
                                    className="pricing-btn"
                                    onClick={() => handleRegister(plan.type)}
                                >
                                    REGISTER NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
