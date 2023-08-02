const jwt = require('jsonwebtoken')
const handleResponse = require('../handler/response.handler')
const userModel = require('../model/user.model')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
	try {

		const { username, password } = req.body

		if (!username || !password) return handleResponse.badRequest(res)

		let user = await userModel.findOne({ username })

		console.log(user)

		if (user) return handleResponse.badRequest(res, "user already exists")

		user = new userModel({ username, password })

		await user.save()

		user.password = undefined

		handleResponse.ok(res, user)
	}
	catch (error) {

		handleResponse.error(res, error)
	}
}


const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) return handleResponse.badRequest(res)

		const user = await userModel.findOne({ username }).select('+password')

		if (!user) return handleResponse.unauthorize(res)

		const isValidPassword = bcrypt.compareSync(password, user.password)

		if (!isValidPassword) return handleResponse.unauthorize(res, "invalid credentials")

		const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' })

		handleResponse.ok(res, { username, token })
	} catch (error) {
		handleResponse.error(res, error.message)
	}
}


const updatePassword = async (req, res) => {
	try {
		const { password, newPassword } = req.body;

		const username = req.user;

		if (!username || !password || !newPassword) return handleResponse.badRequest(res)

		const user = await userModel.findOne({ username }).select('+password')

		if (!user) return handleResponse.unauthorize(res)

		const isValidPassword = bcrypt.compareSync(password, user.password)

		if (!isValidPassword) return handleResponse.unauthorize(res, "invalid credentials")

		user.password = newPassword

		await user.save()

		handleResponse.ok(res, "password updated")

	} catch (error) {
		handleResponse.error(res, error.message)
	}
}

module.exports = { register, login, updatePassword }
