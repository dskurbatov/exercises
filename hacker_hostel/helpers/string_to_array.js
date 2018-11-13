function stringToArray(str, separater, callback){
	if(!str){
		return []
	}
	if(!separater){
		separater = ''
	}
	return str.split(separater).map(callback)
}

export default stringToArray