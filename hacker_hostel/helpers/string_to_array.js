function stringToArray(str, callback){
	return str.split('\n').map(callback)
}

export default stringToArray