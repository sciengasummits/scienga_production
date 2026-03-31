import React, { useState } from 'react';
import './Register.css';
import { countries } from '../../data/countries';
import * as siteApi from '../../api/siteApi';

const Register = ({ isDiscounted = false }) => {
    const [formData, setFormData] = useState({
        designation: '',
        fullName: '',
        email: '',
        telephone: '',
        country: '',
        company: '',
        address: ''
    });

    const [selectedAcademicCategory, setSelectedAcademicCategory] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [includeAccompanying, setIncludeAccompanying] = useState(false);
    const [selectedAccommodation, setSelectedAccommodation] = useState(null);
    const [selectedSponsorship, setSelectedSponsorship] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

    // Discount multiplier (20% off if discounted)
    const discountMultiplier = isDiscounted ? 0.8 : 1;
    const applyDiscount = (price) => Math.round(price * discountMultiplier);

    // Date Logic
    const currentDate = new Date();
    const earlyBirdEnd = new Date('2026-11-25');
    const standardEnd = new Date('2027-01-25');

    let activePhase = 'early';
    if (currentDate <= earlyBirdEnd) {
        activePhase = 'early';
    } else if (currentDate <= standardEnd) {
        activePhase = 'standard';
    } else {
        activePhase = 'onspot';
    }

    const baseAcademicPricing = [
        { id: 'speaker', label: 'Speaker Registration', early: 749, standard: 849, onspot: 949 },
        { id: 'delegate', label: 'Delegate Registration', early: 899, standard: 999, onspot: 1099 },
        { id: 'poster', label: 'Poster Registration', early: 449, standard: 549, onspot: 649 },
        { id: 'student', label: 'Student', early: 299, standard: 399, onspot: 499 },
        { id: 'virtual', label: 'Virtual (Online)', early: 199, standard: 299, onspot: 399 },
    ];

    const academicPricing = baseAcademicPricing.map(item => ({
        ...item,
        early: applyDiscount(item.early),
        standard: applyDiscount(item.standard),
        onspot: applyDiscount(item.onspot),
        original: item
    }));

    const accommodationOptions = [
        { nights: 2, single: 360, double: 400, triple: 440 },
        { nights: 3, single: 540, double: 600, triple: 660 },
        { nights: 4, single: 720, double: 800, triple: 880 },
        { nights: 5, single: 900, double: 1000, triple: 1100 },
    ];

    const sponsorshipPricing = [
        { id: 'platinum', label: 'Platinum Sponsor', price: applyDiscount(4999) },
        { id: 'diamond', label: 'Diamond Sponsor', price: applyDiscount(3999) },
        { id: 'gold', label: 'Gold Sponsor', price: applyDiscount(2999) },
        { id: 'exhibitor', label: 'Exhibitor', price: applyDiscount(1999) },
    ];

    const calculateTotal = () => {
        let total = 0;
        if (selectedAcademicCategory) {
            const item = academicPricing.find(p => p.id === selectedAcademicCategory);
            if (item) total += item[activePhase];
        }
        if (selectedSponsorship) {
            const item = sponsorshipPricing.find(p => p.id === selectedSponsorship);
            if (item) total += item.price;
        }
        if (includeAccompanying) total += 249;
        if (selectedAccommodation) {
            const [nights, type] = selectedAccommodation.split('-');
            const option = accommodationOptions.find(o => o.nights === parseInt(nights));
            if (option) total += option[type];
        }
        return total;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({ designation: '', fullName: '', email: '', telephone: '', country: '', company: '', address: '' });
        setSelectedAcademicCategory(null);
        setTermsAccepted(false);
        setIncludeAccompanying(false);
        setSelectedAccommodation(null);
        setSelectedSponsorship(null);
        setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email) { alert('Please fill in Full Name and Email.'); return; }
        if (!termsAccepted) { alert('Please accept the terms & conditions.'); return; }

        const total = calculateTotal();
        const selectedCat = academicPricing.find(p => p.id === selectedAcademicCategory);
        const selectedSpon = sponsorshipPricing.find(p => p.id === selectedSponsorship);

        const payload = {
            title: formData.designation,
            name: formData.fullName,
            email: formData.email,
            phone: formData.telephone,
            country: formData.country,
            company: formData.company,
            address: formData.address,
            registrationCategory: selectedCat?.label || '',
            accommodation: selectedAccommodation || '',
            sponsorship: selectedSpon?.label || '',
            accompanyingPerson: includeAccompanying,
            totalAmount: total,
            status: 'Pending',
        };

        setSubmitting(true);
        setSubmitStatus(null);
        try {
            const registration = await siteApi.submitRegistration(payload);
            if (!registration || registration.error) throw new Error(registration?.error || 'Registration failed.');

            const { key } = await siteApi.fetchPaymentKey();
            const { order } = await siteApi.createPaymentOrder({
                amount: total,
                registrationId: registration._id,
                description: `PowerEng Summit Registration: ${formData.fullName}`
            });

            const options = {
                key,
                amount: order.amount,
                currency: order.currency,
                name: 'Power Energy Summit 2026',
                description: `Registration for ${formData.fullName}`,
                order_id: order.id,
                prefill: { name: formData.fullName, email: formData.email, contact: formData.telephone },
                theme: { color: '#d97706' },
                handler: async (response) => {
                    try {
                        const verifyResult = await siteApi.verifyPayment({ ...response, registrationId: registration._id });
                        if (verifyResult.success) { setSubmitStatus('success'); handleReset(); }
                        else throw new Error(verifyResult.message || 'Verification failed.');
                    } catch (err) {
                        alert('Payment success but verification failed: ' + err.message);
                        setSubmitStatus('error');
                    }
                },
                modal: { ondismiss: () => setSubmitting(false) }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.error('Registration error:', err);
            setSubmitStatus('error');
            alert(err.message || 'An error occurred. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="register-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Registration</h1>
                    <p className="page-breadcrumb">Home / Register</p>
                </div>
            </div>

            <div className="container section-padding">
                {isDiscounted && (
                    <div className="discount-banner">
                        <span className="discount-icon">🎉</span>
                        <div className="discount-text">
                            <h3>Special Discount Activated!</h3>
                            <p>You have unlocked a <strong>20% discount</strong> on all registration categories.</p>
                        </div>
                    </div>
                )}

                <div className="registration-form-container">
                    <div className="form-section full-width-form">
                        <div className="form-row">
                            <select name="designation" className="form-control" value={formData.designation} onChange={handleInputChange}>
                                <option value="" disabled>Select Designation</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                                <option value="Dr">Dr</option>
                                <option value="Prof">Prof</option>
                                <option value="PhD">PhD</option>
                            </select>
                            <input type="text" name="fullName" placeholder="Full Name" className="form-control" value={formData.fullName} onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                            <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleInputChange} />
                            <input type="tel" name="telephone" placeholder="Telephone Number" className="form-control" value={formData.telephone} onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                            <select name="country" className="form-control" value={formData.country} onChange={handleInputChange}>
                                <option value="" disabled>Select Country</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            <input type="text" name="company" placeholder="Company/University" className="form-control" value={formData.company} onChange={handleInputChange} />
                        </div>
                        <div className="form-row full-width">
                            <textarea name="address" placeholder="Address" className="form-control" rows="3" value={formData.address} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className="pricing-section">
                    <h2 className="pricing-title">SELECT FROM VARIOUS CATEGORIES BELOW</h2>
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th className="category-header">TYPES OF PARTICIPATION</th>
                                <th className={activePhase === 'early' ? 'active-header-early' : ''}>
                                    Early Bird Registration<br />
                                    <span className="date">November 25, 2026</span>
                                    {activePhase === 'early' && <span className="badge-active">ACTIVE</span>}
                                </th>
                                <th className={activePhase === 'standard' ? 'active-header-standard' : ''}>
                                    Standard Registration<br />
                                    <span className="date">January 25, 2027</span>
                                    {activePhase === 'standard' && <span className="badge-active">ACTIVE</span>}
                                </th>
                                <th className={activePhase === 'onspot' ? 'active-header-onspot' : ''}>
                                    OnSpot Registration<br />
                                    <span className="date">March 23, 2027</span>
                                    {activePhase === 'onspot' && <span className="badge-active">ACTIVE</span>}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicPricing.map(item => (
                                <tr key={item.id} className={selectedAcademicCategory === item.id ? 'selected-row' : ''}>
                                    <td className="item-cell">
                                        <label className="radio-label">
                                            <input type="radio" name="academicCategory" checked={selectedAcademicCategory === item.id} onChange={() => setSelectedAcademicCategory(item.id)} />
                                            {item.label}
                                        </label>
                                    </td>
                                    {['early', 'standard', 'onspot'].map(phase => (
                                        <td key={phase} className={activePhase === phase && selectedAcademicCategory === item.id ? 'selected-active-cell' : ''}>
                                            <div className="price-wrapper">
                                                {isDiscounted && <span className="original-price">${item.original[phase]}</span>}
                                                <span className={activePhase === phase ? 'price-active' : ''}>$ {item[phase]}</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="pricing-table sponsorship-table">
                        <thead>
                            <tr>{sponsorshipPricing.map(item => <th key={item.id}>{item.label}</th>)}</tr>
                        </thead>
                        <tbody>
                            <tr>
                                {sponsorshipPricing.map(item => (
                                    <td key={item.id}>
                                        <label className="radio-label" style={{ justifyContent: 'center' }}>
                                            <input type="radio" name="sponsorship" checked={selectedSponsorship === item.id} onChange={() => setSelectedSponsorship(item.id)} />
                                            ${item.price}
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="accommodation-section">
                    <div className="accompanying-checkbox">
                        <label className="checkbox-label">
                            <input type="checkbox" checked={includeAccompanying} onChange={(e) => setIncludeAccompanying(e.target.checked)} />
                            <strong>Include Accompanying Person ($249 Extra)</strong>
                        </label>
                    </div>
                    <table className="accommodation-table">
                        <thead>
                            <tr>
                                <th>Accommodation</th>
                                <th>Single Occupancy</th>
                                <th>Double Occupancy</th>
                                <th>Triple Occupancy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accommodationOptions.map((option) => (
                                <tr key={option.nights}>
                                    <td className="nights-cell">For {option.nights} Nights</td>
                                    {['single', 'double', 'triple'].map(type => (
                                        <td key={type}>
                                            <label className="radio-label">
                                                <input type="radio" name="accommodation" checked={selectedAccommodation === `${option.nights}-${type}`} onChange={() => setSelectedAccommodation(`${option.nights}-${type}`)} />
                                                ${option[type]}
                                            </label>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="summary-section">
                    <div className="total-display">
                        <span className="total-label">TOTAL PRICE($) :</span>
                        <span className="total-amount">{calculateTotal()}</span>
                    </div>
                    <div className="terms-checkbox">
                        <label>
                            <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                            I've read and accept the <span className="terms-link">terms & conditions</span>.
                        </label>
                    </div>
                    <p className="processing-fee">Note: 5% of processing charges will be applicable.</p>
                    {submitStatus === 'success' && <div className="submit-status success">✅ Registration submitted successfully! We will contact you shortly.</div>}
                    {submitStatus === 'error' && <div className="submit-status error">❌ Submission failed. Please try again or contact us.</div>}
                    <div className="action-buttons">
                        <button className="btn-register" onClick={handleSubmit} disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                            {submitting ? 'Submitting...' : 'REGISTER NOW'}
                        </button>
                        <button className="btn-reset" onClick={handleReset}>RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
