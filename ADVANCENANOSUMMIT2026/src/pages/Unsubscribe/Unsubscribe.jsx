import React, { useState } from 'react';
import './Unsubscribe.css';

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage('You have been successfully unsubscribed from our mailing list.');
            setEmail('');
        }
    };

    return (
        <div className="unsubscribe-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Unsubscribe</h1>
                    <p className="page-breadcrumb">Home / Unsubscribe</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="unsubscribe-container">
                    <div className="unsubscribe-card">
                        <h2 className="unsubscribe-title">Mailing List Unsubscribe</h2>
                        <p className="unsubscribe-desc">
                            We are sorry to see you go. Please enter your email address below to unsubscribe from our mailing list.
                        </p>

                        <form onSubmit={handleSubmit} className="unsubscribe-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="unsubscribe-input"
                            />
                            <button type="submit" className="unsubscribe-btn">
                                UNSUBSCRIBE
                            </button>
                        </form>

                        {message && (
                            <div className="unsubscribe-message">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unsubscribe;
