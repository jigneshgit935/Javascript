const score = 500;

console.log(score);

const scoreNum = new Number(500);
console.log(scoreNum);

console.log(scoreNum.toString());
console.log(scoreNum.toFixed(2));

const otherNum = 123.8966;
console.log(otherNum.toPrecision(3));
// console.log(otherNum.toExponential(3));

const numbers = 1000000;
console.log(numbers.toLocaleString());
console.log(numbers.toLocaleString('en-IN'));

console.log('Number END');
//------------------Maths----------------------//

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.sqrt(25));
console.log(Math.min(3, 5, 6, 1, 7));
console.log(Math.max(3, 5, 6, 1, 7));

console.log(Math.random() * 4);
console.log(Math.random() * 4 + 1);

console.log('Random');

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
