import React from 'react'
import MensEthic from './MensEthic'
import './index.css'
import Categories from './Categories'
import EthicCollection from './EthicCollection'
import MenShirts from './MenShirts'
import ShirtsCollection from './ShirtsCollection'
import TShirtsBanner from './TShirtsBanner'
import TShirtsCollection from './TShirtsCollection'
import CategoriesSecond from './CategoriesSecond'

const HomeComp = () => {
  return (
    <>
      <MensEthic />
      <Categories />
      <EthicCollection />
      <MenShirts />
      <ShirtsCollection />
      <TShirtsBanner />
      <TShirtsCollection />
      <CategoriesSecond/>
    </>
  )
}

export default HomeComp
