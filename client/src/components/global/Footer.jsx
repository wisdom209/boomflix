import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'

const Footer = () => {
	return (
		<Box style={{ postion: 'sticky', backgroundColor: '#312f2f', marginTop: 'auto', bottom: '0', width: '100vw' }}>
			<Stack direction="row" spacing={2} p={2}>
				<Typography sx={{
					fontSize: '20px',
					fontWeight: '800',
					flexGrow: 1,
					color: 'white'
				}}>&copy; BoomFlix</Typography>

				{/* <Button component='a' sx={{ color: 'white', fontWeight: '700' }} >HOME</Button>
				<Button component='a' sx={{ color: 'white', fontWeight: '700' }} >MOVIES</Button>
				<Button component='a' sx={{ color: 'white', fontWeight: '700' }} >TV SERIES </Button>
				<Button component='a' sx={{ color: 'white', fontWeight: '700' }}>SEARCH</Button> */}
			</Stack >
		</Box >
	)
}

export default Footer
