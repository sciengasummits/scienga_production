import React, { useState } from 'react';
import './Unsubscribe.css';

const Unsubscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`You have been unsubscribed from our mailing list: ${email}`);
            setEmail('');
        }
    };

    return (
        <div className="unsubscribe-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">UNSUBSCRIBE</h1>
                    <p className="page-breadcrumb">HOME / UNSUBSCRIBE</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="unsubscribe-container">
                    <div className="unsubscribe-card">
                        <h1>Mailing List Unsubscribe</h1>
                        <p className="unsubscribe-description">
                            We are sorry to see you go. Please enter your email address below to 
                            unsubscribe from our mailing list.
                        </p>
                        <form className="unsubscribe-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="email-input"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-unsubscribe">
                                UNSUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unsubscribe;
