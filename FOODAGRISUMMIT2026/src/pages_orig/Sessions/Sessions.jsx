'use client';
import React from 'react';

import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';
import usePageSEO from '../../hooks/usePageSEO';

const Sessions = () => {
    usePageSEO({
        title: 'Sessions & Key Themes',
        description: 'Explore FOODAGRISUMMIT2026 technical sessions covering Sustainable Crop Production, Precision Agriculture, Food Security, and Agri-Tech Innovation.',
        canonical: 'https://foodagrisummit.com/sessions',
    });
    return (
        <div className="pt-5">
            <div className="page-header" style={{ marginTop: '0' }}>
                <div className="container">
                    <h1 className="page-title">Sessions</h1>

                </div>
            </div>
            <KeyThemesSection />

            <div className="container section-padding">
                <h3>Call for Papers</h3>
                <p>
                    We invite researchers, clinicians, and academicians to submit their abstracts on the above themes.
                    Accepted abstracts will be published in the conference proceedings.
                </p>
            </div>
        </div>
    );
};

export default Sessions;

