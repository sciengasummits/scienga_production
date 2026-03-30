import React, { useState, useEffect } from 'react';
import { fetchContent, resolveImageUrl } from '../../../api/siteApi';
import './UniversitiesMarquee.css';

const UniversitiesMarquee = () => {
    const [title, setTitle] = useState('Supporting Universities & Institutions');
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        fetchContent('marquee').then(data => {
            if (data && data.items && data.items.length > 0) {
                setTitle(data.title || 'Supporting Universities & Institutions');
                // items can be image URLs or plain text names
                setUniversities(data.items.map((item, i) => ({ id: i, value: item })));
            }
        }).catch(() => {});
    }, []);

    if (universities.length === 0) return null;

    const renderItem = (uni, keyPrefix) => {
        const value = uni.value || '';
        const isImage = value.startsWith('http') || value.startsWith('/') || value.startsWith('uploads');
        const resolvedUrl = isImage ? resolveImageUrl(value) : null;
        return (
            <div key={`${keyPrefix}-${uni.id}`} className="university-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
                {isImage ? (
                    <img
                        src={resolvedUrl}
                        alt="University Logo"
                        style={{ height: '110px', objectFit: 'contain', maxWidth: '220px', display: 'block' }}
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                ) : (
                    <h4 style={{ margin: 0, whiteSpace: 'nowrap', color: '#1e293b', fontSize: '1.2rem', fontWeight: 'bold' }}>{value}</h4>
                )}
            </div>
        );
    };

    const MIN_ITEMS = 8;
    const repeated = universities.length === 0 ? [] : Array.from(
        { length: Math.ceil(MIN_ITEMS / universities.length) },
        () => universities
    ).flat();

    return (
        <section className="universities-marquee">
            <div className="container" style={{ marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.25rem)',
                        fontWeight: '800',
                        color: '#1e293b',
                        marginBottom: '1rem',
                        textAlign: 'center',
                    }}>
                        Supporting Universities &amp; Institutions
                    </h2>
                    <div style={{
                        width: '60px', height: '4px',
                        background: 'var(--brand-gradient, linear-gradient(135deg, #0F172A 0%, #1E40AF 100%))',
                        margin: '0 auto', borderRadius: '2px',
                    }}></div>
                </div>
            </div>
            <div className="marquee-track">
                {/* Original Set */}
                {repeated.map(uni => renderItem(uni, 'orig'))}
                {/* Duplicate Set for Seamless Loop */}
                {repeated.map(uni => renderItem(uni, 'dup'))}
            </div>
        </section>
    );
};

export default UniversitiesMarquee;
