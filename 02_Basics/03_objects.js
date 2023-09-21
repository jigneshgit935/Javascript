// singleton ---> contructor se jo banega vo singleton rahega, or jo literals se banega vo singleton nhi rahega
// Object.create

// object literals

const sym = Symbol('mykey');

const JsUser = {
  name: 'jinu',
  'full name': 'Jignesh Sharma',
  [sym]: 'keys',
  age: 23,
  location: 'Udaipur',
  email: 'jinu@gmail.com',
  isLoggedIn: false,
  loginDays: ['Monday', 'Tuesday'],
};
console.log(JsUser['age']);
console.log(JsUser['full name']);
console.log(JsUser[sym]);
console.log(typeof JsUser[sym]);

JsUser.email = 'jignesh@gmail.com';
console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.age = 44;
// console.log(JsUser);

// functions
JsUser.greeting = function () {
  console.log(`Hello JsUser ${this['full name']}`);
};

console.log(JsUser.greeting());
