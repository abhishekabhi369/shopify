const express=require('express');
const { createproduct, deleteproduct, getallproduct, newCollection, popularinwomen } = require('../Controller/Products');
const { createUser, loginuser, addtoCart, fetchUSer, removecartData, getCart } = require('../Controller/User');
const router=express.Router();
router.post('/addproduct',createproduct);
router.post('/deleteproduct',deleteproduct);
router.get('/allproduct',getallproduct);
router.get('/newcollection',newCollection)
router.get('/popularinwomen',popularinwomen)
////////user

router.post('/signup',createUser);
router.post('/signin',loginuser);
router.post('/addcart',fetchUSer,addtoCart);
router.post('/removecart',fetchUSer,removecartData);
router.get('/getcart',fetchUSer,getCart);

module.exports=router