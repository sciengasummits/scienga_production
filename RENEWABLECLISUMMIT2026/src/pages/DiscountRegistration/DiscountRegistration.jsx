import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import './DiscountRegistration.css';

// Comprehensive list of all countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

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
        console.log('Form submitted:', formData);
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
                <div className="discount-reg-container">
                    <div className="payment-badges">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" />
                        <span className="secure-text">SECURE PAYMENTS</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" />
                    </div>

                    <form className="discount-reg-form" onSubmit={handleSubmit}>
                        <div className="form-row-two">
                            <select
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="form-input"
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
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-row-two">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone *"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-row-two">
                            <input
                                type="text"
                                name="organization"
                                placeholder="Organization Name"
                                value={formData.organization}
                                onChange={handleChange}
                                className="form-input"
                            />
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="form-input"
                                required
                            >
                                <option value="">Select country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row-two">
                            <input
                                type="text"
                                name="description"
                                placeholder="Enter the description of your payment"
                                value={formData.description}
                                onChange={handleChange}
                                className="form-input"
                            />
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter the Amount"
                                value={formData.amount}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-actions-center">
                            <Button type="submit">REGISTER</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DiscountRegistration;
