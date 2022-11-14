import React from 'react'

import MsiBanner from '../../images/msi_banner.jpeg'

import classes from './BannerHome.module.css'

const BannerHome = () => {
  return (
    <div className={classes.container}>
        <img src={MsiBanner} alt="msi_banner" />
    </div>
  )
}

export default BannerHome