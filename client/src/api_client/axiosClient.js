import axios from "axios";

const baseUrl = 'http://localhost:5000'


export const getTrending = async (mediaType) => {
	try {
		return axios.get(baseUrl + `/trending/${mediaType}`)
	} catch (error) {
		return { error }
	}
}

export const getPopularMovies = async () => {
	try {
		return axios.get(baseUrl + `/popular/movie`)
	} catch (error) {
		return { error }
	}
}

export const getPopularSeries = async () => {
	try {
		return axios.get(baseUrl + `/popular/tv`)
	} catch (error) {
		return { error }
	}
}

export const getTopratedMovies = async () => {
	try {
		return axios.get(baseUrl + `/top-rated/movie`)
	} catch (error) {
		return { error }
	}
}

export const getTopratedSeries = async () => {
	try {
		return axios.get(baseUrl + `/top-rated/tv`)
	} catch (error) {
		return { error }
	}
}

export const buildImageUrl = (image_path) => {
	return `https://image.tmdb.org/t/p/original${image_path}`
}


export const getGenres = (media_Type) => {
	try {
		return axios.get(baseUrl + `/genres/${media_Type}`)
	} catch (error) {
		return { error }
	}
}
