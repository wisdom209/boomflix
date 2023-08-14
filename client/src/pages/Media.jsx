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
import CastSwiper from '../components/media/CastSwiper'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Media = () => {
	const dispatch = useDispatch()
	const [isLoaded, setIsLoaded] = useState(false)

	const location = useLocation()

	const mediaType = location.pathname.split('/')[2]
	const mediaId = location.pathname.split('/')[3]


	useEffect(() => {
		getMediaDetail(mediaType, mediaId).then(response => {

			getCast(mediaType, mediaId).then(resp => {
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
					<Box />
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
