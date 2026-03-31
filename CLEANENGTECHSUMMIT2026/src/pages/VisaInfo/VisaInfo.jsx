import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import './VisaInfo.css';

const VisaInfo = () => {
    const [email, setEmail] = useState('');

    const handleInviteRequest = (e) => {
        e.preventDefault();
        alert(`Request sent for ${email}`);
        setEmail('');
    };

    return (
        <div className="visa-page">
            <header className="page-header">
                <div className="container text-center">
                    <h1 className="page-title">Visa Information</h1>
                    <div className="page-breadcrumb">Home / Visa Info</div>
                </div>
            </header>

            <section className="section-padding visa-text-section">
                <div className="container">
                    <div className="visa-content-wrapper">
                        <h2 className="visa-main-title">VISA INFORMATION FOR INTERNATIONAL PARTICIPANTS</h2>

                        <p className="visa-intro-text">
                            The <strong>Global Summit on Clean Energy and Sustainable Technologies</strong> welcomes speakers & delegates from all over the world.
                            Below is essential visa-related information to assist with your travel planning to Germany:
                        </p>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">1. Do You Need a Visa?</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Check if you require a visa to enter Germany</strong> using the Federal Foreign Office website or your local German Embassy.
                                </li>
                                <li>
                                    Nationals of many countries (including <strong>USA, UK, Canada, Australia, Japan, and most EU countries</strong>) may enter Germany as tourists or for business purposes (up to 90 days within a 180-day period) without a visa.
                                </li>
                                <li>
                                    All visitors must have valid health insurance coverage for the duration of their stay within the Schengen area.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">2. Visa Types</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Schengen Visa (Type C):</strong> For short stays (up to 90 days) for tourism, business, or visiting family/friends within the Schengen area. This applies to citizens of countries that require a visa.
                                </li>
                                <li>
                                    <strong>National Visa (Type D):</strong> Required for stays longer than 90 days (e.g., for work or study). Attendees usually require a Type C Schengen Visa.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">3. Required Documents</h3>
                            <ul className="visa-list">
                                <li>Valid passport (minimum 6 months validity from your planned date of arrival).</li>
                                <li>Proof of onward travel (confirmed return flight ticket).</li>
                                <li>Proof of accommodation (hotel booking confirmation).</li>
                                <li>Proof of sufficient financial means for the duration of stay.</li>
                                <li>Letter of Invitation (provided by the Summit Committee upon registration).</li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">4. Invitation Letter</h3>
                            <ul className="visa-list">
                                <li>
                                    Registered participants can request an official invitation letter to support their visa application.
                                    This letter confirms your registration and participation in the congress.
                                </li>
                            </ul>

                            {/* Simple Form embedded in the text flow or separated */}
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
                                    <Button type="submit" variant="primary" className="btn-sm">Send Request</Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaInfo;
