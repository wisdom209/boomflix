import axios from "axios";
import Cookies from "js-cookie";

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

export const getMediaDetail = (media_Type, media_Id) => {
	try {
		return axios.get(baseUrl + `/details/${media_Type}/${media_Id}`)
	} catch (error) {
		return { error }
	}
}
export const getCast = (media_Type, media_Id) => {
	try {
		return axios.get(baseUrl + `/credits/${media_Type}/${media_Id}`)
	} catch (error) {
		return { error }
	}
}

export const getVideos = (media_Type, media_Id) => {
	try {
		return axios.get(baseUrl + `/video/${media_Type}/${media_Id}`)
	} catch (error) {
		return { error }
	}
}

export const getSimilar = (media_Type, media_Id) => {
	try {
		return axios.get(baseUrl + `/similar/${media_Type}/${media_Id}`)
	} catch (error) {
		return { error }
	}
}

export const getPerson = (media_Id) => {
	try {
		return axios.get(baseUrl + `/person/${media_Id}`)
	} catch (error) {
		return { error }
	}
}

export const getPersonCredits = (media_Type, media_Id) => {
	try {
		return axios.get(baseUrl + `/personCredits/${media_Type}/${media_Id}`)
	} catch (error) {
		return { error }
	}
}

/* User functions */

export const loginUser = (username, password) => {
	try {
		return axios.post(baseUrl + '/login', { username, password })
	} catch (error) {
		return ({ error })
	}
}
export const registerUser = (username, password) => {
	try {
		return axios.post(baseUrl + '/register', { username, password })
	} catch (error) {
		return ({ error })
	}
}


/* get Favorites */

export const getFavorites = () => {
	try {
		return axios.get(baseUrl + '/favorites',
			{ headers: { Authorization: `Bearer ${Cookies.get('token')}` } })
	} catch (error) {
		console.log(error.message)
		return ({ error })
	}
}

export const removeFavorite = (media_Type, media_Id) => {
	try {
		return axios.delete(baseUrl + `/favorite/${media_Type}/${media_Id}`,
			{
				headers: {
				Authorization: `Bearer ${Cookies.get('token')}`
			}
		})
	} catch (error) {
		return ({ error })
	}
}


/* add Reviews */
export const addReview = (mediaType, mediaId, body) => {
	try {
		const data = { 'review': body };
		return axios.post(baseUrl + `/review/${mediaType}/${mediaId}`,
			data, {
			headers: {
				Authorization: `Bearer ${Cookies.get('token')}`
			}
		})
	} catch (error) {
		return ({ error })
	}
}

export const getReviews = (mediaType, mediaId) => {
	try {
		return axios.get(baseUrl + `/review/${mediaType}/${mediaId}`);
	} catch (error) {
		return ({error})
	}
}

export const removeReview = (mediaId) => {
	try {
		return axios.delete(baseUrl + `/review/${mediaId}`,
			{
				headers: {
				Authorization: `Bearer ${Cookies.get('token')}`
			}
		})
	} catch (error) {
		return ({ error })
	}
}


export const getAllReviews = () => {
	try {
		return axios.get(baseUrl + `/reviews/all`);
	} catch (error) {
		return ({error})
	}	
}
