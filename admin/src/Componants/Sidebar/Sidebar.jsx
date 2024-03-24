import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product from '../../assets/cart_cross_icon.png'
import listproduct from '../../assets/breadcrum_arrow.png'
function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={add_product}alt="" />
                    <p>Add Product</p>
                </div>

        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={listproduct}alt="" />
                    <p>Product List</p>
                </div>

        </Link>
    </div>
  )
}

export default Sidebar