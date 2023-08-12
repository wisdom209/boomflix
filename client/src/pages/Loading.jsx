import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import Header from '../components/global/Header'

const Loading = () => {
	return (
		<>
			<Header />
			<LinearProgress color='error' style={{ marginTop: '60px' }} />
			<Box height="100vh" sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Typography fontWeight={700} fontSize={70}>
					BoomFlix
				</Typography>
			</Box>
		</>
	)
}

export default Loading
