import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: {
		notification: false,
	},
	reducers: {
		changeNotification(state, action) {
			state.notification = action.payload
		},
	},
})

export const { changeNotification } = notificationSlice.actions

export default notificationSlice.reducer
