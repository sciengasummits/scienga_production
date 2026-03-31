import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        marginBottom: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid #f1f5f9'
    };

    const headingStyle = {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#0f172a', // Slate 900
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    const paragraphStyle = {
        color: '#475569', // Slate 600
        lineHeight: '1.7',
        marginBottom: '1rem',
        fontSize: '1rem'
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '1.5rem',
        color: '#475569',
        lineHeight: '1.7',
        marginBottom: '1rem'
    };

    const accentBar = {
        width: '4px',
        height: '24px',
        backgroundColor: 'var(--primary)',
        borderRadius: '2px',
        display: 'inline-block'
    };

    return (
        <>
            <Navbar />
            <PageHeader
                title="Privacy Policy"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Privacy Policy', link: null }
                ]}
            />

            <div style={{ backgroundColor: '#f8fafc', padding: '5rem 0' }}>
                <div className="container" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    borderRadius: '20px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                    border: '1px solid #e2e8f0'
                }}>

                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            backgroundColor: 'rgba(30, 64, 175, 0.1)',
                            color: 'var(--primary)',
                            padding: '6px 16px',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#0f172a',
                            lineHeight: '1.2'
                        }}>
                            Global Privacy Policy
                        </h2>
                    </div>

                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            Scienga Summits and its affiliates (collectively “Scienga Summits”, “we” and “us”) respect your privacy. We offer services that enable a platform for sharing ideas and networking among professionals such as Scholars, Students, Business Investigators and others.
                        </p>
                        <p style={paragraphStyle}>
                            This Global Privacy Policy describes the types of Personal Data we collect through our services and via our online presence, which include our main website at sciengasummits.org, as well as services that we enable internet users to access, such as our conferences Scienga Summits. This policy also describes how we use Personal Data, with whom we share it, your rights and choices, and how you can contact us about our privacy practices.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Personal Data we collect
                        </h3>
                        <p style={paragraphStyle}>Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data. In particular:</p>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}>When you express interest in our services, we retain your Full Name, E-mail, Phone Number, Address, Photograph and Biography.</li>
                            <li style={{ marginBottom: '0.5rem' }}>When you contact our support team, we collect contact details and your message.</li>
                            <li style={{ marginBottom: '0.5rem' }}>When you submit research papers, we collect authorship details and the manuscript.</li>
                            <li style={{ marginBottom: '0.5rem' }}>When you register, we collect billing details (exclude credit card numbers, which are processed securely by payment gateways).</li>
                            <li style={{ marginBottom: '0.5rem' }}>When you subscribe to newsletters, we collect your name and email.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            How we use Personal Data
                        </h3>
                        <p style={paragraphStyle}>
                            We may send you email marketing communications about our services, invite you to participate in our events or surveys, or otherwise communicate with you for marketing purposes, provided that we do so in accordance with applicable law.
                        </p>
                        <p style={paragraphStyle}>
                            When you visit our Sites, we and third parties collect information about your online activities to provide you with advertising about products and services tailored to your interests.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            How we disclose Personal Data
                        </h3>
                        <p style={paragraphStyle}>Scienga Summits does not sell personal data to marketers. We share your personal data with trusted entities, as outlined below:</p>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Internal:</strong> We share Data with other Scienga entities for administration.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Service Providers:</strong> Hotels, Banks, Logistics, and IT support who act on our behalf.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Legal:</strong> We share Data as necessary to comply with applicable laws or valid legal processes.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Your Rights and Choices
                        </h3>
                        <p style={paragraphStyle}>You have choices regarding our use and disclosure of your Personal Data:</p>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}>Opt-out of marketing emails via the unsubscribe link.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Review, correct, or update your Personal Data by contacting us.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Request deletion or restriction of your data where applicable by law.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: 0 }}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Data Security
                        </h3>
                        <p style={paragraphStyle}>
                            We make reasonable efforts to ensure a level of security appropriate to the risk associated with the processing of Personal Data. We maintain organizational, technical and administrative measures designed to protect Personal Data within our organization against unauthorized access, destruction, loss, alteration or misuse.
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    )
}
