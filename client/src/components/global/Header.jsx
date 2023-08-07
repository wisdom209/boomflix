import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import { LightModeOutlined } from '@mui/icons-material'
import SignUpModal from './SignUpModal'
import { Favorite } from '@mui/icons-material'
import { Reviews } from '@mui/icons-material'
import { Password } from '@mui/icons-material'
import { Logout } from '@mui/icons-material'


const Header = () => {
	const [appBarBg, setAppBarBg] = useState('transparent')
	const [modalOpen, setmodalOpen] = useState(false)
	const [anchorEl, setanchorEl] = useState(null)
	const openMenu = Boolean(anchorEl)

	const handleCloseMenu = () => {
		setanchorEl(null)
	}

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 80) {
			setAppBarBg('black')
		} else {
			setAppBarBg('transparent')
		}
	})

	return (
		<>
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

					{/* <Button
						color="error"
						variant="contained"
						sx={{ marginLeft: 'auto' }}
						onClick={() => setmodalOpen(true)}
					>SIGN IN</Button> */}
					<Button
						color="error"
						variant="contained"
						sx={{ marginLeft: 'auto' }}
						onClick={(e) => setanchorEl(e.currentTarget)}
					>SIGN IN</Button>
				</Toolbar>
			</AppBar>

			<Menu open={openMenu} anchorEl={anchorEl} onClose={handleCloseMenu}>
				<MenuItem>
					<ListItemIcon>
						<Favorite />
					</ListItemIcon>
					<ListItemText>
						FAVORITES
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Reviews />
					</ListItemIcon>
					<ListItemText>
						REVIEWS
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Password />
					</ListItemIcon>
					<ListItemText>
						UPDATE PASSWORD
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout />
					</ListItemIcon>
					<ListItemText>
						SIGN OUT
					</ListItemText>
				</MenuItem>

			</Menu>
			
			<SignUpModal modalOpen={modalOpen} setmodalOpen={setmodalOpen} />


		</>
	)
}

export default Header
