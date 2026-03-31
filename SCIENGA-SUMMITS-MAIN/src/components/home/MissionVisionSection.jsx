import React from 'react'

export default function MissionVisionSection() {
    const primaryColor = 'var(--primary)';
    const secondaryColor = '#4338ca'; // Indigo
    const darkColor = '#0f172a';
    const lightText = '#475569';

    return (
        <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    alignItems: 'stretch'
                }}>

                    {/* Mission Card */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '3rem',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            e.currentTarget.style.borderColor = primaryColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                    >
                        {/* Icon/Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'rgba(30, 64, 175, 0.05)',
                            borderRadius: '50%'
                        }}></div>

                        <h3 style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: darkColor,
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: primaryColor }}>Our</span> Mission
                        </h3>

                        <p style={{
                            fontSize: '1rem',
                            color: lightText,
                            lineHeight: '1.8',
                            marginBottom: 0
                        }}>
                            To create a premier international platform that bridges the gap between scientific research and practical application. We aim to foster global collaboration, accelerate innovation, and drive sustainable solutions through high-impact academic discourse and knowledge exchange.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '3rem',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            e.currentTarget.style.borderColor = primaryColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                    >
                        {/* Icon/Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'rgba(30, 64, 175, 0.05)',
                            borderRadius: '50%'
                        }}></div>

                        <h3 style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: darkColor,
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: primaryColor }}>Our</span> Vision
                        </h3>

                        <p style={{
                            fontSize: '1rem',
                            color: lightText,
                            lineHeight: '1.8',
                            marginBottom: 0
                        }}>
                            To become the world's leading catalyst for transformative scientific progress, envisioning a future where interdisciplinary research and global partnerships solve humanity's most pressing challenges, paving the way for a sustainable and innovative tomorrow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
