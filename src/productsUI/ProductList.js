import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductList = ({ filteredProducts }) => {
  const { type } = useParams()
  console.log(type)
  console.log(filteredProducts)
  const products = filteredProducts.filter((item) => {
    if (type === 'sale') {
      console.log('Item onSale:', item.onSale);
      return item.onSale === true;
    } else {
      console.log('Item category:', item.category);
      return item.category === type;
    }
  });
  
  return (
    <>
      <div className='productListImages'>
        {products.map((x, index) => (
          <div className='productImageContainer ' key={index}>
            <Link to={`/collection/${type}/${x.id}`}>
              <div className='productImage'>
                <img className='main-image' src={x.images[0]} alt='' />
                <img className='hover-image' src={x.images[1]} alt='' />
              </div>
            </Link>
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
    </>
  )
}

export default ProductList
