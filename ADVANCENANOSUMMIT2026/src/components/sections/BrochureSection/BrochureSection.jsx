import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './BrochureSection.css';

const BrochureSection = () => {
    const navigate = useNavigate();
    const handleDownload = () => {
        navigate('/brochure');
    };

    return (
        <section className="brochure-section section-padding" id="brochure">
            <div className="container brochure__container">
                <div className="brochure__content">
                    <h2 className="section-title">Conference Brochure</h2>
                    <div className="brochure__description">
                        Download the official conference brochure to get detailed information about:
                        <ul>
                            <li>Comprehensive Tentative Program</li>
                            <li>Speaker Profiles & Keynotes</li>
                            <li>Workshop Details</li>
                            <li>Sponsorship Opportunities</li>
                            <li>Registration Packages</li>
                        </ul>
                    </div>
                    <div className="brochure__cta">
                        <Button onClick={handleDownload} size="large">
                            Download Brochure (PDF)
                        </Button>
                    </div>
                </div>
                <div className="brochure__preview">
                    {/* Placeholder for brochure preview image */}
                    <div className="preview-card">
                        <div className="preview-page">
                            <h3>ADVANCED MATERIALS & NANOTECHNOLOGY</h3>
                            <p>2026</p>
                            <div className="preview-lines"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrochureSection;
