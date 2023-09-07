import React, { useEffect, useState } from 'react'
import { Stack, Typography, Chip, IconButton, Box, Hidden, Button, Card, CardMedia } from "@mui/material"
import CircularRating from '../global/CircularRating'
import { Favorite, FavoriteBorderOutlined, Home } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorites, buildImageUrl, removeFavorite } from '../../api_client/axiosClient'
import { PlayArrow } from '@mui/icons-material'
import { getGenreFromList } from '../home/HeroSwiper'
import { useLocation, useNavigate } from 'react-router-dom'
import useFavorites from '../../hooks/useFavorites'
import { setMediaDetail } from '../../redux/features/appSlice'


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
	let genreList = useSelector(state => state.global.genres)
	const [favorites, setfavorites] = useState([])
	const [loadingFavorite, setLoadingFavorite] = useState(true)
	const [isFavorite, setisFavorite] = useState(false)
	genreList = genreList?.genres || genreList
	const location = useLocation()
	const navigate = useNavigate()
	let type = location.pathname.split('/')[2]
	useFavorites("YOUR FAVORITES", setfavorites, setLoadingFavorite)

	useEffect(() => {
		!loadingFavorite && setfavorites(favorites.filter((v, i) => {
			return v.mediaType == type && v.mediaId == `${mediaDetails.id}`
		}))

	}, [loadingFavorite])

	return (
		<Stack spacing={2}>
			<Stack>
				<Typography variant="h2" color="white" fontSize={40} mt={10} fontWeight={800}>
					{mediaDetails.title || mediaDetails.original_name}
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating={mediaDetails?.vote_average.toFixed(1)} size={50} />
				<Chip label={getGenreFromList(genreList, mediaDetails?.genre_ids)[0]?.name || 'movie'} color="error" />
				<Chip label={getGenreFromList(genreList, mediaDetails?.genre_ids)[1]?.name || 'movie'} color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white">
					{mediaDetails?.overview}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={2} alignItems='center'>

				{!isFavorite && favorites.length == 0 ? <IconButton
					onClick={() => {
						addFavorites(type, mediaDetails.id).then(res => {

							setisFavorite(true)
						})
					}}
				>
					<FavoriteBorderOutlined size="large" color="error" />
				</IconButton> : <IconButton
					onClick={() => {
						removeFavorite(type, mediaDetails.id).then(res => {
							setisFavorite(false)
						})
					}}
				><Favorite size="large" color="error" />
				</IconButton>
				}

				<Stack>
					<Button
						component="a"
						href={type == 'tv' ? `/media/series/${mediaDetails.id}` : `/media/${type}/${mediaDetails.id}`}
						variant="contained"
						sx={{ bgcolor: 'red', width: '200px' }}>
						<PlayArrow /> Watch Now
					</Button>
				</Stack>
			</Stack>
		</Stack>
	)
}

export function MovieInfoBox({ viewType }) {
	const mediaDetails = useSelector(state => state.global.media.mediaDetail)
	let genreList = useSelector(state => state.global.genres)

	genreList = genreList?.genres || genreList
	const location = useLocation()
	const navigate = useNavigate()
	let navigate_to = false;

	if (location.pathname.split('/')[1] === 'view') {
		navigate_to = '#view_section'
	}
	let type = location.pathname.split('/')[2]

	const [favorites, setfavorites] = useState([])
	const [loadingFavorite, setloadingFavorite] = useState(true)
	const [isFavorite, setisFavorite] = useState(false)
	useFavorites("YOUR FAVORITES", setfavorites, setloadingFavorite)

	useEffect(() => {
		!loadingFavorite && setfavorites(favorites.filter((v, i) => {
			return v.mediaType == type && v.mediaId == `${mediaDetails.id}`
		}))

	}, [loadingFavorite, isFavorite])


	return (

		<Stack spacing={3}>
			<Stack>
				<Typography variant="h2" color="white" fontSize={40} mt={10} fontWeight={800}>
					{mediaDetails.title || mediaDetails.original_name}
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating={mediaDetails.vote_average?.toFixed(1) || 0.0} size={50} />
				<Chip label={getGenreFromList(genreList, mediaDetails?.genre_ids)[0]?.name || 'movie'} color="error" />
				<Chip label={getGenreFromList(genreList, mediaDetails?.genre_ids)[0]?.name || 'movie'} color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white">
					{mediaDetails.overview}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={2} alignItems='center'>
				{!isFavorite && favorites.length == 0 ? <IconButton
					onClick={() => {
						addFavorites(type, mediaDetails.id).then(res => {
							setisFavorite(true)
						})
					}}
				>
					<FavoriteBorderOutlined size="large" color="error" />
				</IconButton> : <IconButton
					onClick={() => {
						removeFavorite(type, mediaDetails.id).then(res => {
							setisFavorite(false)
						})
					}}
				><Favorite size="large" color="error" />
				</IconButton>
				}
				<Stack>
					<Button
						component="a"
						href={!navigate_to ? '#video_section' : type == 'tv' ? `/media/series/${mediaDetails.id}` : `/media/${type}/${mediaDetails.id}`}
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


const MediaDescription = ({ media }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (media) {
			dispatch(setMediaDetail(media))
		}
	}, [media])

	const mediaDetails = useSelector(state => state.global.media.mediaDetail) || media

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
								width: { xs: '28rem', sm: '40rem' },
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
