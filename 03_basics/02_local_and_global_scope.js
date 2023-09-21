// whatever we write outside scope is global and whatever we write inside scope is block scope

// let a = 12;
// const b = 20;
// var c = 30;
let a = 200;
if (true) {
  let a = 12;
  const b = 20;
  console.log('Innner Let', a);
  //   var c = 300;
}

console.log(a);

// console.log(a);
// console.log(b);
// console.log(c);
