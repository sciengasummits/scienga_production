import React, { useState } from 'react';
import { countries } from '../../data/countries';
import '../Register/Register.css';
import './DiscountRegistration.css';

const DiscountRegistration = () => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        phone: '',
        organization: '',
        country: '',
        paymentDescription: '',
        amount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration submitted successfully!');
    };

    return (
        <div className="discount-registration-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Registration</h1>
                    <p className="page-breadcrumb">Home / Register</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="simple-registration-form">
                    <div className="payment-logos">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                            alt="Stripe" 
                            className="payment-logo"
                        />
                        <div className="payment-methods">
                            <span className="secure-text">SECURE PAYMENTS</span>
                            <div className="payment-icons">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="registration-form">
                        <div className="form-row">
                            <select
                                name="title"
                                className="form-control"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Titles</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                                <option value="Dr">Dr</option>
                                <option value="Prof">Prof</option>
                            </select>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone *"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="organization"
                                placeholder="Organization Name"
                                className="form-control"
                                value={formData.organization}
                                onChange={handleInputChange}
                            />

                            <select
                                name="country"
                                className="form-control"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="paymentDescription"
                                placeholder="Enter the description of your payment"
                                className="form-control"
                                value={formData.paymentDescription}
                                onChange={handleInputChange}
                            />

                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter the Amount"
                                className="form-control"
                                value={formData.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn-register-simple">
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountRegistration;
