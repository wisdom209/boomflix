import React from 'react'
import { Box, LinearProgress, Typography, Stack } from '@mui/material'
import Header from '../components/global/Header'

const Loading = () => {
	return (
		<>
			<Header />

			<Stack height="100vh" sx={{
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Typography fontWeight={700} fontSize={70}>
					BoomFlix
				</Typography>
				<LinearProgress color='error' style={{ marginTop: '10px', width: '50%' }} />
			</Stack>
		</>
	)
}

export default Loading
