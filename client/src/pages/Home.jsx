import Header from "../components/global/Header"
import MediaList from "../components/home/MediaList"
import HeroSwiper from "../components/home/HeroSwiper"
import Footer from "../components/global/Footer"
import { Box, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react"
import {
	getGenres, getPopularMovies, getPopularSeries, getTrending,
	getTopratedMovies, getTopratedSeries
} from "../api_client/axiosClient"
import { useDispatch, useSelector } from 'react-redux'
import { setPopularMovies, setPopularSeries, setTopratedMovies, setTopratedSeries } from "../redux/features/appSlice"
import Loading from "./Loading"


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
	const [display, setDisplay] = useState(null)



	return (
		<Box>

			
				{trendingMovies && Object.keys(media).length >= 4 ? <Box>
					<Header />

					<HeroSwiper trendingMovies={trendingMovies} genres={genres} />

					 <MediaList media={media} />
					<Footer />
				</Box> :
					<Box>
						<Header />
						<Box sx={{ marginTop: '80px' }}>
							<LinearProgress color="error" />
						</Box>

						<Loading />
					</Box>}
			
		</Box>

	)
}

export default Home
