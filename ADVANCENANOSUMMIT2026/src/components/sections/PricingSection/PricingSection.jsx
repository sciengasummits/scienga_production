import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../../common/Button/Button';
import './PricingSection.css';

const PricingSection = () => {
    const navigate = useNavigate();

    const pricingPlans = [
        {
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
            highlighted: true
        },
        {
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

    return (
        <section className="pricing-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-subtitle">Choose Your Plan</h4>
                    <h2 className="section-title">Registration Pricing</h2>
                </div>

                <div className="pricing-cards">
                    {pricingPlans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                        >
                            <div className="pricing-header">
                                <h3 className="pricing-type">{plan.type}</h3>
                                <div className="pricing-amount">
                                    <span className="currency">$</span>
                                    <span className="price">{plan.price}</span>
                                </div>
                            </div>

                            <div className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="feature-item">
                                        <Check size={18} className="feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button 
                                onClick={() => navigate('/register')}
                                className="pricing-btn"
                            >
                                Register Now
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
