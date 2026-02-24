import React, { useState } from 'react';
import './Unsubscribe.css';

const Unsubscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle unsubscribe logic here
        console.log('Unsubscribing email:', email);
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <div className="unsubscribe-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Unsubscribe</h1>
                    <p className="page-breadcrumb">Home / Unsubscribe</p>
                </div>
            </div>

            <section className="unsubscribe-content section-padding">
                <div className="container">
                    <div className="unsubscribe-card">
                        <h2 className="unsubscribe-title">Mailing List Unsubscribe</h2>
                        
                        {!isSubmitted ? (
                            <>
                                <p className="unsubscribe-description">
                                    We are sorry to see you go. Please enter your email address below to unsubscribe from our mailing list.
                                </p>

                                <form onSubmit={handleSubmit} className="unsubscribe-form">
                                    <input
                                        type="email"
                                        className="unsubscribe-input"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="unsubscribe-button">
                                        UNSUBSCRIBE
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="unsubscribe-success">
                                <p>You have been successfully unsubscribed from our mailing list.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unsubscribe;
