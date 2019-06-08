const read = require('read-file')
const factorial = require('./index.js').factorial
const counter = require('./index.js').counter
test('sanity check', () => expect(1).toBe(1))
test('when counting and target is 1 and base is 10 then should return 2', () => expect(counter(1, 10)).toBe('2'))
test('when counting and target is 9 and base is 16 then should return A', () => expect(counter(9, 16)).toBe('A'))
test('when counting and target is A and base is 16 then should return B', () => expect(counter('A', 16)).toBe('B'))
test('when counting and target is 19 and base is 16 then should return 1A', () => expect(counter(19, 16)).toBe('1A'))
