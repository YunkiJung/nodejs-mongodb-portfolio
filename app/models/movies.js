/*
movies.js YUN KI JUNG - 301189435 - Oct 21, 2022
*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String, 
    year: String, 
    director: String,
    genre: String,
    runtime: Number
}, {
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);