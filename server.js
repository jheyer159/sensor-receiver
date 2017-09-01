const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const dataEmitter = require("index.js")
const jsonLint = require("jsonLint")

var jsonParser = bodyParser.json({limit: '5mb'})

app.post("/", jsonParser, function(req, res){
    try {
        let json = jsonLint.parse(req.body)
        dataEmitter.emit("data", json)
        res.send("Data received successfully")
    }
    catch(e){
        dataEmitter.emit("error", e)
        res.status(500).send("Invalid JSON") 
    }  
})

let port = process.env.SENSOR_PORT || "9191" 

app.listen( port, function(){
    console.log("Sensor server listening on: " + port)
})