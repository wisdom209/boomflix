import React from 'react'
import { Box, Paper, Stack, makeStyles } from '@mui/material'
import BackgroundHeroImg from '../home/BackgroundHeroImg'
import MediaDescription from '../media/MediaDescription'

const styles = {
	backgroundOverlay: {
		height: '100vh',
		width: '300vw',
		background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent)',
		position: 'relative',
		zIndex: 1,
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	image: {
		height: '450px',
		width: '500px',
		marginTop: '100px',
	},
	box: {
		height: '100vh',
		display: 'flex',
		direction: 'column',
		justifyContent: 'end',
		alignItems: 'center'
	}
}

const HeroBackground = () => {

	return (
		<Box sx={styles.box}>
			<BackgroundHeroImg img='/mario.jpeg' />
			<Box style={styles.backgroundOverlay}>

				<Stack p={5} zIndex={1} direction="row" spacing={2} ml={5} >

					<img style={styles.image} src="/jetli.jpeg" />

					<Box style={{ marginTop: '100px' }}>
						<MediaDescription />
					</Box>

				</Stack>
			</Box>

		</Box>
	)
}

export default HeroBackground
