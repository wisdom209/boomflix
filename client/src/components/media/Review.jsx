import React from 'react'
import { Stack, Avatar, Typography, Box } from '@mui/material'
import RedDivider from '../global/RedDivder'

const Review = () => {
	const day = new Date(Date.now()).getDate()
	const month = new Date(Date.now()).getMonth()
	const year = new Date(Date.now()).getFullYear()
	const date = `${day}-${month}-${year}`

	return (
		<Stack spacing={2} mx={10}>
			<Stack>
				<Typography fontSize={35} fontWeight={600} color="white" ml={1}>Reviews</Typography>
				<RedDivider />
			</Stack>
			<Stack direction='row' spacing={2}>
				<Box style={{ marginLeft:"10px" }}>
					<Avatar color='secondary'>
						T
					</Avatar>
				</Box>

				<Stack spacing={1}>
					<Typography color="white">Test123</Typography>
					<Typography color="white">{date}</Typography>
					<Typography color="white">Hi</Typography>
				</Stack>
			</Stack>

		</Stack>
	)
}

export default Review
