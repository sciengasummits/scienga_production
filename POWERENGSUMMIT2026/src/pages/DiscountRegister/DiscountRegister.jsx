import React, { useState } from 'react';
import './DiscountRegister.css';
import { countries } from '../../data/countries';

const DiscountRegister = () => {
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
        console.log('Registration submitted:', formData);
        alert('Registration submitted successfully!');
    };

    return (
        <div className="discount-register-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Online Registration</h1>
                    <p className="page-breadcrumb">HOME / REGISTER / ONLINE</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="discount-register-container">
                    <div className="registration-top-info">
                        <div className="payment-badge-box">
                            <div className="stripe-header">
                                <span className="stripe-logo">stripe</span>
                                <span className="secure-tag">SECURE<br />PAYMENTS</span>
                            </div>
                            <div className="payment-methods">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" alt="Mastercard" />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="discount-register-form">
                        <div className="form-row">
                            <select
                                name="title"
                                className="form-input"
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
                                className="form-input"
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
                                className="form-input"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone *"
                                className="form-input"
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
                                className="form-input"
                                value={formData.organization}
                                onChange={handleInputChange}
                            />

                            <select
                                name="country"
                                className="form-input"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select country</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="paymentDescription"
                                placeholder="Enter the description of your payment"
                                className="form-input"
                                value={formData.paymentDescription}
                                onChange={handleInputChange}
                            />

                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter the Amount"
                                className="form-input"
                                value={formData.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn-register-submit">
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountRegister;
