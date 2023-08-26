import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCast, getGenres, getMediaDetail, getSimilar, getVideos } from '../api_client/axiosClient'
import { setGenres, setMediaDetail, setSimilar, setVideo } from '../redux/features/appSlice'
import { useState } from "react"
import { useLocation } from 'react-router-dom'

const useFetchMedia = () => {

	const dispatch = useDispatch()
	const [isLoaded, setIsLoaded] = useState(false)

	const location = useLocation()

	let mediaType = location.pathname.split('/')[2]
	const mediaId = location.pathname.split('/')[3]
	mediaType == 'series' ? mediaType = 'tv' : mediaType = 'movie'


	useEffect(() => {
		getMediaDetail(mediaType, mediaId).then(response => {
		
			getCast(mediaType, mediaId).then(resp => {
				const cast = resp.data.cast
				response.data['cast'] = cast
				dispatch(setMediaDetail(response.data))

				getVideos(mediaType, mediaId).then(response => {
					dispatch(setVideo(response.data))

					getSimilar(mediaType, mediaId).then(response => {
						response.data.mediaTYPE = mediaType
						response.data.mediaID = mediaId
						dispatch(setSimilar(response.data))
						
						getGenres(mediaType).then(response => {
							dispatch(setGenres(response.data))
							if (response.data.error)
								setIsLoaded(false)
							else
								setIsLoaded(true)
						})

					})
				})

			})

		})

	}, [location])

	return [isLoaded];
}

export default useFetchMedia
