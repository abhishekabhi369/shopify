const mongoose = require('mongoose'); 
const productSchema=mongoose.Schema({
    id:{
        type:Number,
        
    },
    name:{
        type:String,
      
    },
    image:{
        type:String,
        
    },category:{
        type:String,
        
    },
    new_price:{
        type:Number,
       
    },
    old_price:{
        type:Number,

    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
    
})
module.exports = mongoose.model('Product', productSchema);