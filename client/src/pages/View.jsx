import React from 'react'
import { Box } from '@mui/material'
import ViewMedia from '../components/media/ViewMedia'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const View = () => {
	return (
		<>
			<Header />
			<Box height="100vh" position="absolute" style={{ background: 'linear-gradient(to top right, rgba(0,0,0, 1), transparent), linear-gradient(to top, rgba(0,0,0, 0.6), transparent)', zIndex: 3, width: '100vw' }} />

			<ViewMedia />
			<Footer />
		</>

	)
}

export default View
