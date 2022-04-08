import './Notification.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSound } from '../store/soundSlice'
import { changeNotification } from '../store/notificationSlice'
import calcYearsNum from '../functions/calcYearsNum'
import Lottie from 'lottie-react'
import gift from '../lottie/gift.json'

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
		text = `День Рождения у ${
			user.name
		} будет через 3 дня, ему (ей) исполняется ${calcYearsNum(user.date)} лет`
	} else if (todayCond) {
		text = `Сегодня День Рождения у ${
			user.name
		}, ему (ей) исполняется ${calcYearsNum(user.date)} лет`
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
				<div className='animation'>
					<Lottie animationData={gift} />
				</div>
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
