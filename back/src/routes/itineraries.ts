import express from 'express'
const itineraryModel = require("../models/Itinerary");
const eventModel = require("../models/Event");
const userModel = require("../models/User");

const router = express.Router()

router.get('/list-all/:id', async (req, res) => {
    let itineraries = await itineraryModel.find({})
    const user = await userModel.findOne({_id: req.params.id}).populate('itineraries')
    const ids = user.itineraries.map((itinerary) => itinerary._id.toString())

    itineraries = itineraries.filter((itinerary) => !ids.includes(itinerary._id.toString()))

    try {
        res.send(itineraries)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get('/list/:id', async (req, res) => {
    const user = await userModel.findOne({_id: req.params.id}).populate('itineraries')

    try {
        res.send(user.itineraries)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/connect', async (req, res) => {
    const user = await userModel.findOne({_id: req.body.userId})

    try {
        user.itineraries.push(req.body.itineraryId)
        await user.save()
        res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/new-itinerary', async (req, res) => {
    const events:any = []
    for (const event of req.body.events) {
        const newEvent = new eventModel(event)

        try {
            await newEvent.save()
            events.push(newEvent._id)
        } catch(err) {
            console.log(err)
        }
    }

    req.body.events = events

    const itinerary = new itineraryModel(req.body)

    try {
        await itinerary.save()
        res.send(itinerary)
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router