let score = 33;
console.log(typeof score); //it ia a number

// let score1 = '33'; => 33
// let score1 = '33abc'; => NaN
// let score1 = null; => 0
// let score1 = undefined; =>NaN
// let score1 = true; =>1
// let score1 = false; => 0
let score1 = 'jignesh'; //=> NaN
console.log(typeof score1); //it ia a string

let valueInNumber = Number(score1);
// console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLogged = 1; =>true
// let isLogged = 0; -> false
// let isLogged = ''; =>false
let isLogged = 'ji'; // => true

let loggedIn = Boolean(isLogged);
console.log(loggedIn);

let sumNumber = 23;

let convertNumbertoString = String(sumNumber); //=>33
// console.log( convertNumbertoString); => 33
console.log(typeof convertNumbertoString); // =>string

// ==================Operation===============================//
let value = 1;
let negValue = -value;
// console.log(negValue); //=> -1

// console.log(2 % 6);

let str1 = 'jignesh';
let str2 = ' sharma';
let str3 = str1 + str2;
console.log(str3);

// console.log('1' + '2');
// console.log('1' + 2);
// console.log(1 + '2');
// console.log(1 + 2);
// console.log('1' + 2 + 2);
// console.log(1 + 2 + '2');

// console.log(+true); // 1
// console.log(true+); //error
// console.log(+''); // 0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
