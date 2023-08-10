import axios from "axios";

const baseUrl = 'http://localhost:5000'


export const getTrending = async (mediaType) => {
	try {
		return axios.get(baseUrl + `/trending/${mediaType}`)
	} catch (error) {
		return { error }
	}
}

export const buildImageUrl = (image_path)=>{
	return `https://image.tmdb.org/t/p/original${image_path}`
}
