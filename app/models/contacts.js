/*
contacts.js YUN KI JUNG - 301189435 - Oct 21, 2022
*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    phone: String, 
    email: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);