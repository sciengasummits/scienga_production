import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import MissionVisionSection from '../components/home/MissionVisionSection'
import MeetingsSection from '../components/home/MeetingsSection'
import Sponsors from '../components/home/Sponsors'
import StatisticsSection from '../components/home/StatisticsSection'
import LocationMapSection from '../components/home/LocationMapSection'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <MeetingsSection />
      <StatisticsSection />
      <Sponsors />
      <LocationMapSection />
    </div>
  )
}
