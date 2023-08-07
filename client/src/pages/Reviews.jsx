import React from 'react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import Stack from '@mui/material/Stack'
import UserMovieDetails from '../components/global/UserMovieDetails'

const Reviews = () => {
	return (
		<Stack style={{ minHeight: '100vh' }}>
			<Header />
			<UserMovieDetails count={3} expectedDetail="YOUR REVIEWS" />
			<Footer />
		</Stack>
	)
}

export default Reviews
