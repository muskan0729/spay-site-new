import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from '../components/OneClickCheckout/Section1'

const OneClick = () => {
  return (
    <div>
      <Helmet>
        <title>Spay | Secure Payment Gateway for Businesses.</title>
        <link rel="canonical" href="https://spay.live/one-click-checkout" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Spay offers one click checkout for faster payments. Reduce drop-offs and boost conversions with a secure and seamless payment experience."
        />
      </Helmet>
      <Section1 />
    </div>
  )
}

export default OneClick
