import './UserForm.css'
import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/usersSlice'
import calcYearsNum from '../functions/calcYearsNum'
import giftsVariants from '../functions/giftVariants'

const UserForm = () => {
	const initUser = {
		name: '',
		date: '',
		id: nanoid(),
		sex: 'male',
		gifts: '',
		currentGift: '',
	}
	const [user, setUser] = useState(initUser)
	const [disable, setDisable] = useState(true)

	const dispatch = useDispatch()

	const checkDisableButton = () => {
		if (user.name !== '' && user.date !== '') {
			setDisable(false)
		} else {
			setDisable(true)
		}
	}

	const getGifts = (name, date, sex) => {
		let gifts
		const age = calcYearsNum(date)
		for (let [key, elem] of giftsVariants[sex][name[0].toLowerCase()]) {
			if (key[0] <= age && key[1] >= age) {
				gifts = elem
				break
			}
		}
		return gifts
	}

	const namePattern = /^[А-ЯЁа-яё ]+$/

	return (
		<>
			<div className='form'>
				<div className='form-item-wrap'>
					<label htmlFor='name-input'>Имя:</label>
					<input
						id='name-input'
						type='text'
						value={user.name}
						placeholder='Иванов Иван'
						onChange={event => {
							const value = event.target.value
							if (value === '' || namePattern.test(value)) {
								setUser({
									...user,
									name: value,
								})
							}
							checkDisableButton()
						}}
						onBlur={() => checkDisableButton()}
					/>
					<div className='sex-wrapper'>
						<div>
							<input
								type='radio'
								value='male'
								id='male-sex-input'
								checked={user.sex === 'male' ? true : false}
								onChange={event =>
									setUser({ ...user, sex: event.target.value })
								}
							/>
							<label htmlFor='male-sex-input'>М</label>
						</div>
						<div>
							<input
								type='radio'
								value='female'
								id='female-sex-input'
								checked={user.sex === 'female' ? true : false}
								onChange={event =>
									setUser({ ...user, sex: event.target.value })
								}
							/>
							<label htmlFor='female-sex-input'>Ж</label>
						</div>
					</div>
				</div>
				<div className='form-item-wrap'>
					<label htmlFor='date-input'>Дата рождения:</label>
					<input
						id='date-input'
						type='date'
						value={user.date}
						onChange={event => {
							setUser({ ...user, date: event.target.value })
							checkDisableButton()
						}}
						onBlur={() => checkDisableButton()}
					/>
				</div>
				<div className='form-item-wrap'>
					<button
						className='add-button'
						onClick={() => {
							dispatch(
								addUser({
									...user,
									gifts: getGifts(user.name, user.date, user.sex),
								})
							)
							setUser(initUser)
							setDisable(true)
						}}
						disabled={disable}
					>
						Добавить
					</button>
				</div>
			</div>
		</>
	)
}

export default UserForm
