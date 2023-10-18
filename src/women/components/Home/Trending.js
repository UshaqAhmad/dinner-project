import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/arrays'
const Trending = () => {
  const ethnicProducts = products.filter((item) => item.category === 'winterwear')
  return (
    <div className='collectionContainer mt-5 mb-3'>
      <div className='collectionHeadingTag'>
        <h3 className='text-center'>Trending Now</h3>
        <Link className='text-center'>Discover the collection</Link>
      </div>
      <div className='collectionImages'>
        {ethnicProducts.slice(0,4).map((x, index) => (
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
      </div>
      <div className='viewAllButton'>
        <Link>View All</Link>
      </div>
    </div>
  )
}

export default Trending
