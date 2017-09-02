const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const dataEmitter = require("./index.js")

var jsonParser = bodyParser.json({limit: '5mb'})

app.post("/", jsonParser, function(req, res){
    try {
        dataEmitter.emit('data', req.body)
        res.send("Data received successfully")
    }
    catch(e){
        dataEmitter.emit("error", e)
        res.status(500).send("Invalid request: " + e) 
    } 
})

let port = process.env.SENSOR_PORT || "9191" 

app.listen( port, function(){
    console.log("Sensor server listening on: " + port)
})