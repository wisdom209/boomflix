import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import ViewMedia from '../components/media/ViewMedia'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { getGenres, getMediaDetail, getPopularMovies, getPopularSeries, getTopratedMovies, getTopratedSeries, getTrending } from '../api_client/axiosClient'
import { setGenres, setMediaDetail, setPopularMovies, setPopularSeries, setTopratedMovies, setTopratedSeries } from '../redux/features/appSlice'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'


const View = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const [trendingMovies, setTrendingMovies] = useState([])
	const mediaType = location.pathname.split('/')[2]
	const [subtype, setSubtype] = useState('popular')

	let media = null

	useEffect(() => {
		getTrending(mediaType).then(response => {
			setTrendingMovies(response.data.results)
			const random = Math.floor(Math.random() * response.data.results.length)
			dispatch(setMediaDetail(response.data.results[random]))
		})

		getGenres(mediaType).then(response => {
			dispatch(setGenres(response.data.genres))
		}).catch(e => console.log('e', { e }))

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

	}, [location])

	media = useSelector(state => state.global.media)


	return (
		<>
			{
				trendingMovies?.length >= 1 && Object.keys(media)?.length >= 5 ?
					<>
						<Header />
						<Box height="100vh" position="absolute" style={{ background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 0.6), transparent)', zIndex: 3, width: '100vw' }} />
						<Box sx={{ background: 'transparent', position: 'absolute', zIndex: '10', bottom: '0' }}>
							<Stack direction="row" spacing={2} justifyContent='space-between' width='100vw' px={5}>
								<Button variant='text' style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>
									<Typography variant='h5' fontWeight={700}>
										{`${mediaType}`.toUpperCase()}
									</Typography>
								</Button>

							</Stack>
						</Box>

						<ViewMedia mediaList={mediaType == 'movie' ? media.popularMovies : media.popularSeries} type={mediaType} subtype={subtype} />
						<Footer />
					</>
					:
					<Loading />
			}
		</>

	)
}

export default View
