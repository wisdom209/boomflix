const mongoose = require('mongoose')
const modelOptions = require('../model/options.model')

const reviewSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	mediaType: {
		type: String,
		required: true,
		enum: ['tv', 'movie']
	},
	mediaId: {
		type: String,
		required: true
	},
	review: {
		type: String,
		required: true
	}
}, modelOptions)

const reviewModel = mongoose.model("Review", reviewSchema)

module.exports = reviewModel
