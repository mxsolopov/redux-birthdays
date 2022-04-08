import './TableRow.css'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, editUser } from '../store/usersSlice'
import calcYearsNum from '../functions/calcYearsNum'

import Select from './Select'

const TableRow = ({ name, date, id }) => {
	const [isEdit, setIsEdit] = useState(false)
	const dispatch = useDispatch()

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
						className='edit-input'
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
						className='edit-input'
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
				<Select id={id} />
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
