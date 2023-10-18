import React from 'react'
import HomeComp from '../components/home'
import NavbarComp from '../../Global/navbar'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
const MHome = () => {
  const fadeActive = useSelector((store) => store.bodyReducer)
  return (
    <>
      <NavbarComp />
      <div className={`${fadeActive && 'fade-in'}`}>
        <HomeComp />
      </div>
    </>
  )
}

export default MHome
