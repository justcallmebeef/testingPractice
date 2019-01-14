const assert = require('chai').assert 
const app = require('./app.js')
const user = {
    name: ''
}

describe('user', () => {
    it('should be an object', () => {
        assert.typeOf(user, 'object')
    })
    it('should have a name', () => {
        assert.equal(user.name, '')
    })
})

describe('sum', () => {
    it('should return number 3', () => {
        assert.equal(app.sum(), 2)
    })
})