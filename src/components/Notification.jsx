import '../style/Notification.css'
import React, { useState } from 'react'

const Notification = ({ user, now, play, stop, isPlaying, setIsPlaying }) => {
	const [pause, setPause] = useState(false)
	const notificationClass = `notification ${pause ? 'paused' : ''}`

	let notification
	const birthDate = new Date(user.date)

	const nowMonth = now.getMonth()
	const birthMonth = birthDate.getMonth()
	const nowDay = now.getDate()
	const birthDay = birthDate.getDate()

	function pauseNotification() {
		stop()
		setPause(true)
		setIsPlaying(false)
	}

	if (
		(nowMonth === birthMonth && birthDay - nowDay === 3) ||
		(nowMonth === birthMonth && nowDay === birthDay)
	) {
		if (!pause && !isPlaying) {
			play()
			setIsPlaying(true)
		}
	}

	if (nowMonth === birthMonth && birthDay - nowDay === 3) {
		// За 3 дня уведомить
		notification = (
			<div className={notificationClass}>
				<span>День Рождения {user.name} через 3 дня</span>
				<button
					onClick={() => {
						pauseNotification()
					}}
				>
					OK
				</button>
			</div>
		)

		// Уведомить в день рождения
	} else if (nowMonth === birthMonth && nowDay === birthDay) {
		notification = (
			<div className={notificationClass}>
				<span>Сегодня День Рождения {user.name}</span>
				<button
					onClick={() => {
						pauseNotification()
					}}
				>
					OK
				</button>
			</div>
		)
	} else {
		notification = <></>
	}

	return notification
}

export default Notification
