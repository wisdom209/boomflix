const favoriteModel = require('../model/favorites.model')
const handleResponse = require('../handler/response.handler')

const addFavorite = async (req, res) => {
	try {
		const mediaId = req.params.mediaId;
		const mediaType = req.params.mediaType;
		const username = req.user

		if (!mediaId || !mediaType || !username) return handleResponse.badRequest(res)

		const favorite = await favoriteModel.findOne({ username, mediaType, mediaId })

		if (favorite) return handleResponse.ok(res, { favorite })

		const newfavorite = new favoriteModel({ username, mediaType, mediaId })

		await newfavorite.save()

		handleResponse.ok(res, newfavorite)

	} catch (error) {
		handleResponse.error(res, error)
	}

}


const removeFavorite = async (req, res) => {

	try {
		const mediaId = req.params.mediaId;
		const mediaType = req.params.mediaType;
		const username = req.user

		if (!mediaId || !mediaType || !username) return handleResponse.badRequest(res)

		let favorite = await favoriteModel.find({ username, mediaType, mediaId })

		if (!favorite) return handleResponse.badRequest(res, "Not a favorite movie")

		const deleted = await favoriteModel.deleteOne({ username, mediaType, mediaId }, { new: true })

		handleResponse.ok(res, deleted)
	} catch (error) {

		handleResponse.error(res, error)
	}

}

const getFavorites = async (req, res) => {
	try {
		const username = req.user;

		const favorites = await favoriteModel.find({ username })

		handleResponse.ok(res, favorites)
	} catch (error) {
		handleResponse.error(res, error)
	}


}

module.exports = { addFavorite, removeFavorite, getFavorites }
