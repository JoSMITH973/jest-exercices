const {hello} = require('./HelloWorld')

describe('Hello World Test', () => {
    test('say Hello World', () => {
        expect(hello()).toBe('Hello, World!')
    })
})