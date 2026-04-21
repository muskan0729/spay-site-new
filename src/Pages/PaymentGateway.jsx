import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from '../components/PaymentGateway/Section1'
import Section2 from '../components/PaymentGateway/Section2'
import Section3 from '../components/PaymentGateway/Section3'
import Section5 from '../components/PaymentGateway/Section5'
import Section6 from '../components/PaymentGateway/section6'
import Section7 from '../components/PaymentGateway/section7'
import Faq from '../components/PaymentGateway/Faq'

const PaymentGateway = () => {
  return (
    <div>
      <Helmet>
        <title>Spay Fintech|Best Payment Gateway Provider in Mumbai, India</title>
        <link rel="canonical" href="https://spay.live/payment-gateway" />
        <meta  name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="description"
          content="Looking for a reliable payment gateway in India? Spay Fintech, Andheri Mumbai, offers secure online payment gateway, UPI, AEPS, BBPS & instant  settlement."
        />
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Faq />
    </div>
  )
}

export default PaymentGateway
