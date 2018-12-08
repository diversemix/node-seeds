const should = require('should')
require('should-spies')

const SayPhrase = require('./say-phrase')

console.log('Testing', require.main.filename)
let spy = should.spy.on(console, 'log')
SayPhrase.say('ok')
spy.should.be.calledWith('ok')
