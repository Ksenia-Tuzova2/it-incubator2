var myName;

// Setup
var a ;
a = 7;

// var a;
// a = 7;
// var b;
// b = a;

// var a = 9

var myFirstName='Ksenia'
var myLastName = 'Tuzova'
// Only change code below this line

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//camel case

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//use let 
let catName = "Oliver";
let catSound = "Meow!";

//use const 
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
const FACT = "is awesome!";
console.log(FCC, fact); // Change this line

//use divide
const quotient = 66 / 33;

//use increment
let myVar = 87;

// Only change code below this line
myVar = ++myVar;

//use decrement
let myVar = 11;

// Only change code below this line
myVar = --myVar;

//use decimal -десятичные -number
const ourDecimal = 5.7;

// Only change code below this line

const myDecimal = 5.7

//multyplie decimal number
const product = 2.0 * 2.5;

//divide decimal number
const quotient = 4.4 / 2.0;

//use reminder
const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//в конце первой строки должен быть пробел
const myStr = "This is the start ." + "This is the end."; // Change this line

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//
const myName = "Ksenia";
const myStr = "My name is" + myName + 'and I am well!';

//
const someAdjective = "sasd";
let myStr = "Learning to code is ";

myStr += someAdjective

//
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//length

let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; 

//можно поменять строку только полностью, а не отдельные элементы
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//ищем последнюю букву строки
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//ищем с конца предпоследний символ строки
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//собираем предложение
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = 'A ' + myNoun + ' is ' + myAdjective + ' and it ' + myVerb + ' ' + myAdverb;

//arrays
const myArray = ["peanut butter", 13];

//вложенный массив
const myArray = [["Bulls", 23], ["White Sox", 45]];

//копируем массив в переменную
const myArray = [50, 60, 70];

let myData = myArray[0]

//меняем элемент массива
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45

//выбираем конкретный элемент из массива массивов

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// метод пуш проталкивает вконец 
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray.push(["dog", 3])

//удаляем элемент и присваиваем его 
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop()

//удаляем первый элемент и присваеваем его в новую переменную
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray = myArray.shift()

//unshift добавляет в начало массива
//ИСПОЛЬЗОВАТЬ В СВОЕМ ПРИЛОЖЕНИИ
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

myArray.unshift(["Paul", 35])

//создаем список при помощи пуш
const myList = [];

myList.push(["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15])

//создание и вызов функции
function reusableFunction() {
	console.log("Hi World");
}
reusableFunction()

//создание функции с параметры и сложение 
function functionWithArgs(param1, param2) {
	console.log(param1 + param2);
}
functionWithArgs(2, 6)

//возвращаем новое значение при помощи функции
function timesFive(num) {
	return num * 5;
}

const answer = timesFive(5);

//видимость  глобальных переменных внутри функции
let myGlobal = 10

function fun1() {
	// Assign 5 to oopsGlobal Here
	oopsGlobal = 5
}


// Only change code above this line

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

//мы можем вызвать в параметрах внутреннюю перменную при вызове функции, но не в других функциях, например здесь в консоль лог она не будет видна, 
function myLocalScope() {
	// Only change code below this line
	let myVar
	console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//это две разных переменных

const outerWear = "T-Shirt";

function myOutfit() {
	// Only change code below this line
	let outerWear = 'sweater'
	// Only change code above this line
	return outerWear;
}

myOutfit();
console.log(outerWear)

//если нет ретурна- возращаемое значение будет равно андефайнд
let sum = 0;

function addThree() {
	sum = sum + 3;
}

// Only change code below this line
function addFive() {
	sum = sum + 5
}

// Only change code above this line

addThree();
addFive();

//присваиваю возвращаемое значение

let processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7) 

//удаляем и добавляем элементы массива при помощи функции, потом возвращаем удаленный элемент при помощи переменной
function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item)
	let removed = arr.shift()
	return removed;
	// Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//boolean type

function welcomeToBooleans() {
	// Only change code below this line

	return true; // Change this line

	// Only change code above this line
}
function testEqual(val) {
	if (val == 12) {
		// Change this line
		return "Equal";
	}
	return "Not Equal";
}
// Change this value to test
testEqual(12);

function testStrict(val) {
	if (val === 7) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

testStrict(10);

//узнать тип данных

typeof 3
typeof '3'
typeof 3возвращает строку numberи typeof '3'возвращает строку string.


//изменяем функцию, когда она строго равна

function compareEquality(a, b) {
	if (a === b) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

compareEquality(10, "10");

//неравенство

function testNotEqual(val) {
	if (val != 99) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testNotEqual(10);

//строгое неравенство
function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testStrictNotEqual(10);

//оператор больше чем

function testGreaterThan(val) {
	if (val > 100) {  // Change this line
		return "Over 100";
	}

	if (val > 10) {  // Change this line
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);

//больше или равно
function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
		return "20 or Over";
	}

	if (val >= 10) {  // Change this line
		return "10 or Over";
	}

	return "Less than 10";
}

testGreaterOrEqual(10);