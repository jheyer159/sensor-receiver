const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const dataEmitter = require("./emitter")

var jsonParser = bodyParser.json({limit: '5mb'})

app.post("/", jsonParser, function(req, res){
    if( Object.keys(req.body).length != 0) {
        dataEmitter.emit('data', req.body)
        res.status(200).send("Success")
    }
    else {
        dataEmitter.emit("error", "Invalid request")
        res.status(500) 
    }
})

let port = process.env.SENSOR_PORT || "9191" 

app.listen( port, function(){
    console.log("Sensor server listening on: " + port)
})

module.exports = app