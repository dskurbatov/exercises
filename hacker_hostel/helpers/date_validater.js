function isValidDate(str) {
	const d = new Date(str)
  return d instanceof Date && !isNaN(d);
}

function isValidDateAndRange(str1, str2){
	if(isValidDate(str1) && isValidDate(str2)){
		return str2 > str1
	}
	return false
}

export default isValidDateAndRange