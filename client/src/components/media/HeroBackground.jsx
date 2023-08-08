import React from 'react'
import { Box, Paper, Stack, makeStyles } from '@mui/material'
import BackgroundHeroImg from '../home/BackgroundHeroImg'
import MediaDescription from '../media/MediaDescription'

const styles = {
	box: {
		height: '100vh',
		marginBottom: '50px',
		width: '100vw'
	}
}

const HeroBackground = ({ children }) => {

	return (
		<Box sx={styles.box} style={{ color: 'white', overflowX: 'hidden'}}>
			<BackgroundHeroImg img='/mario.jpeg' />

			{children}

		</Box>
	)
}

export default HeroBackground
