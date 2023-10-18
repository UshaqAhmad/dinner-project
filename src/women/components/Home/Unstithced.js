import React from 'react'
import { products } from '../../../data/arrays'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Unstitched = () => {

  const filterProducts = products.filter(item=> item.category === 'unstitched')

  return (
    <>
      <div className='readyToContainer'>
      <div className='readyBanner'>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/banner-saha.webp?v=1687785684'
            alt=''
          />
        </div>
        <div className='readySlider'>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={true}
          interval={2000}
          transitionTime={500}
        >
          {filterProducts.slice(0,4).map((x, index) => (
            <div className='productImageContainer' key={index}>
              <div className='productImage'>
                <img className='main-image' src={x.images[0]} alt='' />
                <img className='hover-image' src={x.images[1]} alt='' />
              </div>
              <div className='productBody'>
                <div className='bodyHeading'>
                  <h3>{x.title}</h3>
                </div>
                <div className='productPrice'>
                  <p>Rs {x.price}</p>
                </div>
                <div className='productSizes'>
                  <button>XS</button>
                  <button>S</button>
                  <button>L</button>
                  <button>M</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
       
      </div>
    </>
  )
}

export default Unstitched
