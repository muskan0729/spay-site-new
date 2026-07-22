import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from '../components/PaymentGateway/Section1'
import Section2 from '../components/PaymentGateway/Section2'
// import Section3 from '../components/PaymentGateway/Section3'
// import Section5 from '../components/PaymentGateway/Section5'
import Section6 from '../components/PaymentGateway/section6'
// import Section7 from '../components/PaymentGateway/section7'
import Section8 from '../components/PaymentGateway/Section8'
import Section9 from '../components/PaymentGateway/Section9'
import Faq from '../components/PaymentGateway/Faq'

const PaymentGateway = () => {
  return (
    <div>
      <Helmet>
        <title>Spay | Best Payment Gateway in India |Fast Setup & Zero Fees</title>
        <link rel="canonical" href="https://spay.live/payment-gateway" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Looking for a trusted payment gateway provider in Mumbai? Spay offers secure payment gateway integration, instant settlements, fraud protection & 99.9% uptime."
        />
      </Helmet>
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      {/* <Section5 /> */}
       <Section8 />
      <Section6 />
      {/* <Section7 /> */}
      <Section9 />
      <Faq />
    </div>
  )
}

export default PaymentGateway
