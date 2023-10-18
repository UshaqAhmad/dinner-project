import React from 'react'
import './index.css'
import Menu from './Menu'
import MobNavbar from './MobNavbar'
const NavbarComp = () => {
  return (
    <>
      <div className='MobScreen'>
        <MobNavbar />
      </div>
      <div className='LargeScreen'>
        <Menu />
      </div>
    </>
  )
}

export default NavbarComp
