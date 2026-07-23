import React from 'react'
import AboutSection from '../components/home/AboutSection'
import SEO from '../components/common/SEO'

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Scienga Global Summits",
  "description": "Learn about our vision and mission to advance global science and research through international collaborative summits.",
  "publisher": {
    "@type": "Organization",
    "name": "Scienga Global Summits",
    "url": "https://sciengasummits.com/"
  }
};

const aboutKeywords = [
  "about Scienga",
  "academic networking",
  "scientific research collaboration",
  "international science summits",
  "global research publication",
  "scholarly conferences"
];

export default function About(){
  return (
    <div>
      <SEO 
        title="About Us - Leading Research & Science Conferences"
        description="Discover Scienga Global Summits' mission to unite scholars, foster interdisciplinary dialogue, and highlight groundbreaking scientific discoveries on a global stage."
        keywords={aboutKeywords}
        schema={aboutSchema}
      />
      <AboutSection />
    </div>
  )
}

