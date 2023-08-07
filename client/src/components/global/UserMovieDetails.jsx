import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import { Delete } from '@mui/icons-material'

const UserMovieDetails = ({ expectedDetail, count }) => {
	return (
		<>
			<Typography color="white" fontWeight={700} variant='h5' mt="100px" ml="20px" mb="20px" textAlign="center">{expectedDetail} ({count})</Typography>

			<Stack flexGrow={1} direction="row" flexWrap='wrap' alignItems="center" justifyContent="center">
				{Array(count).fill("_").map((v, i) =>

					<Stack key={i} spacing={2} ml="20px" width='300px' mb="20px">
						<img src="/jetli.jpeg" alt="fav movie" />
						<Button endIcon={<Delete />} style={{ backgroundColor: 'red', color: 'white' }}>REMOVE</Button>
					</Stack>
				)}

			</Stack>

		</>
	)
}

export default UserMovieDetails
