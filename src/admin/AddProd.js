import React, { useState } from 'react'
import AdminNav from './AdminNav'

const AddProd = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('men')
  const [type, setType] = useState('')
  const [onSale, setOnSale] = useState(false)
  const [trending, setTrending] = useState(false)
  const [sizes, setSizes] = useState([])
  const [images, setImages] = useState([])
  const [salePrice, setSalePrice] = useState('')
  const [price, setPrice] = useState('')
  console.log(category, type)

  const handleOnSaleChange = (event) => {
    setOnSale(event.target.checked)
  }
  const addProductFunc = () => {
    const productData = {
      title: title,
      description: description,
      category: category,
      type: type,
      onSale: onSale,
      trending: trending,
      sizes: sizes,
      images: images,
      salePrice: salePrice,
      price: price,
    }

    fetch('http://localhost:5000/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added successfully:', data)
        // Show notification or perform any other actions
        // Reset input fields
        setTitle('')
        setDescription('')
        setCategory('')
        setType('')
        setOnSale(false)
        setTrending(false)
        setSizes([])
        setImages([])
        setSalePrice('')
        setPrice('')
      })
      .catch((error) => {
        console.error('Error adding product:', error)
      })
  }

  return (
    <>
      <div className='dashboard'>
        <div className='adminNavBar'>
          <AdminNav />
        </div>
        <div className='pages'>
          <div className='pageHeading'>
            <h1>Enter a new Product</h1>
          </div>
          <div className='addEditProdContainer'>
            <div className='titleInput'>
              <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter a Product Title'
              />
            </div>
            <div className='categoriesTypeInput'>
              <div className='categoriesInputs'>
                <label htmlFor='' className='labelInputs'>
                  Category:
                </label>
                <select
                  name=''
                  id=''
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                </select>
              </div>
              <div className='womenTypesInputs'>
                <label htmlFor='' className='labelInputs'>
                  Women Type:
                </label>
                <select
                  name=''
                  id=''
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                >
                  <option value=''>Select Type:</option>
                  <option value='ready-to-wear'>Ready To Wear</option>
                  <option value='unstitched'>Unstithced</option>
                  <option value='bottoms'>Bottoms</option>
                  <option value='separates'>Separates</option>
                  <option value='winter-wear'>Winter Wear</option>
                </select>
              </div>
              <div className='typeInputs'>
                <label htmlFor='' className='labelInputs'>
                  Men Type:
                </label>

                <select
                  name=''
                  id=''
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                >
                  <option value=''>Select Type</option>
                  <option value='ethnic'>Ethnic</option>
                  <option value='shirts'>Shirts</option>
                  <option value='t-shirts-n-polo'>T-shirt & Polo's</option>
                  <option value='trouser-n-jeans'>Trouser & Jeans</option>
                  <option value='accessories'>accessories</option>
                </select>
              </div>
              <div className='sizeInputs'>
                <label htmlFor='' className='labelInputs'>
                  Sizes:
                </label>
                <div>
                  <input
                    type='text'
                    placeholder='Size 1'
                    onChange={(e) =>
                      setSizes((prevSizes) => [...prevSizes, e.target.value])
                    }
                  />
                  <input
                    type='text'
                    placeholder='Size 2'
                    onChange={(e) =>
                      setSizes((prevSizes) => [...prevSizes, e.target.value])
                    }
                  />
                  <input
                    type='text'
                    placeholder='Size 3'
                    onChange={(e) =>
                      setSizes((prevSizes) => [...prevSizes, e.target.value])
                    }
                  />
                </div>
              </div>
            </div>
            <div className={`onSaleInput ${onSale ? 'checked' : ''}`}>
              <input
                type='checkbox'
                checked={onSale}
                onChange={handleOnSaleChange}
              />
              <p>Sale</p>
              {onSale && (
                <input
                  type='number'
                  placeholder='Sale Price'
                  className='salePriceInput'
                  onChange={(e) => setSalePrice(e.target.value)}
                />
              )}
            </div>
            <div className='trendingInput'>
              <input
                type='checkbox'
                onChange={(e) => setTrending(e.target.checked)}
              />
              <p>Trending</p>
            </div>
            <div className='trendingInput'>
              <input type='number' onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='imageInput'>
              <p>Images: links</p>
              <input
                type='text'
                placeholder='Enter image link'
                onChange={(e) => setImages([e.target.value])}
              />
              <input
                type='text'
                placeholder='link 2'
                onChange={(e) =>
                  setImages((prevLinks) => [...prevLinks, e.target.value])
                }
              />
              <input
                type='text'
                placeholder='link 3'
                onChange={(e) =>
                  setImages((prevLinks) => [...prevLinks, e.target.value])
                }
              />
            </div>
            <div className='descriptionInput'>
              <input
                type='text'
                placeholder='Enter Description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='SubEditButton'>
              <button onClick={addProductFunc}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProd
