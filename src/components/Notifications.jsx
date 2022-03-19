import '../style/Notifications.css'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import Notification from './Notification'

import useSound from 'use-sound'
import alarm from '../sounds/alarm.mp3'

const Notifications = () => {
	const [play, { stop }] = useSound(alarm)
	const [isPlaying, setIsPlaying] = useState(false)
	const users = useSelector(state => state.users.users)
	let now = new Date()

	setInterval(() => {
		now = new Date()
	}, 1000 * 60 * 60)

	return (
		<div className='notifications'>
			<div className='notifications-wrapper'>
				{users.length > 0 ? (
					users.map((user, index) => (
						<Notification
							key={index}
							user={user}
							now={now}
							play={play}
							stop={stop}
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
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
