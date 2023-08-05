import React from 'react'
import { Stack, Typography, Chip } from '@mui/material'
import CircularRating from '../global/CircularRating'

const MediaDescription = () => {
	return (
		<Stack spacing={2}>
			<Stack>
				<Typography
					variant="h2"
					color="white"
					fontSize={70}
					fontWeight={800} >
					The Super Mario Bros. Movie
				</Typography>
			</Stack>

			<Stack direction='row' spacing={2}>

				<CircularRating rating='7.5' size={50} />
				<Chip label="Animation" color="error" />
				<Chip label="Family" color="error" />

			</Stack>

			<Stack spacing={2}>
				<Typography color="white" fontWeight={700}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, magni ab est minima, quaerat enim eaque culpa autem aspernatur rem eligendi obcaecati pariatur modi. Quos quas sit natus delectus incidunt.
				</Typography>
			</Stack>
		</Stack>
	)
}

export default MediaDescription
