const request   = require('supertest')
    , server    = require('../server')

describe("Server", function(){
    it("should accept json POST", function(done){
        request(server).post("/")
        .send({data: "WHOA MAN"})
        .expect(200)
        .expect("Success", done)
    })

    it("should fail bad json POST", function(done){
        request(server).post("/")
        .send("BAD")
        .expect(500, done)
    })
})