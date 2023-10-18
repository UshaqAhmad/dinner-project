import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { products } from '../../../data/arrays'
const MobWUnstitched = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
  }
  const filterProducts = products.filter(item=> item.category === 'bottoms')


  return (
    <div className='MobWReadyContainer'>
      <div className='MobWReadyBanner'>
        <img
          className='banner-image'
          src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/ready-to-wear994-x-593-px_1.jpg?v=1687440206'
          alt=''
        />
      </div>
      <div className='MobWReadySlider'>
       
        <AliceCarousel
          autoPlay
          infinite
          items={filterProducts.slice(0,4).map((x, index) => (
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
          responsive={responsive}
          autoPlayInterval={2000}
          animationDuration={500}
        />
      </div>
      
    </div>
  )
}

export default MobWUnstitched
