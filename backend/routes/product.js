// importing router from express.
const router = require('express').Router()
// import the product schema
let Product = require('../models/product.model')

// if the router (http url) is ended with '/add' it will post to MongoDB
router.route('/add').post((req,res)=>{
    // getting data from the request, and setting values according to the schema
    const name = req.body.name;
    const serial = req.body.serial;
    const price = Number(req.body.price);
    const size = req.body.size;
    const gender = req.body.gender;
    const color = req.body.color;
    const imagesUri = req.body.imagesUri;

    // createing a new instance of Product (which is instance of Schema eventually)
    // passing it the data.
    const newProduct = new Product ({
        name,
        serial,
        price,
        size,
        gender,
        color,
        imagesUri
    })
    // saving it to the MongoDB database => returns a promise so i need to do '.then' and 'catch'
    newProduct.save()
        .then(() => res.json("item added"))
        .catch(err => res.status(400).json(err))
})

// if the route end with just '/' it will get everything from the database that is a product
router.route('/').get((req,res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => {if (err) throw err})
})
// exporting it so i can use it
module.exports = router