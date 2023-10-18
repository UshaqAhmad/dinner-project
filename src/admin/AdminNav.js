import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const AdminNav = () => {
  return (
    <div className='adminNav'>
      <Link to='/dashboard' className='navLink link1'>
        <i className='fas fa-chart-bar navIcon'></i>
        <h1 className='names name1'> Dashboard</h1>
      </Link>
      <Link to='/dashboard/products' className='navLink link2'>
        <i className='fas fa-box navIcon'></i>
        <h1 className='names name2'> Products</h1>
      </Link>
      <Link to='/dashboard/orders' className='navLink link3'>
        <i className='fas fa-clipboard-list navIcon'></i>
        <h1 className='names name3'> Orders</h1>
      </Link>
      <Link to='/dashboard/users' className='navLink link4'>
        <i className='fas fa-users navIcon'></i>
        <h1 className='names name4'> Users</h1>
      </Link>
      <Link to='/dashboard/settings' className='navLink link5'>
        <i className='fas fa-cog navIcon'></i>
        <h1 className='names name5'> Settings</h1>
      </Link>
      <Link to='/logout' className='navLink link6'>
        <i className='fas fa-sign-out-alt navIcon'></i>
        <h1 className='names name6'> Logout</h1>
      </Link>
    </div>
  )
}

export default AdminNav
