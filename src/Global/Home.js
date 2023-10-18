import React from 'react'
import { Link } from 'react-router-dom'
import NavbarComp from './navbar'

const Home = () => {
  return (
    <>
      <NavbarComp />
      <div className='homeContainer'>
        <div className='menCategory'>
          <Link to={'/men'}>
            <img
              src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/eid_ethnic_category_banners_1880x_5cb4578d-300b-424c-b7d6-5a7cac34cce4_1880x.webp?v=1687782421'
              alt=''
            />
          </Link>
        </div>
        <div className='womenCategory'>
          <Link to={'/women'}>
            <img
              src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/ronaq_1880x.jpg?v=1687434837'
              alt=''
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
