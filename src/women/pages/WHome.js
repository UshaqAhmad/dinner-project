import React from 'react'
import WHomeComp from '../components/Home'
import NavbarComp from '../../Global/navbar'
import { useSelector } from 'react-redux'

const WHome = () => {
  const fadeActive = useSelector((store) => store.bodyReducer)

  return (
    <>
      <NavbarComp />
      <div className={`${fadeActive && 'fade-in'}`}>
        <WHomeComp />
      </div>
    </>
  )
}

export default WHome
