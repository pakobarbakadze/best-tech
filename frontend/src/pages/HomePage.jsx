import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Product from '../components/Product/Product'
import BannerHome from '../helpers/BannerHome/BannerHome'
import CategoriesDropdown from '../ui/CategoriesDropdown/CategoriesDropdown'

const HomePage = () => {
  return (
    <>
    <Navbar></Navbar>
    <CategoriesDropdown></CategoriesDropdown>
    <BannerHome></BannerHome>
    <Product></Product>
    </>
  )
}

export default HomePage