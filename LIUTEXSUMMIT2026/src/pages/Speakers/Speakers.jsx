import React from 'react';
import usePageSEO from '../../hooks/usePageSEO';
import SpeakersSection from '../../components/sections/SpeakersSection/SpeakersSection';

const Speakers = () => {
    usePageSEO({
        pageKey: 'speakers',
        title: 'Speakers',
        description: 'Meet the world-class keynote speakers and invited experts at LIUTEX2026 – INTERNATIONAL CONFERENCE ON LIUTEX THEORY AND TURBULENCE MECHANISM, Singapore, December 2026.',
        canonical: 'https://liutex2026.com/speakers',
    });
    return (
        <div className="pt-5">
            <div className="page-header" style={{ marginTop: '0' }}>
                <div className="container">
                    <h1 className="page-title">Speakers</h1>
                    <p className="page-breadcrumb">Home / Speakers</p>
                </div>
            </div>
            <SpeakersSection />
        </div>
    );
};

export default Speakers;
