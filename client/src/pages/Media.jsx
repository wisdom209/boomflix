import React, { useEffect } from 'react'
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"
import HeroBackground from '../components/media/HeroBackground'
import MediaDescription from '../components/media/MediaDescription'
import { useDispatch } from 'react-redux'
import { getCast, getMediaDetail, getSimilar, getVideos } from '../api_client/axiosClient'
import { setMediaDetail, setSimilar, setVideo } from '../redux/features/appSlice'
import Loading from './Loading'
import { useState } from "react"
import MediaList from '../components/media/MediaList'

const Media = () => {
	const dispatch = useDispatch()
	const [isLoaded, setIsLoaded] = useState(false)
	const mediaType = 'movie'
	const mediaId = 569094

	useEffect(() => {
		getMediaDetail('movie', 569094).then(response => {

			getCast('movie', 569094).then(resp => {
				const cast = resp.data.cast
				response.data['cast'] = cast
				dispatch(setMediaDetail(response.data))

				getVideos(mediaType, mediaId).then(response => {
					dispatch(setVideo(response.data))

					getSimilar(mediaType, mediaId).then(response => {
						dispatch(setSimilar(response.data))
						if (response.data.error)
							setIsLoaded(false)
						else
							setIsLoaded(true)
					})
				})

			})

		})

	}, [])

	return (
		<>
			{isLoaded ?
				<>
					<Header />
					<HeroBackground>
						<MediaDescription />
					</HeroBackground>
					<MediaList />
					<Footer />
				</> : <Loading />
			}
		</>
	)
}

export default Media
