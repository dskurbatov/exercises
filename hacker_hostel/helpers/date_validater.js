//input array
//output array
function isDateValid(array){
	const currentYear = new Date().getFullYear()
	if(array.length !== 3){
		return []
	}

	const isEvery = array.every(item => !isNaN(item))
	if(!isEvery) {
		return []
	}
	
	const [year, month, date] = array
	if(year.length !== 4 || +year < currentYear){
		return []
	}
	
	if(month.length !== 2 || +month > 12){
		return []
	}
	
	if(date.length !== 2 || +date > 31){
		return []
	}
	return array
}

export default isDateValid


