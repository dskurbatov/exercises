function dateFormate(array){
	const currentYear = new Date().getFullYear()
	if(array.length !== 3){
		return false
	}
	const [year, month, date] = array
	if(isNaN(year) || year.length !== 4 || +year < currentYear){
		return false
	}
	
	if(isNaN(month) || month.length !== 2 || +month > 12){
		return false
	}
	
	if(isNaN(date) || date.length !== 2 || +date > 31){
		return false
	}
	return true
}

function isValidDateAndRange(str1, str2){
	const d1 = str1.split('-')
	const d2 = str2.split('-')
	if(dateFormate(d1) && dateFormate(d2)){
		const from = new Date(...d1)
		const to = new Date(...d2)
		return to.getTime() > from.getTime()
	}
	return false
}

//export default isValidDateAndRange
function assert(number, actual, expected, testName){
	if(actual === expected){
		console.log(number, 'passed')
	} else {
		console.log(number, `FAILED [${testName}] Expected "${expected}" to be equal "${actual}"`)
	}
}

//tests
assert(1, false, dateFormate(["2018","to", "12"]), 'should return false if date string contains not a number')
assert(2, false, dateFormate(["2017","11","12"]), 'should return false if year is less than current year')
assert(3, false, dateFormate(["2018","9", "12"]), 'should return false if month is present as one digit')
assert(4, false, dateFormate(["2018", "9", "12"]), 'should return false if month is present as one digit')
assert(5, false, dateFormate(["2018", "09", "2"]), 'should return false if date is present as one digit')
assert(6, false, dateFormate(["2018","13", "02"]), 'should return false if month is greater than 12')
assert(7, false, dateFormate(["2018", "12", "32"]), 'should return false if date is greater than 31')
assert(8, true, dateFormate(["2018", "12", "31"]), 'should return true')
assert(9, false, dateFormate(["2018", "12"]), 'should return false if month or date or year is not present')