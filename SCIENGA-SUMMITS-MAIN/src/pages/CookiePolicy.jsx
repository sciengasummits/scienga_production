import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function CookiePolicy() {

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
        color: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    const paragraphStyle = {
        color: '#475569',
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
                title="Cookie Policy"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Cookie Policy', link: null }
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
                            Effective Date: June 1, 2026 · Last Updated: June 1, 2026
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#0f172a',
                            lineHeight: '1.2'
                        }}>
                            Cookie Policy
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '1rem' }}>
                            This policy explains how we use cookies and similar technologies on our website.
                        </p>
                    </div>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            What Are Cookies
                        </h3>
                        <p style={paragraphStyle}>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, provide a better browsing experience, and supply information to the website operators.
                        </p>
                        <p style={paragraphStyle}>
                            Cookies allow a website to recognise your device and remember certain information about your visits, such as your preferences, login status, and browsing behaviour.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Types of Cookies We Use
                        </h3>
                        <p style={paragraphStyle}>Our website may use the following types of cookies:</p>

                        <div style={{
                            backgroundColor: '#f0fdf4',
                            padding: '1.25rem',
                            borderRadius: '10px',
                            borderLeft: '4px solid #10b981',
                            marginBottom: '1rem'
                        }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', fontSize: '1rem' }}>Essential Cookies</p>
                            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
                                These cookies are necessary for the basic functioning of our website. They enable core features such as page navigation, form submissions, and access to secure areas. The website cannot function properly without these cookies.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: '#eff6ff',
                            padding: '1.25rem',
                            borderRadius: '10px',
                            borderLeft: '4px solid #3b82f6',
                            marginBottom: '1rem'
                        }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', fontSize: '1rem' }}>Analytics Cookies</p>
                            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website content, structure, and user experience.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: '#fefce8',
                            padding: '1.25rem',
                            borderRadius: '10px',
                            borderLeft: '4px solid #eab308',
                            marginBottom: '1rem'
                        }}>
                            <p style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', fontSize: '1rem' }}>Functional Cookies</p>
                            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
                                These cookies remember your preferences and settings (such as language or region) to provide a more personalised experience. They may also be used to remember choices you make and provide enhanced features.
                            </p>
                        </div>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            How to Manage Cookies
                        </h3>
                        <p style={paragraphStyle}>
                            Most web browsers allow you to control cookies through their settings. You can typically:
                        </p>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}>View the cookies stored on your device</li>
                            <li style={{ marginBottom: '0.5rem' }}>Delete individual cookies or all cookies</li>
                            <li style={{ marginBottom: '0.5rem' }}>Block cookies from specific or all websites</li>
                            <li style={{ marginBottom: '0.5rem' }}>Set preferences for certain types of cookies</li>
                            <li style={{ marginBottom: '0.5rem' }}>Configure your browser to notify you when a cookie is being set</li>
                        </ul>
                        <p style={paragraphStyle}>
                            Please note that disabling or blocking certain cookies may affect the functionality and performance of our website. Some features may not work as intended if cookies are disabled.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Third-Party Cookies
                        </h3>
                        <p style={paragraphStyle}>
                            In some cases, we may use third-party services that place cookies on your device. These may include:
                        </p>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Google Analytics:</strong> Used to analyse website traffic and usage patterns. Google's privacy policy can be found at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>policies.google.com/privacy</a>.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Payment Processors:</strong> Our payment partners may set cookies to facilitate secure transactions during event registration.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Social Media:</strong> If you interact with social media features on our site, those platforms may set their own cookies.</li>
                        </ul>
                        <p style={paragraphStyle}>
                            We do not control third-party cookies and recommend reviewing the privacy policies of these services for more information.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Changes to This Policy
                        </h3>
                        <p style={paragraphStyle}>
                            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section style={{ marginBottom: 0 }}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Contact Us
                        </h3>
                        <p style={paragraphStyle}>
                            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                        </p>
                        <p style={paragraphStyle}><strong>Email:</strong> contact@sciengasummits.org</p>
                        <p style={paragraphStyle}><strong>Phone:</strong> +91 7842090097</p>
                        <p style={paragraphStyle}><strong>Address:</strong> Jain Sadguru Image's Capital Park, Hyderabad, Telangana, India</p>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    )
}
