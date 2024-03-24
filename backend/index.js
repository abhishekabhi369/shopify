const port=4000
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const path=require('path')
const cors=require('cors');
const connection = require('./mongo-config/mongo');
const router = require('./MainRoutes/authRoute');


app.use(express.json())
app.use(cors())

//Database conection 
connection()
app.use('/',router)
//API creation
app.get('/',(req,res)=>
{
    res.send("Welcome")
})
//Image Storage engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})
//Creating Upload
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
//Scheama for creating products


app.listen(port,()=>{
    console.log(`Server is Runing on ${port}`);
})

