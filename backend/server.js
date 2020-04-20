// import express
const express = require('express')
// import mongoose for easy MongoDB access
const mongoose = require('mongoose')
// importing cors
const cors = require('cors')
//import 'dotnev' and conifguring it.
require('dotenv').config()

// init the express
const app = express()
// choosing a port
const PORT = process.env.PORT || 4000
// briniging the url to connect to the MongoDB (the url is in the '.env' file.)
const uri = process.env.ATLAS_URI

// connecting to the mongoDB using mongoose.connect method, passing it the uri, and the dict:
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
// getting the default connection as a variable
var db = mongoose.connection
// catching errors
db.on('error', console.error.bind(console, "connection error"))
// opening a connection to the MongoDB
db.once('open', () => {
    console.log("We are in in 30 seconds! im the fastest hacker!!!!")
})

// using cors (dont really know what it is)
app.use(cors())
// using express.json() because everything will be json
app.use(express.json())

// importing the routes, that is the url i need i send https requests from
const ProductRouter = require('./routes/product')
// using the product router it will look like this : http://localhost:<PORT>/products/<add or nothing>
app.use('/products', ProductRouter)

// telling the server to start listening
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})


