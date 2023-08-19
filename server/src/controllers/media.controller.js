const handleResponse = require('../handler/response.handler')
const endPoints = require('../config/tmd.endpoints')
const mediaAxios = require('../config/tmdb.axiosClient')


const getTrending = async (req, res) => {
	try {

		const mediaType = req.params.mediaType;

		const trendingEndpoint = endPoints(mediaType)['trending']

		const trending = await mediaAxios(trendingEndpoint)

		handleResponse.ok(res, trending)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getPopular = async (req, res) => {
	try {
		const mediaType = req.params.mediaType;

		const popularEndpoint = endPoints(mediaType)['popular']
		const popular = await mediaAxios(popularEndpoint)

		handleResponse.ok(res, popular)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getToprated = async (req, res) => {
	try {
		const mediaType = req.params.mediaType;

		const topratedEndpoint = endPoints(mediaType)['top-rated']
		const toprated = await mediaAxios(topratedEndpoint)

		handleResponse.ok(res, toprated)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getGenres = async (req, res) => {
	try {
		const mediaType = req.params.mediaType;

		const genreEndpoint = endPoints(mediaType)['genres']
		const genre = await mediaAxios(genreEndpoint)

		handleResponse.ok(res, genre)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getSearch = async (req, res) => {
	try {
		const mediaType = req.params.mediaType;
		const searchParams = req.query.searchParams;

		const searchEndpoint = endPoints(mediaType)['search']
		const searchResult = await mediaAxios(searchEndpoint, searchParams)

		handleResponse.ok(res, searchResult)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getVideo = async (req, res) => {
	try {
		const { mediaType, mediaId } = req.params;

		const videoEndpoint = endPoints(mediaType, mediaId)['video']
		let videos = await mediaAxios(videoEndpoint)

		handleResponse.ok(res, videos)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getCredits = async (req, res) => {
	try {
		const { mediaType, mediaId } = req.params;

		const creditEndpoint = endPoints(mediaType, mediaId)['credits']
		const credits = await mediaAxios(creditEndpoint)

		handleResponse.ok(res, credits)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


const getDetails = async (req, res) => {

	try {
		const { mediaType, mediaId } = req.params;

		const detailsEndpoint = endPoints(mediaType, mediaId)['details']
		const details = await mediaAxios(detailsEndpoint)

		handleResponse.ok(res, details)

	} catch (error) {
		handleResponse.error(res, error)
	}
}

const getSimilar = async (req, res) => {

	try {
		const { mediaType, mediaId } = req.params;

		const detailsEndpoint = endPoints(mediaType, mediaId)['similar']
		const details = await mediaAxios(detailsEndpoint)

		handleResponse.ok(res, details)

	} catch (error) {
		handleResponse.error(res, error)
	}
}

const getPerson = async (req, res) => {
	try {
		const { mediaId } = req.params;

		const detailsEndpoint = endPoints(null, mediaId)['person']
		const details = await mediaAxios(detailsEndpoint)

		handleResponse.ok(res, details)

	} catch (error) {
		handleResponse.error(res, error)
	}
}

const getPersonCredits = async (req, res) => {

	try {
		const { mediaType, mediaId } = req.params;

		const detailsEndpoint = endPoints(mediaType, mediaId)['personCredits']
		const details = await mediaAxios(detailsEndpoint)

		handleResponse.ok(res, details)

	} catch (error) {
		handleResponse.error(res, error)
	}
}


module.exports = {
	getTrending, getPopular, getToprated, getSimilar, getPerson,
	getGenres, getVideo, getCredits, getSearch, getDetails, getPersonCredits
}
