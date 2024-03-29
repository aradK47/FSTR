const mongoose = require('mongoose')

// creating a schema for product here
const Schema = mongoose.Schema

var ProductSchema = new Schema ({
    name: {type: String, required: true},
    serial: {type: String, required: true},
    price:  {type: Number, required: true},
    gender: {type: String, required: true},
    color: {type: Array, required: true},
    size: {type: Array, required: true},
    imagesUri: {type: Array,  required: true}
},{
    timestamps: true
})

var Product = mongoose.model("Product", ProductSchema)

module.exports = Product