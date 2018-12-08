const SayPhrase = require('./say-phrase')

// This should be the:  say-phrase.test.js
describe('Test for SayPhrase', function () {

  console.log = jest.fn()

  beforeEach(() => {
    console.log.mockClear()
  })

  it('calls console.log', function () {
    const sp = new SayPhrase()
    sp.say('hello')
    expect(console.log).toHaveBeenCalledTimes(1)
  })
})
