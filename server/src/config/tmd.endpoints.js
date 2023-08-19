const endPoints = (mediaType, mediaId) => {
	return {
		"trending": `/trending/${mediaType}/week`,
		"popular": `/${mediaType}/popular/`,
		"top-rated": `/${mediaType}/top_rated`,
		"video": `/${mediaType}/${mediaId}/videos`,
		"genres": `/genre/${mediaType}/list`,
		"credits": `/${mediaType}/${mediaId}/credits`,
		"person": `/person/${mediaId}`,
		"personCredits": `/person/${mediaId}/${mediaType}_credits`,
		"search": `/search/${mediaType}`,
		"details": `/${mediaType}/${mediaId}`,
		"similar": `/${mediaType}/${mediaId}/similar`
	}
}


module.exports = endPoints
