import React from 'react'
import { Stack, Avatar, Typography, Box, TextField, Button, Divider } from '@mui/material'
import RedDivider from '../global/RedDivder'
import { Send } from '@mui/icons-material'

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
			<Stack direction='row' spacing={3} style={{ marginLeft: '10px' }}>
				<TextField
					id="outlined-multiline-static"
					placeholder='What do you think about this show?'
					multiline
					sx={{ backgroundColor: '#555353', width: "60%", borderRadius: '8px', margin: '0 10px', color: 'white' }}
					InputLabelProps={{
						sx: { color: 'whitesmoke', opacity: '0.6' }
					}}
					inputProps={{
						sx: { color: 'white' }
					}}
					rows={4}
					color='common'
				/>

				<Button startIcon={<Send />} style={{ backgroundColor: 'red', color: 'white', height: '20%' }}>
					<Typography variant="h6" fontWeight={600}>POST</Typography>
				</Button>
			</Stack>
			<Stack direction='row' spacing={2}>
				<Box style={{ marginLeft: "10px" }}>
					<Avatar color='secondary'>
						T
					</Avatar>
				</Box>

				<Stack spacing={1}>
					<Typography color="white">Test123</Typography>
					<Typography color="white">{date}</Typography>
					<Typography color="white">Hi</Typography>
					<Divider light />
				</Stack>
			</Stack>

		</Stack>
	)
}

export default Review
