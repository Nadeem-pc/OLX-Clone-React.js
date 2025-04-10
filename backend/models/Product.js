const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    // category: { 
    //     type: String, 
    //     required: true 
    // },

    // sqft: { 
    //     type: String, 
    // },

    // price: { 
    //     type: Number, 
    //     required: true 
    // },

    // description: {
    //     type: String, 
    //     required: true 
    // },


    // image: { 
    //     type: String,
    //     required: true 
    // }, 

    // username: { 
    //     type: String, 
    //     required: true 
    // },

    // location: {
    //     type: String, 
    //     required: true 
    // },

    // createdAt: { 
    //     type: Date, 
    //     default: Date.now() 
    // }

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