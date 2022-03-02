import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productSchema = new Schema({

    productname: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: 'Enter the category !'
    },
    rate: {
        type: Number,
        required: true
    },

    purchase_date: {
        type: Date,
        default: Date.now
    }
})