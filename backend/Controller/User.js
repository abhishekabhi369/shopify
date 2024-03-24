const { get } = require("mongoose")
const User = require("../Schemas/User")
const jwt=require('jsonwebtoken')
const createUser=async(req,res)=>{
    let check=await User.findOne({email:req.body.email})
    if(check)
    {
     res.json({success:false,errors:"Exiting User"})
    }
    else{
        let cart={}
    for (let i = 0; i < 300; i++) {
       cart[i]=0
        
    }
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save()
    const data={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({
        success:true,token
    })
    }
}
//userlogin
const loginuser=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if (user) {
        const passCompare=req.body.password === user.password
        if (passCompare) {
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"Wrong passWord"})
        }
    }
    else{
        res.json({errors: "Invalid email or password" });
    }
}
const fetchUSer=async(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({errors:"Please Login First"})
    }
    else{
        try {
            const data=jwt.verify(token,'secret_ecom')
            req.user=data.user
            next();
        } catch (error) {
            res.status(401).send({errors:"Please Authenticate"})
        }
    }
}
const addtoCart=async(req,res)=>{
 
     let userdata=await User.findOne({_id:req.user.id})
     if (userdata) {
        userdata.cartData[req.body.ItemId]+=1
        await User.findOneAndUpdate({_id:req.user.id},{
           cartData:userdata.cartData
        })
   
        res.send("Added")
     }
     else{
        res.json({
            error:"Please Login"
        })
     }
    
}
const removecartData=async(req,res)=>{
    let userdata=await User.findOne({_id:req.user.id})
    if(userdata.cartData[req.body.ItemId]>0){
        userdata.cartData[req.body.ItemId]-=1
        await User.findOneAndUpdate({_id:req.user.id},{
           cartData:userdata.cartData
        })
        res.send("Removed")
    }
}
const getCart=async(req,res)=>{
        console.log("getCart");
        let userdata=await User.findOne({_id:req.user.id})
        res.json(userdata.cartData)
}   
module.exports={createUser,loginuser,addtoCart,fetchUSer,removecartData,getCart}