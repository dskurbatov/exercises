function isDateValid(array){
	const currentYear = new Date().getFullYear()
	if(array.length !== 3){
		return false
	}

	const isEvery = array.every(item => !isNaN(item))
	if(!isEvery) {
		return false
	}
	
	const [year, month, date] = array
	if(year.length !== 4 || +year < currentYear){
		return false
	}
	
	if(month.length !== 2 || +month > 12){
		return false
	}
	
	if(date.length !== 2 || +date > 31){
		return false
	}
	return true
}

export default isDateValid


