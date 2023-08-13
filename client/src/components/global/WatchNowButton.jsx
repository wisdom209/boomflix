import React from 'react'
import { Button, Stack } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'

const WatchNowButton = () => {
	return (
		<Stack>
			<Button
				onClick={()=>{}}
				variant="contained"
				sx={{ bgcolor: 'red', width: '200px' }}>
				<PlayArrow /> Watch Now
			</Button>
		</Stack>
	)
}

export default WatchNowButton
