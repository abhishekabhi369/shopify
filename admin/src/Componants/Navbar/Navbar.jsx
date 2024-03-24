import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.png'
import na_profile from '../../assets/logo.png'
function Navbar() {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={nav_logo} alt="" />
        <img src={na_profile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar