const express = require("express")
const Track = require("../models/tracks")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const track = await Track.create(req.body)
        res.status(201).json({ track })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "failed to create truck" })
    }

})

module.exports = router