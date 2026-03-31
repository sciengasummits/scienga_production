import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Microscope, Atom, Cpu, Zap, Layers, Dna, Activity, FlaskConical, Globe, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const themesData = {
    'nanomaterials': {
        title: 'Nanomaterials Synthesis & Characterization',
        icon: <Microscope size={48} />,
        description: 'Advanced methods for synthesizing and analyzing materials at the nanoscale, exploring their unique physical and chemical properties.',
        topics: [
            'Chemical Vapor Deposition (CVD)', 'Sol-Gel Synthesis', 'Atomic Force Microscopy (AFM)', 'Transmission Electron Microscopy (TEM)', 'Nanoparticle Functionalization'
        ]
    },
    'energy-materials': {
        title: 'Advanced Energy Storage Materials',
        icon: <Zap size={48} />,
        description: 'Innovations in materials for high-capacity batteries, supercapacitors, and next-generation energy conversion systems.',
        topics: [
            'Lithium-Ion & Solid-State Batteries', 'Hydrogen Storage Technologies', 'Photovoltaic Materials', 'Piezoelectric Energy Harvesting', 'Thermal Interface Materials'
        ]
    },
    'carbon-nanostructures': {
        title: 'Carbon Nanostructures & Graphene',
        icon: <Atom size={48} />,
        description: 'Exploring the revolutionary properties of graphene, carbon nanotubes, and other carbon allotropes in various industries.',
        topics: [
            'Graphene Electronics', 'Carbon Nanotube Composites', 'Fullerene Derivatives', '2D Materials Beyond Graphene', 'Carbon-based Supercapacitors'
        ]
    },
    'nanoelectronics': {
        title: 'Nanoelectronics & Nanosensors',
        icon: <Cpu size={48} />,
        description: 'Development of nanoscale electronic components, quantum computing materials, and ultra-sensitive molecular sensors.',
        topics: [
            'Nano-FETs and Memristors', 'Quantum Dot Displays', 'Molecular Electronics', 'Nanosensors for Healthcare', 'Flexible & Stretchable Electronics'
        ]
    },
    'polymers': {
        title: 'Polymers & Nanocomposites',
        icon: <Layers size={48} />,
        description: 'Designing polymer-based nanomaterials with enhanced mechanical, thermal, and barrier properties for industrial applications.',
        topics: [
            'Polymer Matrix Nanocomposites', 'Smart Polymer Coatings', 'Self-healing Materials', 'Biodegradable Nanopolymers', 'Reinforced Engineering Plastics'
        ]
    },
    'biomaterials': {
        title: 'Biomaterials & Tissue Engineering',
        icon: <Dna size={48} />,
        description: 'Integrating nanotechnology with biology to create biocompatible materials for regenerative medicine and medical devices.',
        topics: [
            'Scaffolds for Tissue Regeneration', 'Nanotechnology in Drug Delivery', 'Bio-inspired Nanostructures', 'Orthopedic Implant Materials', 'Biocompatibility Testing'
        ]
    }
};

const ThemeDetail = () => {
    const { themeId } = useParams();
    const theme = themesData[themeId];

    if (!theme) {
        return (
            <div className="section-padding text-center">
                <h2>Theme Not Found</h2>
                <Link to="/">
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
                        <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>Home</Link> / Key Themes / {theme.title}
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <Link to="/" className="mb-4 d-inline-block" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '2rem' }}>
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
                        <Link to="/abstract-submission">
                            <Button>Submit Abstract for {theme.title}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeDetail;
