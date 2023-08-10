import React from 'react'
import { Stack, Typography, Chip } from '@mui/material'
import CircularRating from '../global/CircularRating'
import { useEffect } from 'react'

const MediaDescription = ({ original_title, overview, vote_average, genres }) => {

	return (
		<Stack spacing={2}>
			<Stack>
				<Typography
					variant="h2"
					color="white"
					fontSize={50}
					fontWeight={800} >
					{original_title}
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating={vote_average.toFixed(1)} size={50} />
				<Chip label={genres[0]?.name || 'trending' } color="error" />
				<Chip label={genres[1]?.name || 'trending'} color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white" fontWeight={600}>
					{overview}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default MediaDescription
