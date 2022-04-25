import mongoose from "mongoose";
const Schema = mongoose.Schema

const ItinerarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
})

const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = Itinerary