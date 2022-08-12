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

//меньше чем
function testLessThan(val) {
	if (val < 25) {  // Change this line
		return "Under 25";
	}

	if (val < 55) {  // Change this line
		return "Under 55";
	}

	return "55 or Over";
}

testLessThan(10);

//меньше или равно

function testLessOrEqual(val) {
	if (val <= 12) {  // Change this line
		return "Smaller Than or Equal to 12";
	}

	if (val <= 24) {  // Change this line
		return "Smaller Than or Equal to 24";
	}

	return "More Than 24";
}

testLessOrEqual(10);

//оператор и 
function testLogicalAnd(val) {
	// Only change code below this line

	if (val <= 50 && val >= 25) {

		return "Yes";

	}

	// Only change code above this line
	return "No";
}

testLogicalAnd(10);

//повторить тест
function testLogicalOr(val) {
	// Only change code below this line

	if (val > 20 || val < 10) {
		return "Outside";
	}

	return "Inside";
	// Only change code above this line

}

console.log(testLogicalOr());

//else
function testElse(val) {
	let result = "";
	// Only change code below this line

	if (val > 5) {
		result = "Bigger than 5";
	}

	else {
		result = "5 or Smaller";
	}

	// Only change code above this line
	return result;
}

testElse(4);


//
function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	}

	else if (val < 5) {
		return "Smaller than 5";
	}
	else {
		return "Between 5 and 10";
	}

}

testElseIf(7);

//порядок очень важен 
function orderMyLogic(val) {
	if (val < 5) {

		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}

orderMyLogic(7);

//делаем цепочку
function testSize(num) {
	// Only change code below this line
	if (num < 5) {
		return 'Tiny'
	} else if (num < 10) {
		return 'Small'
	}
	else if (num < 15) {
		return 'Medium'
	}

	else if (num < 20) {
		return 'Large'
	}
	else if (num >= 20) {
		return 'Huge'
	}


	return "Change Me";
	// Only change code above this line
}

testSize(7);

//
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes == 1) {
		return "Hole-in-one!"
	} else if (strokes <= par - 2) {
		return "Eagle"
	} else if (strokes == par - 1) {
		return "Birdie"
	}
	else if (strokes == par) {
		return "Par"
	}
	else if (strokes == par + 1) {
		return "Bogey"

	}
	else if (strokes == par + 2) {
		return "Double Bogey"
	}
	else if (strokes >= par + 3) {
		return "Go Home!"
	}

	return "Change Me";
	// Only change code above this line
}

golfScore(5, 4);

//switch
function caseInSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case 1: answer = 'alpha';
			break;
		case 2: answer = 'beta';
			break;
		case 3: answer = 'gamma';
			break;
		case 4: answer = 'delta';
			break;
	}


	// Only change code above this line
	return answer;
}

console.log(caseInSwitch(1));

//swithc and default
function switchOfStuff(val) {
	let answer = "";
	// Only change code below this line

	switch (val) {
		case 'a':
			answer = 'apple';
			break;
		case 'b':
			answer = 'bird';
			break;
		case 'c':
			answer = 'cat';
			break;

		default:
			answer = 'stuff';
			break;
	}

	// Only change code above this line
	return answer;
}

switchOfStuff(1);

//несколько выходов кейс 
function sequentialSizes(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}


	// Only change code above this line
	return answer;
}

sequentialSizes(1);

//задание элс иф пределать на свитч и кейс
function chainToSwitch(val) {
	let answer = "";
	// Only change code below this line

	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case (42):
			answer = "The Answer";
			break;
		case (1):
			answer = "There is no #1";
			break;
		case (99):
			answer = "Missed me by this much!";
			break;
		case (7):
			answer = "Ate Nine";
			break;
	}

	// Only change code above this line
	return answer;
}

chainToSwitch(7);


//вместо элс иф простое решение
function isLess(a, b) {
	// Only change code below this line
	return a < b

	// Only change code above this line
}

isLess(10, 15);

//функция вернет перый ретурн
// Setup
function abTest(a, b) {
	// Only change code below this line
	if (a < 0 || b < 0) return undefined


	// Only change code above this line

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//создание массива
const myDog = {
	// Only change code below this line
	name: 'Sharik',
	legs: 4,
	tails: 1,
	friends: []

	// Only change code above this line
};

//считываем значение 

// Setup
const testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//получаем значение через строку 

// Setup
const testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//присваеваем новой переменной значение, а потом при помощи нее ищем что-то в объекте
// Setup
const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//изменение какого-то конкретного параметра
// Setup
const myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder'

//добавление новой пары

const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};
myDog.bark = "bow-wow";

//удаляем пару из объекта
// Setup
const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
};

// Only change code below this line
delete myDog.tails

//изменяем свитч на объект, присваеваем локальной переменной поиск по этому объекту
// Setup
function phoneticLookup(val) {
	let result = "";

	// Only change code below this line

	var lookup = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank",
	}
	// switch(val) {
	//   case "alpha":
	//     result = "Adams";
	//     break;
	//   case "bravo":
	//     result = "Boston";
	//     break;
	//   case "charlie":
	//     result = "Chicago";
	//     break;
	//   case "delta":
	//     result = "Denver";
	//     break;
	//   case "echo":
	//     result = "Easy";
	//     break;
	//   case "foxtrot":
	//     result = "Frank";
	// }
	result = lookup[val]
	// Only change code above this line
	return result;
}

const myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

const secondTree = myPlants[1].list[1];

phoneticLookup("charlie");


//свойство checkOwnProp(propname ) для проверки объектов на определенное свойство

function checkObj(obj, checkProp) {
	// Only change code below this line
	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp]
	} else return "Not Found";

	// Only change code above this line
}

//добавляю новый объект в массив

const myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	}
];

myMusic.push(
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	}
)

//получаем доступ к свойству объекта

const myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

let gloveBoxContents = undefined;

gloveBoxContents = myStorage.car.inside['glove box']

//получаем доступ к вложенным массивам 

const myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

const secondTree = myPlants[1].list[1];

//codewars

//wilson primes
function amIWilson(p) {
	// check if prime is Wilson
	if (p === 563) return true
	else if (p === 13) return true
	else if (p === 5) return true
	else return false
}

//проверка на нан

const isReallyNaN = (val) => {
	if (val === undefined) {
		return false
	} else if (typeof (val) === "object") {
		return false
	} else if (typeof (val) === "string") {
		return false
	} else if (typeof (val) === "function") {
		return false
	} else if (isNaN(val)) {
		return true
	} else
		return false
}

//считаем числа н кратные х

function countBy(x, n) {
	var z = [];
	for (i = 1; i <= n; i++) {
		z.push(x * i);
	}
	return z;
}

//проверить тот же случай

function sameCase(a, b) {
	if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
		return -1
	} else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
		return 1
	} else {
		return 0
	}
}

//за последние 2 дня

// цикл вайли выполняется пока условие соблюдается 
const myArray = [];
let i = 5;

while (i >= 0) {
	myArray.push(i);
	i--;
}
// Only change code below this line


//цикл фор 

const myArray = [];

for (let i = 0; i <= 5; i++) {
	myArray.push(i);

}

//перебор четных и нечетных чисел при помощи фор 
const myArray = [];

for (let i = 1; i <= 10; i += 2) {
	myArray.push(i)
}


//перебор нечетных чисел в обратном порядке 

const myArray = [];
for (let i = 9; i > 0; i -= 2) {
	myArray.push(i)
}

//здесь вложенность массивов, но мне не ясно каким образом мы используем продакт, и как оно делает произведение внутри подмасливав
function multiplyAll(arr) {
	let product = 1;
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}
	// Only change code above this line
	return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//do while

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
	myArray.push(i);
	i++;
} while (i < 5)

//тернарный оператор 
function checkEqual(a, b) {
	return a == b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);

//преобразование строки в целое число 

function convertToInteger(str) {
	return parseInt(str)
}

convertToInteger("56");

//преобразование числа в двоичное - не очень понимаю как это работает

function convertToInteger(str) {
	return parseInt(str, 2);
}

convertToInteger("10011");