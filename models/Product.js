const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter your product price"]
    },
    delPrice: {
        type: Number
    },
    rating: {
        type: Number
    },
    img: {
        type: String
    },
    description:{
        type:String
    },
    size:{
        type:String
    },
    colour:{
        type:String
    }
});

const UserModel = mongoose.models.Products || mongoose.model('Products', ProductSchema);

module.exports = UserModel;