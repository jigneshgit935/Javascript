// Dates

const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 2, 23, 3, 4);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDateNew = new Date('01-12-2023');
console.log(myCreatedDateNew.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDateHere = new Date();
console.log(newDateHere);
console.log(newDateHere.getMonth());
console.log(newDateHere.getHours());
console.log(newDateHere.getTime());
// console.log(newDateHere.get());

const reuslt = newDateHere.toLocaleString('default', {
  weekday: 'long',
  day: '2-digit',
  hour: 'numeric',
});

console.log(reuslt);
