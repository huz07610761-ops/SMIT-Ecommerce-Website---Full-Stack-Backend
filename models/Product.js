const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            trim: true
        },

        price: {
            type: Number,
            required: [true, "Please enter your product price"],
            min: 0
        },

        delPrice: {
            type: Number,
            min: 0
        },

        rating: {
            type: Number,
            min: 0,
            max: 5
        },

        img: {
            type: String,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        size: {
            type: String,
            trim: true
        },

        // Multiple colors
        colors: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const ProductModel =
    mongoose.models.Products ||
    mongoose.model('Products', ProductSchema);

module.exports = ProductModel;