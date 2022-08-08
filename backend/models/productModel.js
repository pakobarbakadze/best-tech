import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        requre: true
    },
    image: {
        type: String,
        requre: true,
    },
    brand: {
        type: String,
        requre: true
    },
    category: {
        type: string,
        requre: true,
    },
    description: {
        type: string,
        requre: true,
    },
    price: {
        type: number,
        requre: true,
        default: 0
    },
},{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product