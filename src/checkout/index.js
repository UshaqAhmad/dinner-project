import React from 'react'
import './index.css'

const Checkout = () => {
  return (
    <div className='checkoutContainer'>
      <div className='checkoutSummary mt-5'>
        <div className='productPart'>
          <div className='image'>
            <img
              src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/WK20298-IVORY-RS-5490-02_64x64.jpg?v=1687873361'
              width={70}
              height={70}
              alt=''
            />
            <span className='imageQuantity'>1</span>
          </div>
          <div className='body'>
            <h3>2PC Printed Ivory Suit</h3>
            <p>S</p>
          </div>
          <div className='price'>
            <p>Rs 45,000</p>
          </div>
        </div>
        <div className='discountPart'>
          <input type='text' placeholder='Discount Code' />
          <button>Apply</button>
        </div>
        <div className='subtotalPart'>
          <p>Subtotal</p>
          <h3>Rs 54,000</h3>
        </div>
        <div className='total'>
          <h3>total</h3>
          <h3>Rs 43,000</h3>
        </div>
      </div>
      <div className='checkoutInfo'>
        <div className='logo'>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/main_150x.svg?v=1684402895'
            alt=''
          />
        </div>
        <div className='contactEmail'>
          <span className='contactHeading'>contact</span>
          <input
            className='email'
            type='email'
            name=''
            placeholder='Email'
            id=''
          />
          <div className='newsDiv'>
            <input type='checkbox' name='' id='' />
            <span>Email me with news and offers</span>
          </div>
        </div>
        <div className='shippingAddressContainer'>
          <h3>Shipping Address</h3>
          <div className='country'>
            <select name='' id=''>
              <option value=''>Pakistan</option>
            </select>
          </div>
          <div className='fNameLName'>
            <input type='text' placeholder='First Name' />
            <input className='lName' type='text' placeholder='Last Name' />
          </div>
          <div className='address'>
            <input type='text' name='' id='' placeholder='Address' />
          </div>
          <div className='apartment'>
            <input type='text' placeholder='Apartment, suit, etc. (optional)' />
          </div>
          <div className='cityPostal'>
            <input type='text' placeholder='City' />
            <input className='postal' type='text' placeholder='Postal Code' />
          </div>
          <div className='phone'>
            <input type='text' placeholder='Phone' />
            <p>please enter phone number with 11 digits</p>
          </div>

          <div className='placeOrderButton'>
            <button>Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
