import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getGenres, getPopularMovies, getPopularSeries, getTrending,
	getTopratedMovies, getTopratedSeries
} from "../api_client/axiosClient"
import {
	setGenres, setPopularMovies, setPopularSeries,
	setTopratedMovies, setTopratedSeries
} from "../redux/features/appSlice"
import { useLocation } from "react-router-dom"


const useFetchHome = () => {
  
	const [trendingMovies, setTrendingMovies] = useState([])
	const [mediaType, setMediaType] = useState('movie')

	let media = null
	const dispatch = useDispatch()
	
	useEffect(() => {
		getTrending(mediaType).then(response => {
			setTrendingMovies(response.data.results)
		})

		getGenres(mediaType).then(response => {
			dispatch(setGenres(response.data.genres))
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

	}, [useLocation()])

	media = useSelector(state => state.global.media)

	return [trendingMovies, media]
}


export default useFetchHome
