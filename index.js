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

