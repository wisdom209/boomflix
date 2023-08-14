import React from 'react'
import { Button, Stack } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'

const WatchNowButton = ({ videoId, videoType }) => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<Stack>
			<Button
				onClick={() => {
					if (location.pathname == '/' && videoId) [
						navigate(`/media/${videoType}/${videoId}`)
					]
				}}
				variant="contained"
				sx={{ bgcolor: 'red', width: '200px' }}>
				<PlayArrow /> Watch Now
			</Button>
		</Stack>
	)
}

export default WatchNowButton
