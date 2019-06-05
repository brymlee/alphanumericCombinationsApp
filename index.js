exports.alphanumericCombinationsApp = (request, response) => {
	let message = request.query.message || request.body.message || 'Hello World'
	response.status(200).send(message)
}
