const axios = require('axios')
const dotenv = require('dotenv')

const get_media_client = (endPoint, params) => {
	const base = process.env.TMDB_BASE_URL
	const token = process.env.TMDB_API_KEY

	return axios.get(base + endPoint, {
		baseUrl: process.env.TMDB_BASE_URL,
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': "application/json"
		},
		params
	}).then((response) => {
		return response.data
	}).catch(error => {
		return { error }
	})
}

module.exports = get_media_client
