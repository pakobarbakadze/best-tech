import React from 'react'

import PlaceOrder from '../components/PlaceOrder/PlaceOrder'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const PlaceOrderPage = () => {
  return (
    <>
    <CheckoutSteps step1 step2 step3 />
    <PlaceOrder/>
    </>
  )
}

export default PlaceOrderPage