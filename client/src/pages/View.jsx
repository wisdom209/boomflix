import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import ViewMedia from '../components/media/ViewMedia'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { getGenres, getMediaDetail, getPopularMovies, getPopularSeries, getTopratedMovies, getTopratedSeries, getTrending } from '../api_client/axiosClient'
import { setMediaDetail, setPopularMovies, setPopularSeries, setTopratedMovies, setTopratedSeries } from '../redux/features/appSlice'
import Loading from './Loading'


const View = () => {

	const [trendingMovies, setTrendingMovies] = useState([])
	const [mediaType, setMediaType] = useState('movie')
	const [genres, setGenres] = useState([])


	let media = null
	const dispatch = useDispatch()



	useEffect(() => {

		getMediaDetail('movie', 569094).then(response => {
			dispatch(setMediaDetail(response.data))
		})
		getTrending(mediaType).then(response => {
			setTrendingMovies(response.data.results)
		})

		getGenres(mediaType).then(response => {
			setGenres(response.data.genres)
		})

		getPopularMovies().then(response => {
			dispatch(setPopularMovies(response.data.results))
		})

		getPopularSeries().then(response => {
			dispatch(setPopularSeries(response.data.results))
		})

		getTopratedMovies().then(response => {
			dispatch(setTopratedMovies(response.data.results))
		})

		getTopratedSeries().then(response => {
			dispatch(setTopratedSeries(response.data.results))
		})

	}, [])

	media = useSelector(state => state.global.media)
	console.log(media)
	return (
		<>

			{
				trendingMovies.length >= 1 && Object.keys(media)?.length >= 5 ?
					<>
						<Header />
						<Box height="100vh" position="absolute" style={{ background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 0.6), transparent)', zIndex: 3, width: '100vw' }} />
						<Box sx={{ background: 'transparent', position: 'absolute', zIndex: '10', bottom: '0' }}>
							<Stack direction="row" spacing={2} justifyContent='space-between' width='100vw' px={5}>
								<Button variant='text' style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>
									<Typography variant='h5' fontWeight={700}>
										MOVIES
									</Typography>
								</Button>

								<Stack direction='row' spacing={2}>
									<Button style={{ color: 'white', background: 'red', marginBottom: '10px' }}>
										<Typography>
											POPULAR
										</Typography>
									</Button>
									<Button style={{ color: 'white', background: 'red', marginBottom: '10px' }}>
										<Typography>
											TOP RATED
										</Typography>
									</Button>
								</Stack>
							</Stack>
						</Box>

						<ViewMedia />
						<Footer />
					</>
					:
					<Loading />
			}
		</>

	)
}

export default View
