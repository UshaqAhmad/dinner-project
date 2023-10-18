import React from 'react'
import { products } from './../../data/arrays'
import { useDispatch, useSelector } from 'react-redux'
import {
  Decrease,
  addToCart,
  removeFromCart,
} from '../../redux/features/cartSlice'

const CartComp = ({ activeCartFunc }) => {
  const cartList = useSelector((store) => store.cartSlice.cartList)
  const totalPrice = cartList.reduce(
    (acc, item) => acc + item.quantity * item.price,0)
    


  const dispatch = useDispatch()
  const increase = (prod) => {
    dispatch(addToCart(prod))
  }
  const decrease = (prod) => {
    dispatch(Decrease(prod))
  }
  const remove = (prod) => {
    dispatch(removeFromCart(prod))
  }
  return (
    <div className='cartCompContainer'>
      <div className='CartCrossIcon'>
        <i onClick={activeCartFunc} className='fa-solid fa-xmark'></i>
      </div>
      <div className='cartContainer'>
        {cartList.map((x) => (
          <div className='cartComponentBody'>
            <div className='cartCompProdImage'>
              <img src={x.images[0]} height={167} width={120} alt='' />
            </div>
            <div className='cartCompProdBody'>
              <div className='cartProdTitle'>
                <h2>{x.title}</h2>
              </div>
              {/* <div className='cartProdSize'>
                <p>Size: x.sizes[0]}</p>
              </div> */}
              <div className='cartProdSize'>
                <p>Price: {x.price}</p>
              </div>
              <span className='cartQuantityHeading'>Quantity:</span>
              <div className='quantityContainer'>
                <div className='cartProdQuantityBox'>
                  <button onClick={() => decrease(x)}>
                    <i className='fa-solid fa-minus'></i>
                  </button>
                  <span className='cartQuantityNumber'>{x.quantity}</span>
                  <button onClick={() => increase(x)}>
                    <i className='fa-solid fa-plus'></i>
                  </button>
                </div>
                <div className='deleteIcon'>
                  <i class='fa-solid fa-trash' onClick={() => remove(x)}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='cartBottomContainer'>
        <div className='totalAmount'>
          <div className='totalAmountHeading'>
            <h3>Total:</h3>
          </div>
          <div className='totalAmountPrice'>
            <h3>
              <span>PKR</span>
              {totalPrice}
            </h3>
          </div>
        </div>
        <div className='checkoutButton'>
          <button>checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartComp
