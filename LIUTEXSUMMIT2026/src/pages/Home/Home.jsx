import React from 'react';
import usePageSEO from '../../hooks/usePageSEO';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';
import SpeakersSection from '../../components/sections/SpeakersSection/SpeakersSection';
import PricingSection from '../../components/sections/PricingSection/PricingSection';
import SponsorsSection from '../../components/sections/SponsorsSection/SponsorsSection';
import PreviousConferenceSection from '../../components/sections/PreviousConferenceSection/PreviousConferenceSection';
import UniversitiesMarquee from '../../components/sections/UniversitiesMarquee/UniversitiesMarquee';
import './Home.css';

const Home = () => {
    usePageSEO({
        title: 'Home',
        description: 'LIUTEX2026 – International Conference on Liutex Theory and Applications in Vortex Identification and Vortex Dynamics. December 14–16, 2026, Outram, Singapore. Submit abstracts and register now.',
        canonical: 'https://liutex2026.com/',
    });
    return (
        <div className="home-page">
            <HeroSection />
            <UniversitiesMarquee />
            <AboutSection />
            <StatsSection />
            <SpeakersSection showViewAll={true} />
            <PricingSection />
            <KeyThemesSection showLearnMore={true} />
            <PreviousConferenceSection />
            <SponsorsSection />
        </div>
    );
};

export default Home;
