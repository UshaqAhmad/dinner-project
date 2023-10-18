import React, { useState } from 'react'
import MobNavList from './MobNavList'
import CartComp from './CartComp'
import LoginComp from './LoginComp'
import { useDispatch, useSelector } from 'react-redux'
import { bodyActive } from '../../redux/features/bodySlice'
const MobNavbar = () => {
  const cartList = useSelector(store => store.cartSlice.cartList)

  const [activeNavbar, setActiveNavbar] = useState(false)
  const [activeCart, setActiveCart] = useState(false)
  const [activeLogin, setActiveLogin] = useState(false)
  const dispatch = useDispatch()
  const activeLoginFunc = () => {
    setActiveLogin(!activeLogin)
    dispatch(bodyActive())
  }

  const activeNavbarFunc = () => {
    setActiveNavbar(!activeNavbar)
    dispatch(bodyActive())
  }
  const activeCartFunc = () => {
    setActiveCart(!activeCart)
    dispatch(bodyActive())
  }
  return (
    <div className='mobNavContainer'>
      <div className='mobNavIcon'>
        <i
          onClick={activeNavbarFunc}
          className='fa-solid fa-bars-staggered'
        ></i>
      </div>

      <div className={`MobMenuList ${activeNavbar ? 'activeNav' : ''}`}>
        <MobNavList activeNavbarFunc={activeNavbarFunc} />
      </div>

      <div className='mobNavLogo'>
        <img
          src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/main_150x.svg?v=1684402895'
          alt=''
        />
      </div>
      <div className='MobNavIcons'>
        <i onClick={activeLoginFunc} className='fa-regular fa-user'></i>
        <i onClick={activeCartFunc} className='fa-solid fa-bag-shopping'></i>
        <span className='cartNum'>{cartList.length}</span>
      </div>
      <div className={`loginComp ${activeLogin ? 'activeLogin' : ''}`}>
        <LoginComp activeLoginFunc={activeLoginFunc} />
      </div>

      <div className={`cartComponent ${activeCart ? 'activeCart' : ''}`}>
        <CartComp activeCartFunc={activeCartFunc} />
      </div>
    </div>
  )
}

export default MobNavbar
