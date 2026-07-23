import React from 'react'
import AboutSection from '../components/home/AboutSection'
import SEO from '../components/common/SEO'

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Scienga Global Summits",
  "description": "SCIENGA SUMMITS is a global scientific conference organizer dedicated to advancing research, innovation, and academic excellence through high-quality international conferences, symposiums, and workshops. We provide a distinguished platform for researchers, academicians, industry professionals, business entrepreneurs and policymakers to present pioneering research, exchange knowledge, and establish meaningful collaborations. Our conferences foster interdisciplinary dialogue, promote scientific discovery, and facilitate global partnerships that accelerate research and address emerging scientific and societal challenges.",
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
        description="SCIENGA SUMMITS is a global scientific conference organizer dedicated to advancing research, innovation, and academic excellence through high-quality international events."
        keywords={aboutKeywords}
        schema={aboutSchema}
      />
      <AboutSection />
    </div>
  )
}

