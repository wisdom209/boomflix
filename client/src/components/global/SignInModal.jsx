import React from 'react'
import { Stack, Typography, TextField, Button, Modal } from '@mui/material'
import { useState } from 'react'

const SignInModal = ({ modalOpen, setmodalOpen }) => {

	const [isRegister, setIsRegister] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
			<Modal
				style={{ width: '50%', height: '400px', backgroundColor: 'grey', position: 'absolute', marginLeft: '25%', marginTop: '100px', outline: 'none', borderRadius: '8px' }}
				open={modalOpen}
				onClose={() => setmodalOpen(false)}
			>

				<Stack spacing={2} height='inherit' padding={3}>
					<Stack>
						<Typography variant='h4' mt={5} textAlign="center" color="white">BoomFlix</Typography>
					</Stack>
					<Stack spacing={2} >
						<TextField
							type='text'
							label="Username"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }

							}}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
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
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button alignSelf="center"
							style={{
								backgroundColor: 'red',
								color: 'white',
								width: '50%',
								alignSelf: 'center',
								marginTop: '25px'
							}}
							onClick={() => {

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
