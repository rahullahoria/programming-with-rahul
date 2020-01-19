const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

var Tasks = require("../models/todolist")


router.get('/', async (req, res, next) => {
    let tasks = await Tasks.find();
    res.json(tasks);

});

router.post('/', async (req, res, next) => {
    try {
        //console.log(req.body)
        let task = await Tasks.create({
            title: req.body.title,
            description: req.body.description
        });
        res.json(task);
    }
    catch (e) {
        console.log("error ", e.mesaage, e.toString());
        res.json({ error: e.mesaage })
    }
});

router.put('/:id', async (req, res, next) => {
    let task = await Tasks.findOneAndUpdate({ _id: ObjectId(req.params.id) }, {
        title: req.body.title,
        description: req.body.description
    }, { upsert: true, new: true });

    res.json(task);
});

router.delete('/:id', async (req, res, next) => {
    let task = await Tasks.deleteOne({ _id: ObjectId(req.params.id) });
    res.json(task);

});


module.exports = router;