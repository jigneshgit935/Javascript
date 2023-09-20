const name = 'jignesh';

const repo = 64;

// string interpolation//
console.log(`My name is ${name} and my repo count is ${repo}`);

const myName = new String('jignesh-sharma-here');
console.log(myName[0]);
console.log(myName.length);
console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.endsWith('h'));
console.log(myName.indexOf('h'));
console.log(myName.indexOf('h'));

const newString = myName.substring(0, 4);
console.log(newString);

const anotherName = myName.slice(3, 5);
console.log(anotherName);

const stringNew = '   jignesh     ';
console.log(stringNew);
console.log(stringNew.trim());
console.log(stringNew.trimStart());
console.log(stringNew.trimEnd());

const url = 'http://jignesh.com/jignesh%20sharma';

console.log(url.replace('%20', '-'));
console.log(url.includes('jignesh'));
console.log(url.includes('Jignesh'));

console.log(myName.split('-'));
