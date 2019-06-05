const read = require('read-file')
const math = require('mathjs')
const factorial = require('./index.js').factorial
const combinations = require('./index.js').combinations
test('sanity check', () => expect(1).toBe(1))
test('when converting index.html to string then should contain html', () => {
	read('index.html', 'utf8', (error, buffer) => {
		expect(buffer.toString()).toContain('<html>')
	})
})
test('when getting the factorial of 4 then we should get 24', () => expect(factorial(4)).toBe(24))
test('when getting the factorial of 3 then we should get 6', () => expect(factorial(3)).toBe(6))
test('when getting the factorial of 0 then we should get 1', () => expect(factorial(0)).toBe(1))
test('when getting the combinations of 52 with a count of 5 then we should get the factorial of 47', () => {
	console.log(typeof math.eval('47!'))
	expect(math.eval('52! / (5!(47!))')).toBe(math.eval('47!'))
})


