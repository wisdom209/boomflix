import Header from "../components/global/Header"
import MediaList from "../components/home/MediaList"
import HeroSwiper from "../components/home/HeroSwiper"
import Footer from "../components/global/Footer"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import {
	getGenres, getPopularMovies, getPopularSeries, getTrending,
	getTopratedMovies, getTopratedSeries
} from "../api_client/axiosClient"
import { useDispatch, useSelector } from 'react-redux'
import { setPopularMovies, setPopularSeries, setTopratedMovies, setTopratedSeries } from "../redux/features/appSlice"

const Home = () => {

	const [trendingMovies, setTrendingMovies] = useState([])
	const [mediaType, setMediaType] = useState('movie')
	const [genres, setGenres] = useState([])
	/* const [popularMovies, setPopularMovies] = useState([]) */

	let media = null
	const dispatch = useDispatch()

	useEffect(() => {
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


	return (
		<Box>
			<Header />
			<HeroSwiper trendingMovies={trendingMovies} genres={genres} />
			
			{Object.keys(media).length != 0 && <MediaList media={media} />}
			<Footer />
		</Box>
	)
}

export default Home
