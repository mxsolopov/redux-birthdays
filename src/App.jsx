import './style/App.css'

import React from 'react'

import UserForm from './components/UserForm'
import Table from './components/Table'
import Notifications from './components/Notifications'

const App = () => {
	return (
		<div className='container'>
			<h1>Дни рождения родственников</h1>
			<Table />
			<UserForm />
			<Notifications />
		</div>
	)
}

export default App
