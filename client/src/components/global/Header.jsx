import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { LightModeOutlined } from '@mui/icons-material'


const Header = () => {
	const [appBarBg, setAppBarBg] = useState('transparent')

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 80) {
			setAppBarBg('black')
		} else {
			setAppBarBg('transparent')
		}
	})
	return (
		<AppBar
			sx={{
				bgcolor: `${appBarBg}`
			}}
		>
			<Toolbar >
				<Stack direction='row' spacing={2}>
					<Typography variant="h4" sx={{ flexGrow: 1 }}>BoomFlix</Typography>

					<Button variant='text' color="inherit" component='a'>HOME</Button>

					<Button variant='text' color="inherit" component='a'>MOVIES</Button>

					<Button variant='text' color="inherit" component='a'>TV SERIES</Button>

					<Button variant='text' color="inherit" component='a'>SEARCH</Button>

					<IconButton color="black">
						<LightModeOutlined color="primary" />
					</IconButton>
				</Stack>
				<Button color="error" variant="contained" sx={{ marginLeft: 'auto' }}>SIGN IN</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Header
