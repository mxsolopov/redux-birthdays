import './Table.css'
import { useSelector } from 'react-redux'

import React from 'react'
import TableRow from './TableRow'

const Table = () => {
	const users = useSelector(state => state.users.users)

	return (
		<table>
			<thead>
				<tr>
					<td className='name-col'>Имя</td>
					<td className='date-col'>Дата рождения</td>
					<td className='years-col'>Лет</td>
					<td className='gifts-col'>Варианты подарков</td>
					<td className='actions-col'>Действия</td>
				</tr>
			</thead>
			<tbody>
				{users.length > 0 ? (
					users.map((user, index) => (
						<TableRow
							key={index}
							name={user.name}
							date={user.date}
							id={user.id}
							sex={user.sex}
						/>
					))
				) : (
					<tr>
						<td colSpan='5' className='empty-msg'>
							Нет данных. Добавьте первого родственника
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default Table
