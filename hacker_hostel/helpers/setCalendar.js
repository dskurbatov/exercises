function setCalendar(range, name, calendar){
	const after = Object.assign({}, calendar)
	return range.reduce((acc, date) => {
		if(!acc[date]){
			acc[date] = []
		}
		acc[date] = [
			...acc[date],
			name
		]
		return acc
	}, after)
}

export default setCalendar