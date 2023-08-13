import React from 'react'
import { Stack, Typography, Chip, IconButton, Box, Hidden, Button, Card, CardMedia } from "@mui/material"
import CircularRating from '../global/CircularRating'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { buildImageUrl } from '../../api_client/axiosClient'
import { PlayArrow } from '@mui/icons-material'
import { useState } from 'react'


const styles = {
	backgroundOverlay: {
		minHeight: '100%',
		width: '100vw',
		background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent)',
		position: 'relative',
		zIndex: 1,
		border: 'transparent'
	},
	image: {
		height: '450px',
		width: '45rem',
		marginTop: '130px',
	},
	box: {
		width: '100em',
		marginTop: '50px'

	}
}

export function MovieInfoBoxNoCast() {

	const mediaDetails = useSelector(state => state.global.media.mediaDetail)

	return (
		<Stack spacing={2}>
			<Stack>
				<Typography variant="h2" color="white" fontSize={40} mt={10} fontWeight={800}>
					{mediaDetails.title || mediaDetails.original_name}
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating={mediaDetails?.vote_average.toFixed(1)} size={50} />
				<Chip label={mediaDetails?.genres[0].name || 'movie'} color="error" />
				<Chip label={mediaDetails?.genres[1].name || 'movie'} color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white">
					{mediaDetails?.overview}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={2} alignItems='center'>
				<IconButton>
					<FavoriteBorderOutlined size="large" color="error" />
				</IconButton>

				<Stack>
					<Button
						component="a"
						href="video_section"
						variant="contained"
						sx={{ bgcolor: 'red', width: '200px' }}>
						<PlayArrow /> Watch Now
					</Button>
				</Stack>
			</Stack>
		</Stack>
	)
}

export function MovieInfoBox() {
	const mediaDetails = useSelector(state => state.global.media.mediaDetail)

	return (

		<Stack spacing={3}>
			<Stack>
				<Typography variant="h2" color="white" fontSize={40} mt={10} fontWeight={800}>
					{mediaDetails.title || mediaDetails.original_name}
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating={mediaDetails.vote_average.toFixed(1)} size={50} />
				<Chip label={mediaDetails.genres[0].name || 'movie'} color="error" />
				<Chip label={mediaDetails.genres[1].name || 'movie'} color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white">
					{mediaDetails.overview}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={2} alignItems='center'>
				<IconButton>
					<FavoriteBorderOutlined size="large" color="error" />
				</IconButton>

				<Stack>
					<Button
						component="a"
						href='#video_section'
						variant="contained"
						sx={{ bgcolor: 'red', width: '200px' }}>
						<PlayArrow /> Watch Now
					</Button>
				</Stack>
			</Stack>
		</Stack>);
}


function MediaSubDesc() {
	return (<Box style={styles.box}>
		<MovieInfoBox />
	</Box>);
}


const MediaDescription = () => {
	const mediaDetails = useSelector(state => state.global.media.mediaDetail)
	const poster = buildImageUrl(mediaDetails.poster_path)

	return (
		< Box style={styles.backgroundOverlay} >
			<Hidden mdDown >
				<Stack zIndex={1} direction="row" spacing={2} ml={5} >

					<img style={styles.image} src={poster} />

					<MediaSubDesc />

				</Stack>
			</Hidden>
			<Hidden mdUp >
				<Stack zIndex={1} ml={2}  >
					<Card style={{ background: 'transparent' }}>
						<CardMedia
							sx={{
								height: '450px',
								width: { xs: '28rem', sm: '40rem'},
								marginTop: '130px',
							}}
							component='img'
							src={poster}
						/>
					</Card>

				</Stack>
			</Hidden>
		</Box >
	)

}

export default MediaDescription
