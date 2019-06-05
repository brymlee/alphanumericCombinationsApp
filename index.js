const read = require('read-file')
exports.alphanumericCombinationsApp = (request, response) => {
	read('index.html', 'utf8', (error, buffer) => {
		//let message = request.query.message || request.body.message || 'Hello World'
		response
			.status(200)
			.append('Content-Type', 'text/html')
			.send(buffer.toString())
	})
}

exports.factorial = (targetInteger) => {
	const recursiveFactorial = (product, index) => {
		if(index <= 0){
			return product
		}else{
			return recursiveFactorial(product * index, index - 1)
		}
	}
	if(targetInteger === 0){
		return 1
	}else if(targetInteger < 0){
		throw new Error('targetInteger must be a positive integer')
	}else{
		return recursiveFactorial(targetInteger, targetInteger - 1)
	}
}
