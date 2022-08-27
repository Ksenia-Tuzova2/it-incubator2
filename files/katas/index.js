//сделай любое число негативным
function makeNegative(num) {
	if (num < 0) return num
	else if (num > 0) {
		return -num
	} else if (num == 0) return num
}

//переверни строку


function solution(str) {
	return str.split('').reverse().join('')
}
//check

function stringToArray(string) {
	return string.split(' ');
	// code code code

}