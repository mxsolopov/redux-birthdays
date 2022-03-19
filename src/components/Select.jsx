import '../style/Select.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../store/usersSlice'
import giftsVariants from '../functions/giftVariants'
import calcYearsNum from '../functions/calcYearsNum'

const Select = ({ name, id, date, sex, gift }) => {
	const [value, setValue] = useState(gift)
	const age = calcYearsNum(date)
	let gifts

	const dispatch = useDispatch()

	for (let [key, elem] of giftsVariants[sex][name[0].toLowerCase()]) {
		if (key[0] <= age && key[1] >= age) {
			gifts = elem
			break
		}
	}

	return (
		<select
			value={value}
			onChange={e => {
				setValue(e.target.value)
			}}
			onBlur={() =>
				dispatch(editUser({ id: id, item: 'gift', content: value }))
			}
		>
			<option>Выбрать</option>
			{gifts.map((item, i) => (
				<option key={i} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export default Select
