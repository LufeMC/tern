import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    itineraries: [{
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }]
})

const User = mongoose.model('User', UserSchema);

module.exports = User