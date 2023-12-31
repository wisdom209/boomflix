import React from 'react'
import { Stack, Typography, TextField, Button, Modal } from '@mui/material'
import { useState } from 'react'

const RegisterModal = ({ isOpen, setmodalOpen, setSetsignUpOpen }) => {

	const [registerModalOpen, setRegisterModalOpen] = useState(isOpen)
	return (
		<>
			<Modal
				style={{ width: '50%', height: '400px', backgroundColor: 'grey', position: 'absolute', marginLeft: '25%', marginTop: '100px', outline: 'none', borderRadius: '8px' }}
				open={registerModalOpen}
				onClose={() => setRegisterModalOpen(false)}
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
						/>

						<TextField
							type='password'
							label="Password"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }

							}}
						/>

						<Button alignSelf="center"
							style={{
								backgroundColor: 'red',
								color: 'white',
								width: '50%',
								alignSelf: 'center',
								marginTop: '25px'
							}}>
							<Typography>SIGN UP</Typography>
						</Button>
						<Button onClick={() => {
							setRegisterModalOpen(false)
							setmodalOpen(true)
							setSetsignUpOpen(true)
						}}>
							<Typography sx={{ color: 'red' }}>SIGN IN</Typography>
						</Button>
					</Stack>
				</Stack>
			</Modal>
		</>
	)
}

export default RegisterModal
