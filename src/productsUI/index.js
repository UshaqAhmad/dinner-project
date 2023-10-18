import React, { useState } from 'react'
import './index.css'
import { products } from '../data/arrays'
import NavbarComp from './../Global/navbar/index'
import ProductList from './ProductList'
import FilterOptions from './FilterOptons'
import { useParams } from 'react-router-dom'

const ProductComp = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [showSaleProducts, setShowSaleProducts] = useState(false)
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const {type} = useParams()
  const filterActiveFunc = ()=>{
    setShowFilter(!showFilter)
  }

  const handlePriceChange = (event) => {
    const { value } = event.target
    setPriceRange((prevPriceRange) => ({
      ...prevPriceRange,
      max: value,
    }))
  }

  const handleSaleProductsChange = (event) => {
    setShowSaleProducts(event.target.checked)
  }

  const handleInStockChange = (event) => {
    setShowInStockOnly(event.target.checked)
  }
  const filteredProducts = products.filter((product) => {
    // Apply category filter
    if (product.category !== type) {
      return false;
    }
  
    // Apply price filter
    const { price } = product;
    if (price < priceRange.min || price > priceRange.max) {
      return false;
    }
  
    // Apply sale products filter
    if (showSaleProducts && !product.onSale) {
      return false;
    }
  
    // Apply in-stock filter
    if (showInStockOnly && product.inStock === true) {
      return false;
    }
  
    return true;
  });
  
  

  return (
    <>
      <NavbarComp />
      <div className='productsPageContainer'>
        <div className='productsFilterContainer'>
          <div className='mobFilter'>
            <div className='filterIcon'>
              <i onClick={filterActiveFunc} class='fa-solid fa-sliders'></i>
            </div>
            <div className={`mobFilterOptions ${showFilter ? 'activeFilter' : ''}`}>
              <div className="filterCrossIcon">
              <i onClick={filterActiveFunc} className='fa-solid fa-xmark '></i>

              </div>
              <div className="filterTag">
              <div className="filterHeading">
                <h4>Filter your Product</h4>
              </div>
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
          </div>
          </div>
          </div>
          
          <div className='largeFilter'>
            <FilterOptions
              priceRange={priceRange}
              showSaleProducts={showSaleProducts}
              showInStockOnly={showInStockOnly}
              handleInStockChange={handleInStockChange}
              handleSaleProductsChange={handleSaleProductsChange}
              handlePriceChange={handlePriceChange}
            />
          </div>
        </div>
        <div className='productsListContainer'>
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </>
  )
}

export default ProductComp
