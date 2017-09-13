const dataEmitter = require("./emitter")

function handlePOST (req, res){
    if (req.get('content-type') != "application/json"){
        dataEmitter.emit("error", "Content-type not JSON")
        res.status(500)
    }
    else if( Object.keys(req.body).length != 0) {
        dataEmitter.emit('data', req.body)
        res.status(200).send("Success")
    }
    else {
        dataEmitter.emit("error", "Invalid request")
        res.status(500) 
    }
}

exports.http = function http(req, res){
    handlePOST(req, res)
}
