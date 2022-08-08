import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SectionDivider from '../helpers/SectionDivider/SectionDivider'

const ProductDetailsPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <SectionDivider></SectionDivider>
    <ProductDetails></ProductDetails>
    </>
  )
}

export default ProductDetailsPage