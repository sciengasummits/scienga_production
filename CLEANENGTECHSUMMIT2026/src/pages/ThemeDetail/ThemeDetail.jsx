import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stethoscope, Heart, Brain, Activity, Microscope, Globe, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const themesData = {
    'solar-energy': {
        title: 'Solar Energy',
        icon: <Stethoscope size={48} />, // Placeholder icon
        description: 'Innovations in solar photovoltaic technologies, thermal systems, and large-scale solar integration.',
        topics: [
            'Photovoltaic Materials', 'Solar Thermal Energy', 'Grid Integration', 'Floating Solar', 'Solar Policy & Economics'
        ]
    },
    'wind-energy': {
        title: 'Wind Energy',
        icon: <Heart size={48} />, // Placeholder icon
        description: 'Latest advancements in onshore and offshore wind power, turbine technology, and wind farm management.',
        topics: [
            'Offshore Wind Farms', 'Turbine Design', 'Wind Resource Assessment', 'Environmental Impact', 'Maintenance Strategies'
        ]
    },
    'bioenergy': {
        title: 'Bioenergy',
        icon: <Brain size={48} />, // Placeholder icon
        description: 'Exploring the potential of biomass, biofuels, and biogas as sustainable alternatives to fossil fuels.',
        topics: [
            'Biofuel Production', 'Biomass Conversion', 'Waste-to-Energy', 'Algal Biofuels', 'Biogas Technologies'
        ]
    },
    'sustainability': {
        title: 'Sustainability',
        icon: <Globe size={48} />,
        description: 'Global strategies for sustainable development, climate action, and environmental protection.',
        topics: [
            'Circular Economy', 'Climate Policy', 'Sustainable Urban Planning', 'Green Building', 'Carbon Footprint Reduction'
        ]
    },
    'energy-storage': {
        title: 'Energy Storage',
        icon: <Activity size={48} />,
        description: 'Critical technologies for storing renewable energy, including batteries, pumped hydro, and hydrogen storage.',
        topics: [
            'Lithium-Ion Batteries', 'Flow Batteries', 'Hydrogen Storage', 'Grid-Scale Storage', 'Thermal Storage'
        ]
    },
    'green-tech': {
        title: 'Green Tech',
        icon: <Microscope size={48} />,
        description: 'Emerging technologies that promote environmental sustainability and reduce ecological impact.',
        topics: [
            'Carbon Capture', 'Smart Grids', 'Electric Vehicles', 'Sustainable Materials', 'IoT in Energy'
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
