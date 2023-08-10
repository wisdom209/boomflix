import React from 'react'
import { Box, Typography } from '@mui/material'

const Loading = () => {
	return (
		<Box height="100vh" sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<Typography fontWeight={700} fontSize={70}>
				BoomFlix
			</Typography>
		</Box>
	)
}

export default Loading
