const user = {
  name: 'jignesh',
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.name}, welcome to coding`);
    console.log(this); //context create karta h
  },
};
// user.welcomeMessage();
// user.name = 'jinu';
// user.welcomeMessage();

// console.log(this);

// we can use this keyword inside objects

// function chai() {
//   //   let username = 'jnu';
//   //   console.log(this.username);
//   console.log(this);
// }

// chai();

//  more examples
// const chai = () => {
//   let username = 'jinu';
//   console.log(this.username);
//   console.log(this);
// };
// chai();

//
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(2, 3));

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(2, 3));

// const addTwo = (num1, num2) => ({ name: 'jinu' });
// console.log(addTwo(2, 3));

// const addTwo = (num1, num2) => {
//   return { name: 'jinu' };
// };
// console.log(addTwo(2, 3));

// ///////
