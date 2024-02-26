const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    winery: {
        type: String, 
        required: true
    },
    wine: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String, 
        required: true
    }, 
    stock: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    status: {
        type:Boolean,
        required: true
    },
    code: {
        type: String, 
        unique: true,
        required: true
    },
    thumbnails: {
        type: [String]
    }
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel; 