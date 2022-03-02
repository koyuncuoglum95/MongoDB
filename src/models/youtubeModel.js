import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const youtubeSchema = new Schema({

    username: {
        type: String,
        required: 'Enter Username Please !'
    },

    liked: {
        type: Number
    },

    disliked: {
        type: Number
    },
    
    comments: {
        type: String
    },

    created_date: {
        type: Date,
        default: Date.now
    }
})