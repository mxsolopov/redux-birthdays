import './Table.css'
import Lottie from 'lottie-react'
import birthdayCelebration from '../lottie/birthdayCelebration.json'
import { useSelector } from 'react-redux'

import React from 'react'
import TableRow from './TableRow'

const Table = () => {
	const users = useSelector(state => state.users.users)

	return (
		<>
			<table>
				<thead>
					<tr>
						<th className='name-col'>Имя</th>
						<th className='date-col'>Дата рождения</th>
						<th className='years-col'>Лет</th>
						<th className='gifts-col'>Варианты подарков</th>
						<th className='actions-col'>Действия</th>
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
							/>
						))
					) : (
						<tr>
							<td colSpan='5' className='empty-msg'>
								<div className='animation-container'>
									<Lottie animationData={birthdayCelebration} />
								</div>
								<div className='empty-msg-text'>
									Нет данных. Добавьте сведения о днях рождения родственников и
									друзей.
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	)
}

export default Table
