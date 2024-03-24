import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ListProduct.css'
import cross from '../../assets/cart_cross_icon.png'
function ListProduct() {
  const [allproducts, setallproducts] = useState([])
  useEffect(() => {
   fetchinfo()
  }, [])
  
  const fetchinfo=async()=>{
    try {
      const response = await axios.get('http://localhost:4000/allproduct');
      setallproducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  }
const removeproduct=async(id)=>{
  try {
    const response = await axios.post('http://localhost:4000/deleteproduct',{id:id});
    fetchinfo();
    console.log(response.data.products);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error
  }
}
  return (
    <div className='list-product'>
      <h1>All products list</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {
           allproducts.map((product,index)=>{
            return <> <div key={index} className='listproduct-format-main listproduct-format'>
            <img className='listproduct-product-icon' src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img className='listproduct-remove-icon' onClick={()=>{removeproduct(product.id)}}  src={cross} alt="" />
          </div>
          <hr />
          </> 
           }
          
          )
        }
      </div>
    </div>
  )
}

export default ListProduct