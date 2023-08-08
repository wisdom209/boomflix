import React from 'react'
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"
import MediaList from '../components/media/MediaList'
import HeroBackground from '../components/media/HeroBackground'
import { Box } from '@mui/material'
import MediaDescription from '../components/media/MediaDescription'


const Media = () => {
	return (
		<>
			<Header />
			<HeroBackground>
				<MediaDescription />
			</HeroBackground>
			<MediaList />
			<Footer />
		</>
	)
}

export default Media
