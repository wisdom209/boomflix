const endPoints = (mediaType, mediaId) => {
	return {
		"trending": `/trending/${mediaType}/week`,
		"popular": `/${mediaType}/popular/`,
		"top-rated": `/${mediaType}/top_rated`,
		"video": `/${mediaType}/${mediaId}/watch/providers`,
		"genres": `/genre/${mediaType}/list`,
		"credits": `/${mediaType}/${mediaId}/credits`,
		"search": `/search/${mediaType}`,
		"details": `/${mediaType}/${mediaId}`
	}
}


module.exports = endPoints
