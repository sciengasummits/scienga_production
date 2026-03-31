import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './PricingSection.css';
import * as siteApi from '../../../api/siteApi';

const DEFAULT_PLANS = [
    {
        id: 1, title: 'Speaker', price: '799', currency: 'USD',
        features: ['Oral Presentation', 'Networking with Fellow Speakers', 'E-Abstract Book', 'Certificate of Attendance', 'Conference Schedule Handout', 'Access to All Sessions and Workshops', 'Lunch and Coffee Breaks']
    },
    {
        id: 2, title: 'Delegate', price: '899', currency: 'USD', featured: true,
        features: ['Delegate Opportunities', 'Connect with Fellow Delegates', 'E-Abstract Book', 'Certificate of Attendance', 'Conference Schedule Handout', 'Access to All Sessions and Workshops', 'Lunch and Coffee Breaks']
    },
    {
        id: 3, title: 'Student', price: '499', currency: 'USD',
        features: ['Student Presentation', 'Meet Our Experts', 'E-Abstract Book', 'Certificate of Attendance', 'Conference Schedule Handout', 'Access to All Sessions and Workshops', 'Lunch and Coffee Breaks']
    },
];

const PricingSection = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState(DEFAULT_PLANS);
    const [sectionTitle, setSectionTitle] = useState('Registration Pricing');

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchContent('pricing');
                if (res?.packages?.length) {
                    if (res.title) setSectionTitle(res.title);
                    setPlans(res.packages.map((pkg, i) => ({
                        ...pkg,
                        id: i + 1,
                        featured: i === 1,
                    })));
                }
            } catch { /* use defaults */ }
        };
        load();
    }, []);

    return (
        <section className="pricing-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-subtitle">Choose Your Plan</h4>
                    <h2 className="section-title">{sectionTitle}</h2>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                        >
                            <div className="pricing-header">
                                <h3 className="pricing-type">{(plan.title || plan.type || '').toUpperCase()}</h3>
                                <div className="pricing-amount">
                                    <span className="currency">$</span>
                                    <span className="price">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                {(plan.features || []).map((feature, index) => (
                                    <li key={index} className="pricing-feature-item">
                                        <Check size={18} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="pricing-register-btn"
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
