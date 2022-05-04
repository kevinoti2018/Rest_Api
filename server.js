const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/RestApi',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('connected...')
})

const ProductRoute = require('./routes/product.route')
app.use('/products',ProductRoute)

app.all('/test/:id',(req,res)=>{
//    console.log(req.query)
//     res.send(req.query);
    console.log(req.params)
    res.send(req.params)
})
app.use((req,res,next)=>{
   const err = new Error('not found')
   err.status = 404
   next(err)
})
// err handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error: err.status || 500,
        message: err.message
    })
})

app.listen('3003',()=>{
    console.log('server started..')
} )

