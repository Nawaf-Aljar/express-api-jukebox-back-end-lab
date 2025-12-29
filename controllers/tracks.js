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
router.get("/", async (req, res) => {
    try {
        const tracks = await Track.find({})
        res.status(200).json({ tracks })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to get tracks" })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const track = await Track.findById(id)
        if (!track) {
            res.status(404).json({ err: "track not found" })
        }
        else {
            res.status(200).json({ track })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to get track" })
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const track = await Track.findByIdAndDelete(id)
        if (!track) {
            res.status(404).json({ err: "track not found" })
        }
        else {
            res.status(200).json({ track })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to delete" })
    }
})
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const track = await Track.findByIdAndUpdate(id, req.body,{new: true})
        if (!track) {
            res.status(404).json({ error: "Track not found" })
        }
        else {
            res.status(200).json({ track })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to update" })
    }
})
module.exports = router