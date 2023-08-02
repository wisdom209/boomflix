const responseHandler = require('./response.handler')
const { validationResult } = require('express-validator')

const requestHandler = (req, res, next) => {
	const error = validationResult(req);
	if (error.isEmpty()) {
		next()
	} else {
		let errorMsg = error.array()[0].msg;
		return responseHandler.badRequest(res,errorMsg )
	}
}

module.exports = requestHandler
