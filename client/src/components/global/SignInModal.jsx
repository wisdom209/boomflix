import React from 'react'
import Cookies from 'js-cookie'
import { Stack, Typography, TextField, Button, Modal } from '@mui/material'
import { useState } from 'react'
import { loginUser, registerUser } from '../../api_client/axiosClient'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const SignInModal = ({ modalOpen, setmodalOpen }) => {

	const [isRegister, setIsRegister] = useState(false)
	const [isError, setIsError] = useState(false)
	const [helperText, setHelperText] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const location = useLocation()

	return (
		<>
			<Modal
				style={{ width: '50%', height: '400px', backgroundColor: 'grey', position: 'absolute', marginLeft: '25%', marginTop: '150px', outline: 'none', borderRadius: '8px' }}
				open={modalOpen}
				onClose={() => setmodalOpen(false)}
			>

				<Stack spacing={2} height='inherit' padding={3}>
					<Stack>
						<Typography variant='h4' mt={5} textAlign="center" color="white">BoomFlix</Typography>
					</Stack>
					<Stack spacing={2} >
						<TextField
							error={isError}
							type='text'
							label="Username"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }
							}}
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
								setHelperText('')
								setIsError(false)
							}}
						/>

						<TextField
							type='password'
							label="Password"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }
							}}
							value={password}
							helperText={helperText}
							error={isError}
							onChange={(e) => {
								setPassword(e.target.value)
								setHelperText('')
								setIsError(false)
							}}
						/>

						<Button
							style={{
								backgroundColor: 'red',
								color: 'white',
								width: '50%',
								alignSelf: 'center',
								marginTop: '25px'
							}}
							onClick={() => {
								if (isRegister) {
									/* register user */
									registerUser(username, password).then(response => {
								
										setUsername('')
										setPassword('')
										toast("Sign up successful!", {
											position: toast.POSITION.BOTTOM_LEFT,
										});
										setIsRegister(false)
									}).catch(err => {
										setIsError(true)
										setHelperText(err.response.data)
										
									})

								} else {
									/* sign up user */
									loginUser(username, password).then(response => {

										toast("Logged in successfully!", {
											position: toast.POSITION.BOTTOM_LEFT,
											style: { zIndex: 30 }
										});

										setUsername('')
										setPassword('')

										if (response.data.token) {
											const exp_date = new Date();
											exp_date.setDate(exp_date.getDate() + 5)
											Cookies.set('token', response.data.token, { expires: exp_date })
											Cookies.set('username', response.data.username, {expires: exp_date})
										}

										setmodalOpen(false)
									}).catch(err => {
										setIsError(true)
										setHelperText(err.response.data)
									
									})
								}
							}}
						>

							<Typography>{isRegister ? 'SIGN UP' : 'SIGN IN'}</Typography>
						</Button>

						<Button onClick={() => {
							setIsRegister(!isRegister)
						}}>
							<Typography sx={{ color: 'red' }}>{isRegister ? 'SIGN IN' : 'SIGN UP'}</Typography>
						</Button>

					</Stack>
				</Stack>
			</Modal>
		</>
	)
}

export default SignInModal
