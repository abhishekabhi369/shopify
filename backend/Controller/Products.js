const Product = require("../Schemas/Product");


const createproduct=async(req,res)=>{
    let products=await Product.find({})
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1)
        let last_product=last_product_array[0]
        id=last_product.id+1;
    }
    else{
        id=1
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product)
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name
    })
}
const deleteproduct=async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    res.json({
        success:true,
        name:req.body.name
    })
}
const getallproduct=async(req,res)=>{
    let products=await Product.find({})
    res.json({
        products
    })
}

const newCollection=async(req,res)=>{
    let product=await Product.find({})
    let newCollection=product.slice(1).slice(-8);
    res.json({
        newCollection
    })
   
}
const popularinwomen=async(req,res)=>{
    let product=await Product.find({category:"women"})
    let popularinwomen=product.slice(0,4);
    res.json({
        popularinwomen
    })
}
module.exports={createproduct,deleteproduct,getallproduct,newCollection,popularinwomen}