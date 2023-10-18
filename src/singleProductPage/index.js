import React from 'react'
import './index.css'
import { products } from './../data/arrays'
import NavbarComp from '../Global/navbar'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'
const SingleProductComp = () => {
  const { id } = useParams()

  const singleProd = products.find((item) => item.id === Number(id))

  const dispatch = useDispatch()
  const addToCartFunc = (product) => {
    const newUpdatedProduct = {
      ...product,
      quantity: 1
    }
    dispatch(addToCart(newUpdatedProduct))
  }

  return (
    <>
      <NavbarComp />
      <div className='singleProdContainer'>
        <div className='singleProductImage'>
          <img src={singleProd.images[0]} alt='' />
        </div>
        <div className='singleProductBody'>
          <div className='singleProdTitle'>
            <h1>{singleProd.title}</h1>
          </div>
          <div className='singleProdPrice'>
            <h3>PKR {singleProd.price}</h3>
          </div>
          <div className='singleProdColor'>
            <p>Color: Ivory Technique: Printed Fabric:N/A</p>
          </div>
          <div className='singleProdSizesButtons'>
            <p>Size: XL</p>
            {singleProd.sizes.map((x) => (
              <button>{x}</button>
            ))}
          </div>
          <div className='singleProdQuantity'>
            <span className='quantityHeading'>Quantity:</span>
            <div className='quantityBox'>
              <button className='minusButton'>
                <i class='fa-solid fa-minus'></i>
              </button>
              <span className='quantityNumber'>1</span>
              <button className='plusButton'>
                <i class='fa-solid fa-plus'></i>
              </button>
            </div>
          </div>
          <div className='addToCartButton'>
            <button onClick={() => addToCartFunc(singleProd)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductComp
