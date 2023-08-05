import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy, decrementBy } from './features/appSlice'

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.global.count)

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Stack spacing={2}>
				<Typography variant='h3' textAlign='center'>{count}</Typography>
				<Stack direction='row' spacing={2}>
					<Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>
					<Button variant='contained' onClick={() => dispatch(decrement())}>Decrement</Button>
					<Button variant='contained' onClick={() => dispatch(decrementBy(5))}>Decrement by 5</Button>
					<Button variant='contained' onClick={() => dispatch(incrementBy(5))}>increment by 5</Button>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Counter
