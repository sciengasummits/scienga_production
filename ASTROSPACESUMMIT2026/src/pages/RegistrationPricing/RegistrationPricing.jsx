import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './RegistrationPricing.css';

const RegistrationPricing = () => {
    const navigate = useNavigate();

    const pricingPlans = [
        {
            id: 'speaker',
            title: 'SPEAKER',
            price: 799,
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
            id: 'delegate',
            title: 'DELEGATE',
            price: 899,
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
            id: 'student',
            title: 'STUDENT',
            price: 499,
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
        <div className="registration-pricing-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">REGISTRATION PRICING</h1>
                    <p className="page-breadcrumb">Home / Registration Pricing</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="pricing-cards-grid">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                        >
                            <div className="pricing-header">
                                <h3 className="pricing-category">{plan.title}</h3>
                                <div className="pricing-amount">
                                    <span className="currency">$</span>
                                    <span className="price">{plan.price}</span>
                                </div>
                            </div>
                            <div className="pricing-features">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <Check size={20} className="check-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button 
                                className="btn-register-now"
                                onClick={() => navigate('/register')}
                            >
                                REGISTER NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegistrationPricing;
