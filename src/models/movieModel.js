import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const movieSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    imdb_score: {
        type: Number,
        required: true
    },

    popularity: {
        type: Number,
        required: true
    },

    director: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});