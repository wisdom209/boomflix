import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: { count: 0 },
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
		incrementBy: (state, action) => {
			console.log(action)
			state.count += action.payload
		},
		decrementBy: (state, action) => {
			state.count -= action.payload
		}
	}
})


export const { increment, decrement, incrementBy, decrementBy } = appSlice.actions

export default appSlice.reducer
