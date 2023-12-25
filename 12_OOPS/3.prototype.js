// const myName = 'Jinu           ';
// const myName2 = 'Sharma  ';

// console.log(myName.trim().length);
// console.log(myName.trueLength);

// more example

let myHero = ['thor', 'spiderman'];

let myHeros = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// it will be a global funciton which we can use anywhere with anyone
Object.prototype.jignesh = function () {
  console.log(`jignesh is present in all object`);
};

Array.prototype.heyJignesh = function () {
  console.log('Hey jignesh');
};

// myHero.jignesh();
myHero.jignesh();

// in this we  have given power to array only so only array can access
myHero.heyJignesh();

// not this one becoz it is object
// myHeros.heyJignesh();

/////////////////------------Inheritance---------------/////////////////
//prototype inheritance
const User = {
  name: 'manvik',
  mail: 'manvik@gmail.com',
};
const teacher = {
  makeVideo: true,
};
const teachingAssistant = {
  isAvailable: false,
};

const TASupport = {
  makeassignment: 'JS assignment',
  fullTime: true,
  __proto__: teachingAssistant,
};

teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(teacher, teachingAssistant);

// solve
let anotherUsername = 'Hemlata   ';

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();

'Jinu  '.trueLength();
'Kirti     '.trueLength();
