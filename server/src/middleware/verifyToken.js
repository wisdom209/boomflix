const jwt = require('jsonwebtoken')
const handleResponse = require('../handler/response.handler')

const verifyToken = async (req, res, next) => {
	try {
		let token = req.headers.authorization
	
		if (token) token = token.split(' ')[1].trim()
		else return handleResponse.unauthorize(res, "invalid token")

		const userDetail = jwt.verify(token, process.env.JWT_SECRET)

		if (!userDetail) return handleResponse.unauthorize(res)

		req.user = userDetail.username

		next()
	} catch (error) {
		console.log('oops')
		return handleResponse.error(res, { error })
	}

}

module.exports = verifyToken
