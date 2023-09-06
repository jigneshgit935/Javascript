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
