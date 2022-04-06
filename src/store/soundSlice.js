import { createSlice } from '@reduxjs/toolkit'

const soundSlice = createSlice({
	name: 'sound',
	initialState: {
		sound: false,
	},
	reducers: {
		changeSound(state, action) {
			state.sound = action.payload
		},
	},
})

export const { changeSound } = soundSlice.actions

export default soundSlice.reducer
