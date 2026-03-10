import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import { CalendarDays } from 'lucide-react';
import './AbstractSubmission.css';
import { countries } from '../../data/countries';
import * as siteApi from '../../api/siteApi';

const TOPICS = [
    'Smart Grid Technologies',
    'Power Electronics & Converters',
    'Renewable Energy Systems',
    'Electric Machines & Drives',
    'High Voltage Engineering',
    'Energy Storage Technologies',
    'Power Quality & Harmonics',
    'Distributed Generation Systems',
    'Electric Vehicles & Charging',
    'Microgrids & Manogrids',
    'HVDC & Flexible AC Transmission',
    'Electromagnetic Compatibility',
    'Protection & Control Systems',
    'Power System Stability & Dynamics',
    'Computational Intelligence in Power',
    'Sustainable Energy Policy',
    'Industrial Power Applications',
    'Wireless Power Transfer',
    'Energy Harvesting Technologies',
    'Digital Twins in Power Systems',
];

const IMPORTANT_DATES = [
    { label: 'Abstract Submission Opens', date: 'September 15, 2026' },
    { label: 'Early Bird Deadline', date: 'November 25, 2026' },
    { label: 'Abstract Submission Deadline', date: 'January 25, 2027' },
    { label: 'Conference Date', date: 'March 23-25, 2027' },
];

const AbstractSubmission = () => {
    const [formData, setFormData] = useState({
        title: '', name: '', email: '', mobile: '',
        organization: '', country: '', interest: '', topic: '', address: ''
    });
    const [file, setFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await siteApi.submitAbstract({ ...formData, fileName: file?.name });
            setSubmitted(true);
        } catch (err) {
            setError('Submission failed. Please try again or email us at contact@powerenergysummit.com');
            console.error('Abstract submission error:', err);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="abstract-page">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title">Abstract Submission</h1>
                        <p className="page-breadcrumb">Home / Abstract Submission</p>
                    </div>
                </div>
                <div className="container section-padding text-center">
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', background: '#f0fdf4', borderRadius: '1rem', border: '1px solid #bbf7d0' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h2 style={{ color: '#15803d', marginBottom: '1rem' }}>Abstract Submitted Successfully!</h2>
                        <p style={{ color: '#166534' }}>Thank you for your submission. We will review your abstract and respond via email within 5–7 business days.</p>
                        <Button style={{ marginTop: '2rem' }} onClick={() => window.location.href = '/'}>Back to Home</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="abstract-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Abstract Submission</h1>
                    <p className="page-breadcrumb">Home / Abstract Submission</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="abstract-layout">

                    {/* Left: Form */}
                    <div className="abstract-col-left">
                        <h2 className="abstract-title">Abstract Submission</h2>
                        <p className="abstract-intro">
                            You are invited to submit abstract. Kindly fill the below form to submit an abstract of your research.{' '}
                            <a href="#" className="template-link">Download the Abstract Template</a>
                        </p>

                        <form className="submission-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <select name="title" value={formData.title} onChange={handleChange} className="form-control">
                                        <option value="" disabled>- Select Title -</option>
                                        {['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', 'PhD'].map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter Organization" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <select name="country" value={formData.country} onChange={handleChange} className="form-control">
                                        <option value="" disabled>- Please choose a country -</option>
                                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <select name="interest" value={formData.interest} onChange={handleChange} className="form-control">
                                        <option value="" disabled>- Interested In -</option>
                                        <option value="oral">Oral Presentation</option>
                                        <option value="poster">Poster Presentation</option>
                                        <option value="workshop">Workshop</option>
                                        <option value="Student">Student</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select name="topic" value={formData.topic} onChange={handleChange} className="form-control">
                                        <option value="" disabled>- Select Topic of Discussion -</option>
                                        {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Full Postal Address..." rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group full-width">
                                <div className="file-upload-container">
                                    <input type="file" name="file" className="form-control-file" accept=".doc,.docx,.pdf,.zip" onChange={(e) => setFile(e.target.files[0])} />
                                    <p className="file-upload-note">Note: (.doc), (.docx), (.pdf) and (.zip) files only.</p>
                                </div>
                            </div>
                            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                            <div className="form-actions">
                                <Button type="submit" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Submit Abstract'}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Important Dates */}
                    <div className="abstract-col-right">
                        <h3 className="dates-header-title">Important Dates</h3>
                        <div className="dates-list-vertical">
                            {IMPORTANT_DATES.map((item, i) => (
                                <div className="date-card-item" key={i}>
                                    <div className="date-icon-circle"><CalendarDays size={20} /></div>
                                    <div className="date-content">
                                        <h4>{item.label}</h4>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbstractSubmission;
