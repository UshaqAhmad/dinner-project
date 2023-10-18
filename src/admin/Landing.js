import React from 'react'
import AdminNav from './AdminNav'
import './index.css'
const Landing = () => {
  return (
    <>
      <div className='dashboard'>
        <div className='adminNavBar'>
          <AdminNav />
        </div>
        <div className='pages'>
          <div className='LandingContainer'>
            <div className='LandingBoxes'>
              <div className='todayOrders'>
                <p className='todayLabel'>Today</p>
                <span className='todaySaleLabel'>Sale:</span>
                <h1 className='todaySaleAmount'>$2,000</h1>
                <p className='todayOrderCount'>5 orders</p>
              </div>
              <div className='weekOrders'>
                <p className='weekLabel'>This Week</p>
                <span className='weekSaleLabel'>Sale:</span>
                <h1 className='weekSaleAmount'>$5,000</h1>
                <p className='weekOrderCount'>20 orders</p>
              </div>
              <div className='monthOrders'>
                <p className='monthLabel'>This Month</p>
                <span className='monthSaleLabel'>Sale:</span>
                <h1 className='monthSaleAmount'>$10,000</h1>
                <p className='monthOrderCount'>50 orders</p>
              </div>
            </div>
            <div className='recentOrdersTable'>
              <h2 className='recentOrdersLabel'>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>ID</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className='orderImage'
                        src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/WK20298-IVORY-RS-5490-02_64x64.jpg?v=1687873361'
                        alt=''
                      />
                    </td>
                    <td>Ferozi Shalwar Kamix</td>
                    <td>120398210213</td>
                    <td>Pending</td>
                    <td>
                      <button className='seeMoreButton'>
                        See More Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className='orderImage'
                        src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/WK20298-IVORY-RS-5490-02_64x64.jpg?v=1687873361'
                        alt=''
                      />
                    </td>
                    <td>Ferozi Shalwar Kamix</td>
                    <td>120398210213</td>
                    <td>Pending</td>
                    <td>
                      <button className='seeMoreButton'>
                        See More Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className='orderImage'
                        src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/WK20298-IVORY-RS-5490-02_64x64.jpg?v=1687873361'
                        alt=''
                      />
                    </td>
                    <td>Ferozi Shalwar Kamix</td>
                    <td>120398210213</td>
                    <td>Pending</td>
                    <td>
                      <button className='seeMoreButton'>
                        See More Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className='orderImage'
                        src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/WK20298-IVORY-RS-5490-02_64x64.jpg?v=1687873361'
                        alt=''
                      />
                    </td>
                    <td>Ferozi Shalwar Kamix</td>
                    <td>120398210213</td>
                    <td>Pending</td>
                    <td>
                      <button className='seeMoreButton'>
                        See More Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
