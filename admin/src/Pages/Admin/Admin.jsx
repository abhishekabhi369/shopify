import React from 'react'
import './Admin.css'
import Sidebar from '../../Componants/Sidebar/Sidebar'
import {Route,Routes} from 'react-router-dom'
import AddProduct from '../../Componants/AddProduct/AddProduct'
import ListProduct from '../../Componants/ListProduct/ListProduct'
function Admin() {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>

        </Routes>
    </div>
  )
}

export default Admin