import React, { useEffect } from 'react'
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"
import HeroBackground from '../components/media/HeroBackground'
import MediaDescription from '../components/media/MediaDescription'
import { useDispatch, useSelector } from 'react-redux'
import { getCast, getGenres, getMediaDetail } from '../api_client/axiosClient'
import { setMediaDetail } from '../redux/features/appSlice'
import Loading from './Loading'
import { useState } from 'react'
import { getGenreFromList } from '../components/home/HeroSwiper'

const Media = () => {
	const dispatch = useDispatch()
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		getMediaDetail('movie', 569094).then(response => {

			getCast('movie', 569094).then(resp => {
				const cast = resp.data.cast
				response.data['cast'] = cast
				dispatch(setMediaDetail(response.data))
				setIsLoaded(true)
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
					{/* <MediaList /> */}
					<Footer />
				</> : <Loading />
			}
		</>
	)
}

export default Media
