import React from 'react'
import { Stack, Typography, TextField, Button, Modal } from '@mui/material'

const UpdatePasswordModal = ({modalOpen, setmodalOpen}) => {
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
							type='password'
							label="Password"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }

							}}
						/>

						<TextField
							type='password'
							label="New Password"
							required
							fullWidth
							InputLabelProps={{
								sx: { color: 'white', opacity: '0.5' }

							}}
						/>

						<TextField
							type='password'
							label="Confirm Password"
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
							<Typography>UPDATE PASSWORD</Typography>
						</Button>
						
					</Stack>
				</Stack>
			</Modal>
		</>
	)
}

export default UpdatePasswordModal
