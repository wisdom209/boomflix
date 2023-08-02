const mongoose = require('mongoose')
const modelOptons = require('./options.model')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 5,
		unique: true
	},
	password: {
		type: String,
		required: true,
		min: 5,
		unique: true,
		select: false
	}
}, modelOptons)

userSchema.pre('save', function (next) {
	const user = this;
	const passHash = bcrypt.hashSync(this.password, 10)
	this.password = passHash
	next()
})

const userModel = mongoose.model("User", userSchema)
module.exports = userModel
