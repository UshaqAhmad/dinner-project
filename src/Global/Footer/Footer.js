import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='newsLetterDiv'>
        <div className='newsLetter'>
          <h2>Newsletter</h2>
          <p>Be the first one to know about discounts, offers and events</p>
        </div>
        <div className='subscribe'>
          <input type='text' name='' id='' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className='footerMainSection'>
        <div className='diners'>
          <h1>Diners</h1>
          <p>
            DINERS is a registered trademark of AL BARAKA APPAREL and has been
            in the fashion industry since 1990. We believe in satisfying
            customers through our quality and brilliant customer service.
          </p>
          <div className='footerIcons'>
            <i className='fa-brands fa-facebook-f'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-youtube'></i>
            <i className='fa-brands fa-twitter'></i>
          </div>
        </div>
        <div className='about'>
          <h3>About</h3>
          <Link>Corporate Orders</Link>
          <Link>Contact Us</Link>
          <Link>Career</Link>
          <Link>Size Guide</Link>
        </div>
        <div className='help'>
        <h3>Help</h3>
          <Link>Return & Refund</Link>
          <Link>Shipping & Handling</Link>
          <Link>Terms & Condition</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className='myAccount'>
        <h3>My Account</h3>
          <Link>Login</Link>
          <Link>Checkout</Link>
          <Link>FAQs</Link>
        </div>
      </div>
      <hr />
      <div className='footerCopy'>
        <p>
          © 2023 Diners. All Rights Reserved. Design & Developed By Mean3 Pvt
          Ltd
        </p>
        <div className='footerCards'>
          <i className='fa-brands fa-cc-visa'></i>
          <i className='fa-brands fa-cc-mastercard'></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
