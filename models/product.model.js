const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    }
})

const product = mongose.model('product', ProductSchema)

module.exports = product