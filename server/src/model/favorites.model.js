const mongoose = require('mongoose')
const modelOptons = require('./options.model')

const favoriteSchema = new mongoose.Schema({
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
	}
}, modelOptons)

const favoriteModel = mongoose.model('Favorite', favoriteSchema);
module.exports = favoriteModel


