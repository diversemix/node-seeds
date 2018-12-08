const should = require('should')
const ProcessArgv = require('./process-argv')

console.log('Testing', require.main.filename)

const defaults = {
    verbose: 'not-set',
    default: 'not-set'
}

let result = ProcessArgv.get(
    [],
    defaults)
result.should.have.property('verbose', 'not-set')
result.should.have.property('default', 'not-set')


result = ProcessArgv.get(
    ['0', '1', '-v', 'chicken'],
    defaults)
result.should.have.property('verbose', true)
result.should.have.property('default', 'chicken')
