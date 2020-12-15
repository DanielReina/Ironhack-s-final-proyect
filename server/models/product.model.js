const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'Desconocido',
        set: text => text.charAt(0).toUpperCase() + text.substring(1) 
    },
    description: {
        type: String,       
        default: 'Desconocido',
    },
    mainImage: String,
    detailsImages: [String], 
    homePageimages: [String],
    shopImages: [String],
    category: {
        type: String,
        enum: ['Relojes', 'Joyas', 'Arte', 'Otros'],
       
    },
    timeLimit: {
        type: Date

    },
    initialPrice: {
        type: Number,
        default: 0,
    },
    currentBid: {
        type: Number,
        default: 0,
    },
    numberOfBids: {
        type: Number,
        default: 0,
    },
    currentBidder: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    acquiredBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
       
    },
    salesMethod: {
        type: String,
        enum: ['Venta directa', 'Subasta'],
        default: 'Subasta'
    }
},{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;