//input str
//output array
export function isDateValid(string){
	const array = string.split('-')
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

//input array of strings
//output 3D array
function validate(array){
	return array.map(str => {
		const arr = str.split(' to ')
		return arr.map(str => {
			return isDateValid(str)
		})
	})
}

export default validate


