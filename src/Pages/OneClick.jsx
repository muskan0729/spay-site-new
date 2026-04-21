import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../components/OneClickCheckout/herosection.jsx'
import Section2 from '../components/OneClickCheckout/Section2.jsx'
import Section3 from '../components/OneClickCheckout/Section3.jsx'
import Section4 from '../components/OneClickCheckout/Section4.jsx'
import Section5 from '../components/OneClickCheckout/Section5.jsx'
import Faq from '../components/OneClickCheckout/Faq.jsx'



const OneClick = () => {
  return (
    <div>
      <Helmet>
        <title>Spay Fintech |One Click Checkout Payment Gateway in Mumbai </title>
        <link rel="canonical" href="https://spay.live/one-click-checkout" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="The quickest one-click checkout payment gateway in Mumbai is provided by Spay Fintech.Trusted by 1,000+ merchants in Mumbai, Andheri & across India."
        />
      </Helmet>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Faq />

      
    </div>
  )
}

export default OneClick
