import React, { useState } from 'react';
import './Unsubscribe.css';

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <div className="unsubscribe-page">
            <div className="unsubscribe-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <span>HOME</span> / <span>UNSUBSCRIBE</span>
                    </div>
                </div>
            </div>

            <section className="unsubscribe-section section-padding">
                <div className="container">
                    <div className="unsubscribe-card">
                        {!isSubmitted ? (
                            <>
                                <h2 className="unsubscribe-title">Mailing List Unsubscribe</h2>
                                <p className="unsubscribe-description">
                                    We are sorry to see you go. Please enter your email address below to
                                    unsubscribe from our mailing list.
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
                                    <button
                                        type="submit"
                                        className="unsubscribe-btn"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'PROCESSING...' : 'UNSUBSCRIBE'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="unsubscribe-success">
                                <div className="success-icon">✓</div>
                                <h2>Successfully Unsubscribed</h2>
                                <p>
                                    You have been successfully removed from our mailing list.
                                    You will no longer receive emails from us.
                                </p>
                                <p className="success-note">
                                    If you change your mind, you can always subscribe again from our website.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unsubscribe;
