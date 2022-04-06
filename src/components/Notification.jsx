import './Notification.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSound } from '../store/soundSlice'
import { changeNotification } from '../store/notificationSlice'

const Notification = ({ user, now, play, stop }) => {
	const sound = useSelector(state => state.sound.sound)
	const dispatch = useDispatch()

	const [checked, setChecked] = useState(false)
	const birthDate = new Date(user.date)

	let text
	const nowMonth = now.getMonth()
	const birthMonth = birthDate.getMonth()
	const nowDay = now.getDate()
	const birthDay = birthDate.getDate()
	const todayCond = nowMonth === birthMonth && nowDay === birthDay
	const threeDaysCond = nowMonth === birthMonth && birthDay - nowDay === 3

	function checkNotification() {
		stop()
		setChecked(true)
		dispatch(changeSound(false))
		dispatch(changeNotification(false))
	}

	if (threeDaysCond) {
		text = `День Рождения ${user.name} через 3 дня`
	} else if (todayCond) {
		text = `Сегодня День Рождения ${user.name}`
	}

	useEffect(() => {
		if ((threeDaysCond || todayCond) && !checked && !sound) {
			dispatch(changeNotification(true))
		}
	})

	if ((threeDaysCond || todayCond) && !checked && !sound) {
		play()

		return (
			<div className='notification'>
				<span>{text}</span>
				<button
					onClick={() => {
						checkNotification()
					}}
				>
					OK
				</button>
			</div>
		)
	} else {
		return <></>
	}
}

export default Notification
