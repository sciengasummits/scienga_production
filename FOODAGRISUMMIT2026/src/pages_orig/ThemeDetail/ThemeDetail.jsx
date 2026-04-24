'use client';
import React from 'react';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Compass, Target, Layers, Wind, Cpu, Terminal, ArrowLeft, Leaf, Sprout, ShoppingCart, Globe, FlaskConical, Microscope } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import usePageSEO from '../../hooks/usePageSEO';

const themesData = {
    'sustainable-farming': {
        title: 'Sustainable Farming',
        icon: <Leaf size={48} />,
        description: 'Exploring eco-friendly practices and long-term sustainability in crop production.',
        topics: [
            'Organic Farming Systems', 'Regenerative Agriculture', 'Soil Health Management', 'Water Conservation', 'Biodiversity in Farming'
        ]
    },
    'precision-agri-tech': {
        title: 'Precision Agri-Tech',
        icon: <Sprout size={48} />,
        description: 'Advanced technologies for optimizing field-level management with regard to crop farming.',
        topics: [
            'AI in Crop Monitoring', 'Drones in Agriculture', 'IoT Sensor Networks', 'Automated Irrigation Systems', 'Robotics in Harvesting'
        ]
    },
    'food-security': {
        title: 'Food Security & Policy',
        icon: <Globe size={48} />,
        description: 'Addressing global challenges in food availability, access, and utilization.',
        topics: [
            'Global Supply Chain Resilience', 'Agricultural Economics', 'Food Waste Reduction', 'Policy Frameworks for Smallholders', 'Climate Change Impact'
        ]
    },
    'agri-biotechnology': {
        title: 'Agri-Biotechnology',
        icon: <FlaskConical size={48} />,
        description: 'Genetic and biological innovations to enhance crop yields and resistance.',
        topics: [
            'Genomic Selection', 'CRISPR in Crops', 'Bio-fortification', 'Pest-Resistant Varieties', 'Microbial Inoculants'
        ]
    },
    'food-tech-safety': {
        title: 'Food Tech & Safety',
        icon: <Microscope size={48} />,
        description: 'Modern methods for food processing, preservation, and quality control.',
        topics: [
            'Nutrient Retention in Processing', 'Pathogen Detection Systems', 'Packaging Innovation', 'Clean Label Trends', 'Sensory Evaluation'
        ]
    },
    'vertical-farming': {
        title: 'Vertical & Urban Farming',
        icon: <Layers size={48} />,
        description: 'Innovative urban production systems and controlled environment agriculture.',
        topics: [
            'Hydroponics & Aeroponics', 'Indoor Lighting Optimization', 'Urban Food Hubs', 'Energy-Efficient Farming', 'Year-round Production'
        ]
    }
};

const ThemeDetail = () => {
    const { themeId } = useParams();
    const theme = themesData[themeId];

    usePageSEO({
        title: theme ? `${theme.title} – Sessions` : 'Session Theme',
        description: theme
            ? `FOODAGRISUMMIT2026 session: ${theme.title}. ${theme.description} Topics include: ${(theme.topics || []).slice(0, 3).join(', ')}.`
            : 'FOODAGRISUMMIT2026 conference session on Sustainable Farming, Agri-Tech, and Food Security.',
        canonical: `https://foodagrisummit.com/sessions/${themeId || ''}`,
    });

    if (!theme) {
        return (
            <div className="section-padding text-center">
                <h2>Theme Not Found</h2>
                <Link href="/">
                    <Button variant="outline">Go Back Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="theme-detail-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{theme.title}</h1>
                    <p className="page-breadcrumb">
                        <Link href="/" style={{ color: 'white', textDecoration: 'underline' }}>Home</Link> / Key Themes / {theme.title}
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <Link href="/" className="mb-4 d-inline-block" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '2rem' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="theme-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="text-center mb-5">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--color-bg-light)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'var(--color-primary-end)'
                        }}>
                            {theme.icon}
                        </div>
                        <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--color-text-body)' }}>
                            {theme.description}
                        </p>
                    </div>

                    <div className="theme-topics">
                        <h3 className="mb-4">Key Topics & Sessions</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                            {theme.topics.map((topic, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-5 text-center">
                        <h3 className="mb-3">Interested in this track?</h3>
                        <Link href="/abstract-submission">
                            <Button>Submit Abstract for {theme.title}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeDetail;
