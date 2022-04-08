import './App.css'
import React from 'react'
import UserForm from './components/UserForm'
import Table from './components/Table'
import Notifications from './components/Notifications'

const App = () => {
	return (
		<div className='container'>
			<UserForm />
			<Table />
			<Notifications />
		</div>
	)
}

export default App
