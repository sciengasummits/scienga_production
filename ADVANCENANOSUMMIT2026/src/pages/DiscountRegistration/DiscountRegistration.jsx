import React, { useState } from 'react';
import { countries } from '../../data/countriesData';
import './DiscountRegistration.css';

const DiscountRegistration = () => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        phone: '',
        organization: '',
        country: '',
        description: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', formData);
        alert('Registration submitted successfully! (This is a demo)');
    };

    return (
        <div className="discount-registration-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Registration</h1>
                    <p className="page-breadcrumb">Home / Registration</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="registration-layout">
                    <div className="registration-form-container">
                        <form onSubmit={handleSubmit} className="registration-form">
                            <div className="form-row">
                                <select
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select Titles</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Dr">Dr</option>
                                    <option value="Prof">Prof</option>
                                </select>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="Organization Name"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="form-control"
                                />

                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Enter the description of your payment"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-control"
                                />

                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="Enter the Amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <button type="submit" className="register-submit-btn">
                                REGISTER
                            </button>
                        </form>
                    </div>

                    <div className="stripe-badge">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                            alt="Stripe Secure Payments" 
                        />
                        <span>SECURE PAYMENTS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountRegistration;
