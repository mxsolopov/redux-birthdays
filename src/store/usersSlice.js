import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
	},
	reducers: {
		addUser(state, action) {
			state.users.push(action.payload)
		},
		removeUser(state, action) {
			state.users = state.users.filter(user => user.id !== action.payload)
		},
		editUser(state, action) {
			const editedUser = state.users.find(user => user.id === action.payload.id)
			editedUser[action.payload.item] = action.payload.content
		},
	},
})

export const { addUser, removeUser, editUser } = usersSlice.actions

export default usersSlice.reducer
