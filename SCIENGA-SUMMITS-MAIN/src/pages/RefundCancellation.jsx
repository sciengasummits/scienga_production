import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function RefundCancellation() {

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
        fontSize: '1rem',
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
                title="Refund Cancellation"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Refund Cancellation', link: null }
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
                            Important Notice
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '800',
                            color: '#0f172a',
                            lineHeight: '1.2'
                        }}>
                            Refund & Cancellation Policy
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '1rem' }}>
                            Please review our cancellation terms carefully before registration.
                        </p>
                    </div>

                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            Notice of cancellation (e.g. in case of sickness, lack of funding or any other personal reasons) must be made in writing by email to the respective conference secretary. The notification must include all relevant information regarding the bank account to which a possible refund may be remitted (incl. IBAN and BIC). The cancellation will not be effective until a written acknowledgement from the respective conference secretary is received.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Cancellation Timeline
                        </h3>
                        <p style={{ fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>Written cancellation received:</p>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { label: 'Before 60 days', value: '75% Refund', color: '#10b981' },
                                { label: '60 to 30 days prior', value: '25% Refund', color: '#f59e0b' },
                                { label: 'Within 30 days', value: 'No Refund', color: '#ef4444' }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '8px',
                                    borderLeft: `4px solid ${item.color}`
                                }}>
                                    <span style={{ fontWeight: '600', color: '#475569' }}>{item.label}</span>
                                    <span style={{ fontWeight: '700', color: item.color }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ ...paragraphStyle, marginTop: '1.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
                            * E-Poster, Video Presentations, Discounts and Special Packages are Non-refundable.
                        </p>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Refund Process
                        </h3>
                        <ul style={listStyle}>
                            <li style={{ marginBottom: '0.5rem' }}>Refunds will be made after the conference/summit concludes.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Overpayments or double payments must be claimed in writing.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Credit/Debit card payments will be refunded to the same card.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Other payments will be refunded via bank transfer (charges borne by registrant).</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Force Majeure
                        </h3>
                        <p style={paragraphStyle}>
                            No refunds will be granted for unattended summits, speaker cancellations, or incidents beyond the organizer's control.
                        </p>
                        <p style={paragraphStyle}>
                            If usage of the congress venue is prevented due to events not attributable to wrongful intent or gross negligence of the organizers, the organizers will refund 100% of the registration fee. However, the organizers cannot be held liable for damages, costs, or losses incurred, such as transportation, accommodation, etc.
                        </p>
                    </section>

                    <section style={{ marginBottom: 0 }}>
                        <h3 style={headingStyle}>
                            <span style={accentBar}></span>
                            Transfer Policy
                        </h3>
                        <p style={paragraphStyle}>
                            A fully paid registration can be transferred to other related conferences within the Organization if the participant has a valid reason for absence. Transfers must be requested via email at least one month prior to the conference. Transferred fees are non-refundable.
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    )
}
