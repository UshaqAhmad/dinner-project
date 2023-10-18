import React from 'react'
import { Link } from 'react-router-dom'
const WCategories = () => {
  return (
    <div className='categoryContainer'>
      <div className='ethnicImg'>
        <Link to={'/collection/readytowear'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/rtw.webp?v=1687778198'
            alt=''
          />
        </Link>
        <h3>Ready to Wear</h3>
      </div>
      <div className='shirtsImg'>
        <Link to={'/collection/unstitched'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/unstitch.webp?v=1687778240'
            alt=''
          />
        </Link>
        <h3>Unstitched</h3>
      </div>
      <div className='tShirtsImg'>
        <Link to={'/collection/bottoms'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/botom_copy.png?v=1687242702'
            alt=''
          />
        </Link>
        <h3>Bottoms</h3>
      </div>
      <div className='trouserJeansImg'>
        <Link to={'/collection/separates'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/accessories_1.webp?v=1687778331'
            alt=''
          />
        </Link>
        <h3>Separates</h3>
      </div>
      <div className='accessoriesImg'>
        <Link to={'/collection/winterwear'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/sweater.png?v=1687778363'
            alt=''
          />
        </Link>
        <h3>Winter Wear</h3>
      </div>
    </div>
  )
}

export default WCategories
