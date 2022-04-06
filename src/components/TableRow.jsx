import './TableRow.css'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, editUser } from '../store/usersSlice'
import calcYearsNum from '../functions/calcYearsNum'
import giftsVariants from '../functions/giftVariants'

import Select from './Select'

const TableRow = ({ name, date, id, sex }) => {
	const [isEdit, setIsEdit] = useState(false)
	const dispatch = useDispatch()
	const age = calcYearsNum(date)

	let gifts = useSelector(
		state => state.users.users.find(user => user.id === id).gifts
	)

	if (!gifts) {
		for (let [key, elem] of giftsVariants[sex][name[0].toLowerCase()]) {
			if (key[0] <= age && key[1] >= age) {
				gifts = elem
				break
			}
		}
	}

	useEffect(() => {
		if (!gifts) {
			dispatch(editUser({ id: id, item: 'gifts', content: gifts }))
		}
	})

	const startEditBtn = (
		<button className='edit-btn' onClick={() => setIsEdit(!isEdit)}>
			&#9998;
		</button>
	)
	const endEditBtn = (
		<button className='edit-btn' onClick={() => setIsEdit(!isEdit)}>
			&#10004;
		</button>
	)

	const namePattern = /^[А-ЯЁа-яё ]+$/
	const now = new Date()

	return (
		<tr>
			<td>
				{!isEdit ? (
					name
				) : (
					<input
						value={name}
						onChange={event => {
							const value = event.target.value
							if (value === '' || namePattern.test(value)) {
								dispatch(editUser({ id: id, item: 'name', content: value }))
							}
						}}
					/>
				)}
			</td>
			<td>
				{!isEdit ? (
					date
				) : (
					<input
						type='date'
						value={date}
						max={now.getFullYear() - now.getMonth() - now.getDate()}
						onChange={event =>
							dispatch(
								editUser({ id: id, item: 'date', content: event.target.value })
							)
						}
					/>
				)}
			</td>
			<td>{calcYearsNum(date)}</td>
			<td>
				<Select id={id} gifts={gifts} />
			</td>
			<td>
				{!isEdit ? startEditBtn : endEditBtn}
				<button className='delete-btn' onClick={() => dispatch(removeUser(id))}>
					&#10006;
				</button>
			</td>
		</tr>
	)
}

export default TableRow
