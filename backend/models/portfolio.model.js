import mongoose, { Schema } from "mongoose";

const portfolioSchema = new Schema({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    live: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Portfolio', portfolioSchema);