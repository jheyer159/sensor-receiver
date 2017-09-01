var Emitter = require('../index.js')

describe('Data Emitter', function(){
    it('errors properly', function(){
        spyOn( Emitter, 'on')
        expect( function(){
            Emitter.emit('error', new Error("Whoops"))
        }).toThrow()
    })  
})
