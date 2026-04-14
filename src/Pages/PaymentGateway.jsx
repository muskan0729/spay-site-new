import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from '../components/PaymentGateway/Section1'
import Section2 from '../components/PaymentGateway/Section2'
import Section3 from '../components/PaymentGateway/Section3'
import Section4 from '../components/PaymentGateway/Section4'

const PaymentGateway = () => {
  return (
    <div>
      <Helmet>
        <title>Spay | Secure Payment Gateway for Businesses.</title>
        <link rel="canonical" href="https://spay.live/payment-gateway" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Secure and fast payment gateway for businesses. Accept UPI, cards, and online payments with easy integration and reliable processing."
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default PaymentGateway
