import React from 'react'

const FilterOptons = ({
  priceRange,
  showSaleProducts,
  showInStockOnly,
  handleInStockChange,
  handleSaleProductsChange,
  handlePriceChange,
}) => {
  return (
    <>
      <div className='filterOption'>
        <label>Price Range:</label>
        <input
          type='range'
          min='0'
          max='10000'
          value={priceRange.max}
          onChange={handlePriceChange}
        />
        <p>Price: Rs {priceRange.max}</p>
      </div>
      <div className='filterOption'>
        <label>
          <input
            type='checkbox'
            checked={showSaleProducts}
            onChange={handleSaleProductsChange}
          />
          Show Sale Products
        </label>
      </div>
      <div className='filterOption'>
        <label>
          <input
            type='checkbox'
            checked={showInStockOnly}
            onChange={handleInStockChange}
          />
          Show In Stock Only
        </label>
      </div>
    </>
  )
}

export default FilterOptons
