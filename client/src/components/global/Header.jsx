import React from 'react'
import {
	AppBar, Button, IconButton, Stack, Toolbar, Typography,
	Menu, MenuItem, ListItemIcon, ListItemText, Hidden, Drawer, List
} from '@mui/material'
import { useState } from 'react'
import { LightModeOutlined } from '@mui/icons-material'
import SignInModal from './SignInModal'
import { Favorite } from '@mui/icons-material'
import { Reviews } from '@mui/icons-material'
import { Password } from '@mui/icons-material'
import { Logout } from '@mui/icons-material'
import { MenuSharp } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { Home } from '@mui/icons-material'
import { Movie } from '@mui/icons-material'
import { Tv } from '@mui/icons-material'
import { SearchSharp } from '@mui/icons-material'
import Cookies from 'js-cookie'
import { setUsername } from '../../redux/features/appSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'


function LargeScreenHeader() {
	const navigate = useNavigate()

	return (<Hidden mdDown={true}>
		<Stack direction='row' spacing={2}>
			<Typography variant="h4" sx={{
				flexGrow: 1
			}}>BoomFlix</Typography>

			<Button variant='text' color="inherit" component='a'
				onClick={() => { navigate('/') }}
			>HOME</Button>

			<Button variant='text' color="inherit" component='a'
				onClick={() => {
					navigate(`/view/movie`)
				}}
			>MOVIES</Button>

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

				<ListItemText>
					<Typography mx={2} variant='h2'>BoomFlix</Typography>
				</ListItemText>

				<MenuItem>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText>
						HOME
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Movie />
					</ListItemIcon>
					<ListItemText>
						MOVIES
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Tv />
					</ListItemIcon>
					<ListItemText>
						TV SERIES
					</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<SearchSharp />
					</ListItemIcon>
					<ListItemText>
						SEARCH
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
			<ListItemText onClick={() => {
				Cookies.set('username', '')
				Cookies.set('token', '')
				props.handleCloseMenu()
				toast('Logged out successfully', {
					position: toast.POSITION.BOTTOM_LEFT
				})
			}}>
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
	const [signUpOpen, setSignUpOpen] = useState(false)
	const dispatch = useDispatch()

	dispatch(setUsername(Cookies.get('username')))

	const username = useSelector(state => state.global.username)

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
					<MediumScreenHeader isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
					{
						(username == false) ?
							<Button
								color="error"
								variant="contained"
								sx={{ marginLeft: 'auto' }}
								onClick={() => setmodalOpen(true)}
							>SIGN IN</Button> :
							<Typography
								variant="h5"
								fontWeight={700}
								sx={{ marginLeft: 'auto' }}
								onClick={(e) => setanchorEl(e.currentTarget)}
							>{username}</Typography>
					}
				</Toolbar>
			</AppBar>

			<LoggedInUserMenu anchorEl={anchorEl} openMenu={openMenu} handleCloseMenu={handleCloseMenu}></LoggedInUserMenu>

			<SignInModal modalOpen={modalOpen} setmodalOpen={setmodalOpen} />

		</>
	)
}

export default Header
