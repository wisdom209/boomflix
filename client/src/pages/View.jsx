import React from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import ViewMedia from '../components/media/ViewMedia'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const View = () => {
	return (
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
						<Button style={{ color: 'white', background: 'red' }}>
							<Typography>
								POPULAR
							</Typography>
						</Button>
						<Button style={{ color: 'white', background: 'red' }}>
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

	)
}

export default View
