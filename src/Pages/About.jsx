import React from 'react'
import { Helmet } from "react-helmet";
import AboutSection1 from '../components/About/AboutSection1'
import AboutSection2 from '../components/About/AboutSection2'
import AboutSection3 from '../components/About/AboutSection3'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Spay | Secure Payment Gateway for Businesses.</title>
        <link rel="canonical" href="https://spay.live/about-us" />
        <meta
          name="description"
          content="Spay Fintech Pvt Ltd offers a secure online payment gateway in India with UPI, cards, fast processing, and easy API integration for businesses"
        />
      </Helmet>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
    </div>
  )
}

export default About
