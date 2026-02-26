import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import UniversitiesMarquee from '../../components/sections/UniversitiesMarquee/UniversitiesMarquee';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';
import SpeakersSection from '../../components/sections/SpeakersSection/SpeakersSection';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import SponsorsSection from '../../components/sections/SponsorsSection/SponsorsSection';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import PricingSection from '../../components/sections/PricingSection/PricingSection';
import './Home.css';

import ActionButtonsBar from '../../components/sections/ActionButtonsBar/ActionButtonsBar';
import cpdImage from '../../assets/images/cpd.jpg';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <ActionButtonsBar />

            <div className="home-content-wrapper">
                <UniversitiesMarquee />
                <img src={cpdImage} alt="CPD Certified" className="pinned-cpd-badge" />

                <AboutSection />
                <StatsSection />
                <SpeakersSection showViewAll={true} />
                <PricingSection />
                <KeyThemesSection showLearnMore={true} />
                <VenueSection />
                <SponsorsSection />
            </div>
        </div>
    );
};

export default Home;
