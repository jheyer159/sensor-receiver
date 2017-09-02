var Emitter = require('../index.js')
var server = require('../server.js')

describe('Data Emitter', function(){
    it('errors properly', function(){
        spyOn( Emitter, 'on')
        expect( function(){
            Emitter.emit('error', new Error("Whoops"))
        }).toThrow()
    }),

    it('receives data', function(){
        spyOn( Emitter, 'on')
        expect( function(){
            Emitter.emit('data', JSON.stringify({"test": "json"}))
        }).toBe({"test": "json"})
    })
}),

describe('Server', function(){
    it('listens on a port', function(){

    })
})
