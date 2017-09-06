const expect = require('chai').expect
const Emitter = require('../emitter')

describe("Emitter", function(){
    it("throws properly formatted error", function(){
        //let spy = sinon.spy(Emitter, "on")
        expect( function(){
            Emitter.emit("error", new Error("Whoops"))
        }).to.throw( new Date() + ": dataEmitter - Error: Whoops" )
    })
})