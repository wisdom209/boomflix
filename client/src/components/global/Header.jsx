import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Menu, MenuItem, ListItemIcon, ListItemText, Hidden, Drawer, Icon, List } from '@mui/material'
import { useState } from 'react'
import { LightModeOutlined } from '@mui/icons-material'
import SignUpModal from './SignUpModal'
import { Favorite } from '@mui/icons-material'
import { Reviews } from '@mui/icons-material'
import { Password } from '@mui/icons-material'
import { Logout } from '@mui/icons-material'
import { MenuOpen } from '@mui/icons-material'
import { MenuBook } from '@mui/icons-material'
import { MenuSharp } from '@mui/icons-material'



function LargeScreenHeader() {
	return (<Hidden mdDown={true}>
		<Stack direction='row' spacing={2}>
			<Typography variant="h4" sx={{
				flexGrow: 1
			}}>BoomFlix</Typography>

			<Button variant='text' color="inherit" component='a'>HOME</Button>

			<Button variant='text' color="inherit" component='a'>MOVIES</Button>

			<Button variant='text' color="inherit" component='a'>TV SERIES</Button>

			<Button variant='text' color="inherit" component='a'>SEARCH</Button>

			<IconButton color="black">
				<LightModeOutlined color="primary" />
			</IconButton>
		</Stack>
	</Hidden>);
}

function MediumScreenHeader(props) {
	return (<Hidden mdUp={true}>

		<Stack direction='row' spacing={2}>
			<IconButton edge="start" size="large" sx={{
				color: 'white'
			}} onClick={() => props.setIsDrawerOpen(true)}>
				<MenuSharp />
			</IconButton>
			<Typography variant="h4" sx={{
				flexGrow: 1
			}}>BoomFlix</Typography>
		</Stack>
		<Drawer anchor='left' open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)}>
			<List>
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

			</List>
		</Drawer>
	</Hidden>);
}

function LoggedInUserMenu(props) {
	return (<Menu open={props.openMenu} anchorEl={props.anchorEl} onClose={props.handleCloseMenu}>
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

	</Menu>);
}


const Header = () => {
	const [appBarBg, setAppBarBg] = useState('transparent')
	const [modalOpen, setmodalOpen] = useState(false)
	const [anchorEl, setanchorEl] = useState(null)
	const openMenu = Boolean(anchorEl)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
			<AppBar sx={{ bgcolor: `${appBarBg}` }}>
				<Toolbar >
					<LargeScreenHeader />
					<MediumScreenHeader isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}></MediumScreenHeader>

					{/* <Button
						color="error"
						variant="contained"
						sx={{ marginLeft: 'auto' }}
						onClick={() => setmodalOpen(true)}
					>SIGN IN</Button> */}
					<Typography
						variant="h5"
						fontWeight={700}
						sx={{ marginLeft: 'auto' }}
						onClick={(e) => setanchorEl(e.currentTarget)}
					>Wisdom209</Typography>
				</Toolbar>
			</AppBar>

			<LoggedInUserMenu anchorEl={anchorEl} openMenu={openMenu} handleCloseMenu={handleCloseMenu}></LoggedInUserMenu>

			<SignUpModal modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
		</>
	)
}

export default Header
