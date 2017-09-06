const EventEmitter = require('events')

class Emitter extends EventEmitter {}

const dataEmitter = new Emitter()

dataEmitter.on('data', function(data){
    console.log("data: ", JSON.stringify(data))
})
dataEmitter.on('error', function(err){
    let error = new Date() + ": dataEmitter - " + err
    throw error
})

module.exports = dataEmitter