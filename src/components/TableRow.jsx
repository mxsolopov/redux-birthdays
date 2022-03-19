import '../style/TableRow.css'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, editUser } from '../store/usersSlice'
import calcYearsNum from '../functions/calcYearsNum'

import Select from './Select'

const TableRow = ({ name, date, id, sex, gift }) => {
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

	return (
		<tr>
			<td>
				{!isEdit ? (
					name
				) : (
					<input
						value={name}
						onChange={event =>
							dispatch(
								editUser({ id: id, item: 'name', content: event.target.value })
							)
						}
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
				<Select name={name} id={id} date={date} sex={sex} />
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
