import React from 'react'
import { Stack, Typography, Chip, IconButton, Card, CardMedia, CardActionArea, Box } from "@mui/material"
import CircularRating from '../global/CircularRating'
import WatchNowButton from '../global/WatchNowButton'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import RedDivider from '../global/RedDivder'
import CastSwiper from './CastSwiper'

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
		marginTop: '130px',
	},
	box: {
		
		display: 'flex',
		direction: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		translate: '0px 50px',
	}
}

const MediaDescription = () => {
	return (
		<Box style={styles.backgroundOverlay}>

			<Stack p={5} zIndex={1} direction="row" spacing={2} ml={5} >

				<img style={styles.image} src="https://picsum.photos/500" />

				<Box style={styles.box}>
					<Stack spacing={3} mb={5}>
						<Stack>
							<Typography
								variant="h2"
								color="white"
								fontSize={40}
								mt={10}
								fontWeight={800} >
								The Flash 2023
							</Typography>
						</Stack>

						<Stack direction='row' spacing={2}>

							<CircularRating rating='7.5' size={50} />
							<Chip label="Animation" color="error" />
							<Chip label="Family" color="error" />

						</Stack>

						<Stack spacing={2}>
							<Typography color="white" width='50vw'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magni ab est minima, quaerat enim eaque culpa autem aspernatur rem eligendi obcaecati pariatur modi. Quos quas sit natus delectus incidunt.
							</Typography>
						</Stack>
						<Stack direction='row' spacing={2} alignItems='center'>
							<IconButton >
								<FavoriteBorderOutlined size="large" color="error" />
							</IconButton>

							<WatchNowButton />
						</Stack>
						<Stack style={{ height: '200px', width: '55vw' }}>
							<RedDivider />
							<CastSwiper />
						</Stack>
					</Stack>
				</Box>

			</Stack>
		</Box>

	)
}

export default MediaDescription
