import React from 'react'
import './index.css'
import WomenFirst from './WomenFirst'
import WCategories from './WCategories'
import WReady from './WReady'
import Festive from './Festive'
import Unstitched from './Unstithced'
import Trending from './Trending'
import MobWReady from './MobWReady'
import MobWFestive from './MobWFestive'
import MobWUnstitched from './MobWUnstitched'

const WHomeComp = () => {
  return (
    <>
      <WomenFirst />
      <WCategories />
      <div className='MobScreen'>
        <MobWReady />
        <MobWFestive/>
        <MobWUnstitched/>
      </div>
      <div className='LargeScreen'>
        <WReady />
        <Festive />
        <Unstitched />
      </div>
      <Trending />
    </>
  )
}

export default WHomeComp
