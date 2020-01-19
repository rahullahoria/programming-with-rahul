const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
},{ timestamps: true })

const task = module.exports = mongoose.model('tasks',taskSchema)