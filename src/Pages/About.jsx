import React from 'react'
import { Helmet } from "react-helmet";
import AboutSection1 from '../components/About/AboutSection1'
import AboutSection2 from '../components/About/AboutSection2'
import AboutSection3 from '../components/About/AboutSection3'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Who We Are| Spay - India's Trusted Fintech & Payment Gateway</title>
        <link rel="canonical" href="https://spay.live/about-us" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Founded in Mumbai, Spay Fintech is a secure payment gateway & API banking provider trusted by businesses. Compliant, scalable & built for India's digital economy."
        />
      </Helmet>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      
    </div>
  )
}

export default About
