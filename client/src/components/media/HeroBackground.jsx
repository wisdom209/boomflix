import React from 'react'
import { Box, Hidden } from '@mui/material'
import BackgroundHeroImg from '../home/BackgroundHeroImg'
import { MovieInfoBoxNoCast } from '../media/MediaDescription'
import CastSwiper from './CastSwiper'
import { useSelector } from 'react-redux'
import { buildImageUrl } from '../../api_client/axiosClient'

const styles = {
	box: {
		height: '100vh',
		marginBottom: '50px',
		width: '100vw',
	}
}

const HeroBackground = ({ children }) => {
	const mediaDetail = useSelector(state => state.global.media.mediaDetail)
	const backdrop = buildImageUrl(mediaDetail.backdrop_path)
	return (
		<>
			<Box sx={styles.box} style={{ color: 'white', overflowX: 'hidden' }}>
				<BackgroundHeroImg img={backdrop}/>

				{children}
				
			</Box>
			<Hidden mdUp>
				
				<MovieInfoBoxNoCast />
				
				<Box m={8} />
				
				<CastSwiper width='30em'/>
				
				<Box m={8} />
			</Hidden>

		</>
	)
}

export default HeroBackground
