import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: { count: 0, signInModal: false, signUpModal: true },
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
		},
		signUpModal: (state, action) => {
			state.signUpModal = action.payload
		},
		signInModal: (state, action) => {
			state.signUpModal = action.payload
		}
	}
})


export const { increment, decrement, incrementBy, decrementBy, signInModal, signUpModal } = appSlice.actions

export default appSlice.reducer
