import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartComp from './CartComp'
import LoginComp from './LoginComp'
import { useDispatch, useSelector } from 'react-redux'
import { bodyActive } from '../../redux/features/bodySlice'
const Menu = () => {
  const cartList = useSelector((store) => store.cartSlice.cartList)
  const [activeCart, setActiveCart] = useState(false)
  const [activeLogin, setActiveLogin] = useState(false)
  const { collection } = useParams()
  const dispatch = useDispatch()
  const activeLoginFunc = () => {
    setActiveLogin(!activeLogin)
    dispatch(bodyActive())
  }

  const activeCartFunc = () => {
    setActiveCart(!activeCart)
    dispatch(bodyActive())
  }
  return (
    <div className='navContainer'>
      <div className='navLogo'>
        <Link to={'/'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/main_150x.svg?v=1684402895'
            alt=''
          />
        </Link>
      </div>
      {collection === 'women' && (
        <>
          <div className='NavLinks'>
            <Link to={`/${collection}/readytowear`}>Ready To Wear</Link>
            <Link to={`/${collection}/unstitched`}>unstitched</Link>
            <Link to={`/${collection}/bottoms`}>bottoms</Link>
            <Link to={`/${collection}/separates`}>separates</Link>
            <Link to={`/${collection}/winterwear`}>winter wear</Link>
          </div>
        </>
      )}
      {collection === 'men' && (
        <>
          <div className='NavLinks'>
            <Link to={`/${collection}/ethnic`}>ethnic</Link>
            <Link to={`/${collection}/Shirt`}>shirts</Link>
            <Link to={`/${collection}/t-shirts&polos`}>t-shirts & polo's</Link>
            <Link to={`/${collection}/trouser&jeans`}>Trouser & Jeans</Link>
            <Link to={`/${collection}/accessories`}>Accessories</Link>
          </div>
        </>
      )}
      <div className='navIcons'>
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

export default Menu
