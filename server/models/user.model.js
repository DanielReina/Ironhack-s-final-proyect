const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,        
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        // required: true,
        default: 'Desconocido',
        set: text => text.charAt(0).toUpperCase()+ text.substring(1)
    },
    lastName: {
        type: String,
        default: 'Desconocido',
        set: text => text.charAt(0).toUpperCase()+ text.substring(1)      
    },
    avatar:{
        type: String
    },
    email: {
        type: String,
        // required: true,
        // unique: true, 
        // match:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ 
    },
    role: {
        type: String,
        enum: ['ADMIN', 'NORMAL'],
        default: 'NORMAL'
    },
    currentAuctions:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'  
    }],
    wonAuctions:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'  
    }],
    unwinnedAuctions:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'  
    }],
    productsToSell:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'  
    }]
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
