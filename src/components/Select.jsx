import './Select.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../store/usersSlice'

const Select = ({ id, gifts }) => {
	let currentGift = useSelector(
		state => state.users.users.find(user => user.id === id).currentGift
	)
	const [value, setValue] = useState(currentGift ? currentGift : '')

	const dispatch = useDispatch()

	return (
		<select
			value={value}
			onChange={e => {
				setValue(e.target.value)
				dispatch(
					editUser({ id: id, item: 'currentGift', content: e.target.value })
				)
			}}
		>
			{gifts.map((item, i) => (
				<option key={i} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export default Select
