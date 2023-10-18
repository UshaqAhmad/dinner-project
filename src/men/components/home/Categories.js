import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categoryContainer'>
        <div className='ethnicImg'>
          <Link to={'/collection/ethnic'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/ethnic.webp?v=1687782874'
            alt=''
            />
            </Link>
          <h3>Ethnic</h3>
        </div>
        <div className='shirtsImg'>
          <Link to={'/collection/Shirt'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/shirt.webp?v=1687782900'
            alt=''
            />
            </Link>
          <h3>Shirts</h3>
        </div>

        <div className='tShirtsImg'>
          <Link to={'/collection/t-shirts&polos'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/t-shirts255x255.webp?v=1687782963'
            alt=''
            />
            </Link>
          <h3>T-Shirts & Polo's</h3>
        </div>

        <div className='trouserJeansImg'>
          <Link to={'/collection/trousers&jeans'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/trousers.webp?v=1687783046'
            alt=''
            />
            </Link>
          <h3>Trouser & Jeans</h3>
        </div>
        <div className='accessoriesImg'>
          <Link to={'/collection/accessories'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/accessories.webp?v=1687783069'
            alt=''
            />
            </Link>
          <h3>Accessories</h3>
        </div>
    </div>
  )
}

export default Categories
