import React from 'react'
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"
import HeroBackground from '../components/media/HeroBackground'
import MediaDescription from '../components/media/MediaDescription'
import Loading from './Loading'
import MediaList from '../components/media/MediaList'
import { Box } from '@mui/material'
import useFetchMedia from '../hooks/useFetchMedia'

const Media = () => {
	
	const [isLoaded] = useFetchMedia();

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
