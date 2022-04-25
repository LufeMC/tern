import express from "express";
const userModel = require("../models/User");

const router = express.Router()

router.post('/register', async (req, res) => {
    const user = new userModel(req.body)

    try {
        await user.save()
        res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.post('/login', async (req, res) => {
    const user = await userModel.find({email: req.body.email, password: req.body.password})
    console.log(req.body,user)
    try {
        res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router