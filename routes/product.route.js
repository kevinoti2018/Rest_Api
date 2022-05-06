const express = require('express')
const router = express.Router();
const Product = require('../models/product.model.js')


router.get('/',async(req,res,next)=>{
    try{
        // const results = await Product.find({},{__v:0})
        // const results = await Product.find({},{name:1,_id:0, price:1})
        const results = await Product.find({price:699},{})
        res.send(results)
    }
    catch(error){
        console.log(error.message)
    }
 
})
//creating a new product
router.post('/',async(req,res,next)=>{
    try{
        const product = new Product(req.body);
        const result = await product.save()
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price
    // })
    // product.save()
    // .then(result=>{
    //     console.log(result)
    //     res.send(result)
    // })
    // .catch(err=>{
    //     console.log(err.message)
    // })
    
})
//get a product by id
router.get('/:id',async(req,res,next)=>{
    const id = req.params.id
   try{
    const product = await Product.findById(id)
    res.send(product);
   }catch(error){
       console.log(error.message)
   }
})

//updating
router.patch('/:id',async(req,res,next)=>{
    try{
        const id = req.params.id
        const updates = req.body
        const options = {new:true}
        const result = await Product.findByIdAndUpdate(id,updates,options)
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
})
router.delete('/:id',async(req,res,next)=>{
    const id = req.params.id
try{
        const result = await Product.findByIdAndDelete(id)
         res.send(result)
}catch(error){
    console.log(error.message)
}
})
module.exports = router