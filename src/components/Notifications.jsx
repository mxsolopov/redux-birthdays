import './Notifications.css'
import { useSelector } from 'react-redux'
import React from 'react'
import Notification from './Notification'

import useSound from 'use-sound'
import alarm from '../sounds/alarm.mp3'

const Notifications = () => {
	const [play, { stop }] = useSound(alarm)
	const users = useSelector(state => state.users.users)
	const notification = useSelector(state => state.notification.notification)
	let now = new Date()

	setInterval(() => {
		now = new Date()
	}, 1000 * 60 * 60)

	return (
		<div className={notification ? 'notifications-view' : 'notifications-hide'}>
			<div className='notifications-wrapper'>
				{users.length > 0 ? (
					users.map((user, index) => (
						<Notification
							key={index}
							user={user}
							now={now}
							play={play}
							stop={stop}
						/>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default Notifications
