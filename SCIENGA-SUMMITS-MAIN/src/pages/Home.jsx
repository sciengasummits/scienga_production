import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import MissionVisionSection from '../components/home/MissionVisionSection'
import MeetingsSection from '../components/home/MeetingsSection'
import Sponsors from '../components/home/Sponsors'
import StatisticsSection from '../components/home/StatisticsSection'
import LocationMapSection from '../components/home/LocationMapSection'
import SEO from '../components/common/SEO'

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sciengasummits.com/#organization",
      "name": "Scienga Global Summits",
      "description": "SCIENGA SUMMITS is a global scientific conference organizer dedicated to advancing research, innovation, and academic excellence through high-quality international conferences, symposiums, and workshops. We provide a distinguished platform for researchers, academicians, industry professionals, business entrepreneurs and policymakers to present pioneering research, exchange knowledge, and establish meaningful collaborations.",
      "url": "https://sciengasummits.com/",
      "logo": "https://sciengasummits.com/assets/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7842090097",
        "contactType": "customer service",
        "email": "contact@sciengasummits.org",
        "availableLanguage": ["en"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jain Sadguru Image's Capital Park",
        "addressLocality": "Hyderabad",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sciengasummits.com/#website",
      "url": "https://sciengasummits.com/",
      "name": "Scienga Global Summits",
      "publisher": {
        "@id": "https://sciengasummits.com/#organization"
      }
    },
    {
      "@type": "Event",
      "name": "POLYMATSUMMIT2026 (International Conference on Polymers and Composite Materials)",
      "startDate": "2026-11-16",
      "endDate": "2026-11-18",
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": [
        {
          "@type": "Place",
          "name": "Amsterdam, Netherlands",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amsterdam",
            "addressCountry": "NL"
          }
        },
        {
          "@type": "VirtualLocation",
          "url": "https://polymatsummit2027.sciengasummits.com/"
        }
      ],
      "description": "International Conference on Polymers and Composite Materials organized by Scienga Global Summits in Amsterdam, Netherlands.",
      "organizer": {
        "@id": "https://sciengasummits.com/#organization"
      }
    },
    {
      "@type": "Event",
      "name": "ADVANCENANOSUMMIT2026 (International Conference on Advanced Materials and Nanotechnology)",
      "startDate": "2026-11-16",
      "endDate": "2026-11-18",
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": [
        {
          "@type": "Place",
          "name": "Amsterdam, Netherlands",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amsterdam",
            "addressCountry": "NL"
          }
        },
        {
          "@type": "VirtualLocation",
          "url": "https://adancenanosummit2027.sciengasummits.com/"
        }
      ],
      "description": "International Conference on Advanced Materials and Nanotechnology organized by Scienga Global Summits in Amsterdam, Netherlands.",
      "organizer": {
        "@id": "https://sciengasummits.com/#organization"
      }
    },
    {
      "@type": "Event",
      "name": "IQCES2027 (International Quantum Computing & Engineering Summit)",
      "startDate": "2027-03-15",
      "endDate": "2027-03-17",
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": [
        {
          "@type": "Place",
          "name": "Munich, Germany",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Munich",
            "addressCountry": "DE"
          }
        },
        {
          "@type": "VirtualLocation",
          "url": "https://quantumengineering.sciengasummits.com/"
        }
      ],
      "description": "International Quantum Computing & Engineering Summit by Scienga Global Summits in Munich, Germany.",
      "organizer": {
        "@id": "https://sciengasummits.com/#organization"
      }
    }
  ]
};

const homeKeywords = [
  "Scienga Global Summits",
  "Scienga Summits",
  "Scienga Conferences",
  "academic conferences 2026",
  "scientific summits 2027",
  "polymer composites conference Amsterdam",
  "nanotechnology summit Netherlands",
  "optics photonics laser technology",
  "crop science engineering Singapore",
  "renewable energy climate change Munich",
  "quantum computing engineering summit Germany",
  "AI robotics machine learning Seoul",
  "obstetrics gynecology women health",
  "public health preventive medicine London",
  "cognitive social neuroscience Stockholm",
  "fluid mechanics turbomachinery Outram"
];

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
      <SEO 
        title="Upcoming Scientific & Academic Conferences"
        description="SCIENGA SUMMITS is a global scientific conference organizer dedicated to advancing research, innovation, and academic excellence through high-quality international conferences, symposiums, and workshops."
        keywords={homeKeywords}
        schema={homeSchema}
      />
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
