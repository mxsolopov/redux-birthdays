import './Select.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../store/usersSlice'

const Select = ({ id }) => {
	const dispatch = useDispatch()

	const currentGift = useSelector(
		state => state.users.users.find(user => user.id === id).currentGift
	)

	const gifts = useSelector(
		state => state.users.users.find(user => user.id === id).gifts
	)
	const [value, setValue] = useState(currentGift !== '' ? currentGift : '')

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
