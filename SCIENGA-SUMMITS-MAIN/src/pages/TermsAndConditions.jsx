import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function TermsAndConditions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionStyle = {
        marginBottom: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid #f1f5f9'
    };

    const headingStyle = {
        fontSize: '1.25rem',
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
        marginBottom: '0.75rem',
        fontSize: '0.95rem'
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '1.5rem',
        color: '#475569',
        fontSize: '0.95rem',
        lineHeight: '1.7',
        marginBottom: '1rem'
    };

    const accentBar = {
        width: '4px',
        height: '20px',
        backgroundColor: 'var(--secondary)', // Use secondary specifically for terms
        borderRadius: '2px',
        display: 'inline-block'
    };

    return (
        <>
            <Navbar />
            <PageHeader
                title="Terms of Service"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Terms', link: null }
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
                            Legal Agreement
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#0f172a',
                            lineHeight: '1.2'
                        }}>
                            Terms and Conditions
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '1rem' }}>
                            Please read these terms carefully before using our services.
                        </p>
                    </div>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>1. Introduction</h3>
                        <p style={paragraphStyle}>These terms and conditions shall govern your use of our website. By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
                        <p style={paragraphStyle}>You must be at least 18 years of age to use our website.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>2. Licence to use website</h3>
                        <p style={paragraphStyle}>You may view, download for caching, and print pages from our website for your own personal and business purposes.</p>
                        <p style={paragraphStyle}>You must not:</p>
                        <ul style={listStyle}>
                            <li>Republish material from our website (including republication on another website);</li>
                            <li>Sell, rent or sub-license material from our website;</li>
                            <li>Show any material from our website in public;</li>
                            <li>Exploit material from our website for a commercial purpose; or</li>
                            <li>Redistribute material from our website.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>3. Acceptable use</h3>
                        <p style={paragraphStyle}>You must not use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website.</p>
                        <p style={paragraphStyle}>You must not use our website in any way that is unlawful, illegal, fraudulent or harmful.</p>
                        <p style={paragraphStyle}>You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>4. Your content: licence</h3>
                        <p style={paragraphStyle}>"Your content" means all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our website for storage or publication on, processing by, or transmission via, our website.</p>
                        <p style={paragraphStyle}>You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>5. Limited warranties</h3>
                        <p style={paragraphStyle}>We do not warrant or represent:</p>
                        <ul style={listStyle}>
                            <li>the completeness or accuracy of the information published on our website;</li>
                            <li>that the material on the website is up to date; or</li>
                            <li>that the website or any service on the website will remain available.</li>
                        </ul>
                        <p style={paragraphStyle}>We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>6. Breaches of these terms</h3>
                        <p style={paragraphStyle}>Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may:</p>
                        <ul style={listStyle}>
                            <li>Send you one or more formal warnings;</li>
                            <li>Temporarily suspend your access to our website;</li>
                            <li>Permanently prohibit you from accessing our website;</li>
                            <li>Block computers using your IP address from accessing our website;</li>
                            <li>Contact any or all of your internet service providers and request that they block your access to our website;</li>
                            <li>Commence legal action against you, whether for breach of contract or otherwise; and/or</li>
                            <li>Suspend or delete your account on our website.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}><span style={accentBar}></span>7. Law and Jurisdiction</h3>
                        <p style={paragraphStyle}>These terms and conditions shall be governed by and construed in accordance with Indian Law. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.</p>
                    </section>

                    <section style={{ marginBottom: 0 }}>
                        <h3 style={headingStyle}><span style={accentBar}></span>8. Company Details</h3>
                        <p style={paragraphStyle}>This website is owned and operated by Scienga Meetings.</p>
                        <p style={paragraphStyle}><strong>Registered Address:</strong> Jain Sadguru Image's Capital Park, Hyderabad, India</p>
                        <p style={paragraphStyle}><strong>Contact Email:</strong> sciengasummits@gmail.com</p>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    )
}
