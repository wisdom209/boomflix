import React from 'react'
import { Box, Paper, Stack, makeStyles } from '@mui/material'
import BackgroundHeroImg from '../home/BackgroundHeroImg'
import MediaDescription from '../media/MediaDescription'

const styles = {
	image: {
		height: '450px',
		width: '500px',
		marginTop: '100px',
	},
	box: {
		height: '100vh',
		display: 'flex',
		direction: 'column',
		justifyContent: 'start',
		alignItems: 'center',
		marginBottom: '100px'
	}
}

const HeroBackground = ({ children }) => {

	return (
		<Box sx={styles.box}>
			<BackgroundHeroImg img='/mario.jpeg' />
			
			{children}
			
		</Box>
	)
}

export default HeroBackground
