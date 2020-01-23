const assert = require('assert')
const mocha = require('mocha')

mocha.describe('some tests', () => {
  mocha.it('should provide a http port', () => {
    assert.equal(process.env.CONSUMER_ADDRESS !== undefined, true)
  })
})