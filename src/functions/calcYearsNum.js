const calcYearsNum = date => {
	const now = new Date()
	const birth = new Date(date)
	let years = now.getFullYear() - birth.getFullYear()
	if (
		new Date(
			`${now.getFullYear()}-${birth.getMonth() + 1}-${birth.getDate()}`
		) -
			now <
		0
	) {
		years = years + 1
	}
	if (isNaN(years)) {
		years = 0
	}
	return years
}

export default calcYearsNum
