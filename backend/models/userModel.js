import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requre: true
    },
    email: {
        type: String,
        requre: true,
        unique: true
    },
    password: {
        type: String,
        requre: true
    },
    isAdmin: {
        type: Boolean,
        requre: true,
        default: false
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User