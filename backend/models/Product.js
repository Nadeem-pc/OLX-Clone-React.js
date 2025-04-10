const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category: String,
    sqft: String,
    bathrooms: String,
    bedrooms: String,
    brand: String,
    year: String,
    owners: String,
    KmDriven: String,
    title: String,
    description: String,
    price: String,
    images: [String]
  
});

const Product =  mongoose.model('Product', productSchema)
module.exports=Product