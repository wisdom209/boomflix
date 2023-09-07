import React,{useEffect} from 'react'
import { getFavorites, getMediaDetail } from '../api_client/axiosClient';

const useFavorites = (expectedDetail, setMedia, setLoading) => {
	useEffect(() => {
		if (expectedDetail === 'YOUR FAVORITES') {
			getFavorites().then(response => {
				const promises = response.data.map((v, i) => getMediaDetail(v.mediaType, v.mediaId));

				Promise.allSettled(promises).then(responses => {

					responses.map((v, i) => {
						response.data[i].details = v.value.data;
					})
					setMedia(response.data);
					setLoading(false)
				})

			}).catch(e => {
				console.log(e)
			})
		}
	}, [expectedDetail])
}

export default useFavorites
