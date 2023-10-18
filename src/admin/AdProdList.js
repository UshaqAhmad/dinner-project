import React, { useState } from 'react'
import AdminNav from './AdminNav'
import { products } from '../data/arrays'
import { Link } from 'react-router-dom'
const AdProdList = () => {
  const [category, setCategory] = useState()
  const changeCategoryHandler = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <div className='dashboard'>
        <div className='adminNavBar'>
          <AdminNav />
        </div>
        <div className='pages'>
          <div className='dashboardProductsContainer'>
            <div className='topRow'>
              <Link to={'/dashboard/products/add-product'}>
                <button className='addNewButt'>Add New Product</button>
              </Link>
              <div className='filters'>
                <div className='listCategory'>
                  <select name='' id='' onChange={changeCategoryHandler}>
                    <option value='ethnic'>Ethnic</option>
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                    <option value='boy'>Boy</option>
                  </select>
                </div>
                <div className='searchBar'>
                  <input type='text' />
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className='listOfProduct'>
              <table>
                <thead>
                  <tr>
                    <th>image</th>
                    <th>title</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((x) => (
                    <tr>
                      <td>
                        <img className='orderImage' src={x.images[0]} alt='' />
                      </td>
                      <td>{x.title}</td>
                      <td>{x.category}</td>
                      <td>T-shirt</td>
                      <td>{x.price}</td>
                      <td>
                        <Link to={'/dashboard/edit-product'}>
                          <button className='editProdButton'>
                            <i class='fa-regular fa-pen-to-square'></i>
                            <span className='editTag'>Edit</span>
                          </button>
                        </Link>
                        <button className='delProdButton'>
                          <i class='fa-regular fa-trash-can'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdProdList
