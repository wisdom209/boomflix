import React from 'react'
import { Box, Hidden } from '@mui/material'
import BackgroundHeroImg from '../home/BackgroundHeroImg'
import { MovieInfoBoxNoCast } from '../media/MediaDescription'
import CastSwiper from './CastSwiper'

const styles = {
	box: {
		height: '100vh',
		marginBottom: '50px',
		width: '100vw'
	}
}

const HeroBackground = ({ children }) => {

	return (
		<>
			<Box sx={styles.box} style={{ color: 'white', overflowX: 'hidden' }}>
				<BackgroundHeroImg img='/mario.jpeg' />

				{children}
				
			</Box>
			<Hidden mdUp>
				
				<MovieInfoBoxNoCast />
				
				<Box m={2} />
				
				<CastSwiper width='30em'/>
				

			</Hidden>

		</>
	)
}

export default HeroBackground
