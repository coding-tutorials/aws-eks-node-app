const assert = require('assert')
const mocha = require('mocha')

mocha.describe('some tests', () => {
  mocha.it('should provide a http port', () => {
    assert.equal(process.env.HTTP_PORT !== undefined, true)
  })
})