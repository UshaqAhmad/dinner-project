import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MobNavList = ({ activeNavbarFunc }) => {
  const { collection } = useParams()
  return (
    <>
      <div className='close-icon'>
        <i onClick={activeNavbarFunc} className='fa-solid fa-xmark'></i>
      </div>
      <div className='mobNavLogoS'>
        <Link to={'/'}>
          <img
            src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/main_150x.svg?v=1684402895'
            alt=''
            style={{ width: '100px' }}
          />
        </Link>
      </div>
      {collection === 'women' && (
        <>
          <div className='mobMenuTag'>
            <div>
              <Link to={`/${collection}/readytowear`}>
                <span>Ready To Wear</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/unstitched`}>
                <span>Unstitched</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/bottoms`}>
                <span>Bottoms</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/separates`}>
                <span>Separates</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/winterwear`}>
                <span>Winter Wear</span>
              </Link>
            </div>
          </div>
        </>
      )}
      {collection === 'men' && (
        <>
          <div className='mobMenuTag'>
            <div>
              <Link to={`/${collection}/ethnic`}>
                <span>Ethnic</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/Shirt`}>
                <span>Shirts</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/t-shirts&polos`}>
                <span>T-Shirts & Polo's</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/trouser&jeans`}>
                <span>Trouser & Jeans</span>
              </Link>
            </div>
            <div>
              <Link to={`/${collection}/accessories`}>
                <span>Accessories</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MobNavList
