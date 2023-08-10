import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
	name: 'app',
	initialState: { count: 0, media: {} },
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
		incrementBy: (state, action) => {
			state.count += action.payload
		},
		decrementBy: (state, action) => {
			state.count -= action.payload
		},
		setPopularMovies: (state, action) => {
			state.media['popularMovies'] = action.payload
		},
		setPopularSeries: (state, action) => {
			state.media['popularSeries'] = action.payload
		},
		setTopratedMovies: (state, action) => {
			state.media['topratedMovies'] = action.payload
		},
		setTopratedSeries: (state, action) => {
			state.media['topratedSeries'] = action.payload
		},
	}
})


export const { increment, decrement, incrementBy, decrementBy,
	setPopularMovies, setPopularSeries, setTopratedSeries, setTopratedMovies
} = appSlice.actions

export default appSlice.reducer
