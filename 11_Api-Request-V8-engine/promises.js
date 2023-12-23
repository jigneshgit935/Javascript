// 1.
// const promiseOne = new Promise(function (resolve, reject) {
//   // do async task
//   //   DB Calls, cryptography, network

//   setTimeout(function () {
//     console.log('Async task is completed');
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log('Promise consumed');
// });

// 2.
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Async 2 is called');
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log('Async 2 is consumed');
// });

// 3.
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: 'Jinu', email: 'jinu@gmail.com' });
//   }, 2000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// 4.
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ user: 'jignesh', password: '123' });
//     } else {
//       reject('Error: Something went wrong');
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.user;
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('The Promise is either resolved or rejected');
//   });

// 5.
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ user: 'manvik', password: '123' });
//     } else {
//       reject('Error: JS went wrong');
//     }
//   }, 2000);
// });

// async function consumePromise5() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise5();

//6.
// async function GetAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E:Something went wrong');
//   }
// }
// GetAllUsers();

// in .then.catch
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
