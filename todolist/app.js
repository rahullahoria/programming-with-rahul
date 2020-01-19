var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/todolist");
mongoose.connection.on('connected',()=>{
    console.log("connected");
})
app.use(cors());

app.use(bodyparser.json());

app.use('/tasks',require("./routes/todolist"))

app.get('/', (req, res) => {
    res.send("welcome")
});

app.listen(port, () => {
    console.log("server is started on port:: ", port);
})