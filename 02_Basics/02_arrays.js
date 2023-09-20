const name = ['jinu', 'jignesh', 'manvik', 'kirti'];

const name2 = ['vikas', 'deepak', 'nikhil'];

// name.push(name2);
// console.log(name);
// console.log(name[4][0]);

// concat
// const allnames = name2.concat(name);
// console.log(allnames);

// spread operator
// const allNames = [...name, ...name2];
// console.log(allNames);

//
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 14]]];
const another_array_result = another_array.flat(Infinity);
console.log(another_array_result);

console.log(Array.isArray('jignesh'));
console.log(Array.from('jignesh'));
// console.log(Array.from({ name: 'jinu' }));  interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
