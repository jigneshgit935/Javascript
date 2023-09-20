// array

const myArr = [1, 2, 3, 4, 'jignesh'];
// const myArr1 = ['Shaktiman', 'Naagraaj'];
// const myArr2 = new Array(1, 2, 4, 5);

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr1);
// console.log(myArr2);

// Array methods
// myArr.push(2);
// myArr.push(8);
// myArr.pop();

//
// myArr.unshift(0);
// myArr.shift();

//

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(4));

//

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice or splice
console.log('A ', myArr);
const mynewArr1 = myArr.slice(1, 4);
console.log(mynewArr1);

console.log('B ', myArr);

const spliceArr = myArr;
console.log('splice', spliceArr);
console.log(myArr);
console.log(spliceArr.splice(2, 4));

// splice do the oringal manipulation in array
