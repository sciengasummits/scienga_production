import React, { useState, useEffect } from 'react';
import Button from '../../components/common/Button/Button';
import * as siteApi from '../../api/siteApi';
import './VisaInfo.css';

/* ── Default fallback content ── */
const DEFAULTS = {
    pageTitle: 'Visa Information',
    intro: 'The Cybersecurity & Quantum Computing Summit welcomes speakers & delegates from all over the world. Below is essential visa-related information to assist with your travel planning to Singapore.',
    sections: [
        {
            id: 'visa_need',
            title: '1. Do You Need a Visa?',
            points: [
                'Check if you require a visa to enter Singapore using the Immigration & Checkpoints Authority (ICA) website or your local Singapore Embassy.',
                'Nationals of many countries (including USA, UK, Canada, Australia, Japan, and most EU countries) may enter Singapore for short-term visits (up to 30 or 90 days) without applying for a visa in advance.',
                'All visitors must complete the SG Arrival Card (SGAC) with Electronic Health Declaration within 3 days prior to arrival.',
            ],
        },
        {
            id: 'visa_types',
            title: '2. Visa Types',
            points: [
                'Short-Term Visit Pass: This is granted upon arrival for social visits, tourism, or attending short seminars/conferences.',
                'Entry Visa: For nationals of assessment level I and II countries, an entry visa is required before travel. Check the ICA website for the list of countries.',
            ],
        },
        {
            id: 'visa_docs',
            title: '3. Required Documents',
            points: [
                'Valid passport (minimum 6 months validity from your planned date of arrival).',
                'Proof of onward travel (confirmed return flight ticket).',
                'Proof of accommodation (hotel booking confirmation).',
                'Proof of sufficient financial means for the duration of stay.',
                'Letter of Invitation (provided by the Summit Committee upon registration).',
            ],
        },
        {
            id: 'visa_invite',
            title: '4. Invitation Letter',
            points: [
                'Registered participants can request an official invitation letter to support their visa application. This letter confirms your registration and participation in the congress.',
            ],
        },
    ],
    contactEmail: 'contact@cyberquantumsummit.com',
    note: 'Please ensure you apply for your visa well in advance of the conference date. We recommend applying at least 8 weeks before your intended travel date.',
};

const VisaInfo = () => {
    const [visaData, setVisaData] = useState(DEFAULTS);
    const [email, setEmail] = useState('');
    const [submitMsg, setSubmitMsg] = useState(null);

    useEffect(() => {
        siteApi.fetchContent('visa-info')
            .then(data => { if (data && !data.error) setVisaData(prev => ({ ...prev, ...data })); })
            .catch(e => console.warn('[VisaInfo] Could not load content:', e.message));
    }, []);

    const handleInviteRequest = async (e) => {
        e.preventDefault();
        setSubmitMsg('Sending...');
        try {
            await siteApi.submitRegistration({
                name: 'Invitation Letter Request',
                email,
                registrationCategory: 'Invitation Letter Request',
                status: 'Invitation Request',
                description: `Invitation letter requested for visa application by ${email}`,
            });
            setSubmitMsg('success');
            setEmail('');
        } catch (err) {
            console.error(err);
            setSubmitMsg('error');
        }
        setTimeout(() => setSubmitMsg(null), 5000);
    };

    return (
        <div className="visa-page">
            <header className="page-header">
                <div className="container text-center">
                    <h1 className="page-title">{visaData.pageTitle}</h1>
                    <div className="page-breadcrumb">Home / Visa Info</div>
                </div>
            </header>

            <section className="section-padding visa-text-section">
                <div className="container">
                    <div className="visa-content-wrapper">
                        <h2 className="visa-main-title">VISA INFORMATION FOR INTERNATIONAL PARTICIPANTS</h2>

                        {visaData.intro && (
                            <p className="visa-intro-text">{visaData.intro}</p>
                        )}

                        {(visaData.sections || []).map((section, idx) => (
                            <div className="visa-info-block" key={section.id || idx}>
                                <h3 className="visa-block-title">{section.title}</h3>
                                {section.points && section.points.length > 0 && (
                                    <ul className="visa-list">
                                        {section.points.map((point, pIdx) => (
                                            <li key={pIdx}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {/* Invitation Letter Request Form */}
                        <div className="visa-info-block">
                            <div className="simple-invite-form">
                                <p><strong>Request your Invitation Letter:</strong></p>
                                <form onSubmit={handleInviteRequest} className="text-invite-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your registered email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Button type="submit" className="btn-send-request">Send Request</Button>
                                </form>
                                {submitMsg === 'success' && (
                                    <p style={{ color: '#16a34a', marginTop: '8px', fontWeight: 600 }}>
                                        ✅ Your invitation letter request has been submitted successfully!
                                    </p>
                                )}
                                {submitMsg === 'error' && (
                                    <p style={{ color: '#dc2626', marginTop: '8px', fontWeight: 600 }}>
                                        ❌ Something went wrong. Please try again or email us directly.
                                    </p>
                                )}
                            </div>
                        </div>

                        {visaData.note && (
                            <div className="visa-info-block" style={{ background: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '16px', borderRadius: '8px' }}>
                                <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>
                                    <strong>⚠️ Note:</strong> {visaData.note}
                                </p>
                            </div>
                        )}

                        {visaData.contactEmail && (
                            <div className="visa-info-block">
                                <p>For visa support or queries, contact us at: <a href={`mailto:${visaData.contactEmail}`} style={{ color: '#6366f1', fontWeight: 600 }}>{visaData.contactEmail}</a></p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaInfo;
