// Object literal
const user = {
  username: 'Jignesh',
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log('Get user details from database');
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

////////////////- new(keyword)-///////////////
// it allows us that ki , ek hee Object Literals se Multiple instances bana sako
// naya context banane k liye kaam aata h - or isiko hum constructor function kehte h

// 1.
// function User(username, loggedIn, loginCount) {
//   this.username = username;
//   this.loggedIn = loggedIn;
//   this.loginCount = loginCount;

//   return this;
// }

// const userOne = User('Jinu', true, 12);

// // this overrides our code data
// const userTwo = User('Jignesh', false, 23);
// console.log(userOne);

// 2.
function User(username, loggedIn, loginCount) {
  this.username = username;
  this.loggedIn = loggedIn;
  this.loginCount = loginCount;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; //implicity this return hota hee h , even if you dont write
}

const userOne = new User('Jinu', true, 12);

const userTwo = new User('Jignesh', false, 23);
// console.log(userOne);
console.log(userTwo.greeting());
// console.log(userTwo.constructor);

// contructor property is nothing but a reference khudh k hee bare mai

// new - keyword make a new instace or we can say it creates the copy,  without overridding any code

/* 
more about - new -  keyword
1.first of all , ek empty object create hota hai (to which we call instance)
2.ek constructor fn call hota h - new keyword k karaan , ye usme saare arguments usme pack krta h,  and gives us back
3.the this keyword we have , jo bhi humne arguments humne likhe h vo usme inject hojaate h
4.in last step we get all inside the functions

//basic working working mechanism


 
// in this only encapsulation is working even abstraction
*/
