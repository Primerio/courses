import mongoose from "mongoose"

const User = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    isAuthor: {
        type: Boolean,
        default: false
    }
})

mongoose.model('User', User)