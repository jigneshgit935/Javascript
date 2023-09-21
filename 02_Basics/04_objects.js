// const tinderApp = new Object();   singleton object

// and this is non singleton object
const tinderApp = {};

tinderApp.id = '122d';
tinderApp.name = 'jinu';
tinderApp.email = 'jinugmail.com';
console.log(tinderApp);

const regularuser = {
  email: 'jinu@gmail.com',
  fullname: {
    userfullname: {
      lastname: 'Sharma',
      firstname: 'Jignesh',
    },
  },
};
console.log(regularuser);
console.log(regularuser.fullname?.userfullname.firstname);

const obj1 = {
  1: 'a',
  2: 'b',
};

const obj2 = {
  3: 'c',
  4: 'd',
};

// const newObj = { ...obj1, ...obj2 };
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj);

// Database se jab value ati h
const users = [
  {
    id: 1,
    email: 'j@gmail.com',
  },
  {
    id: 2,
    email: 'p@gmail.com',
  },
];

console.log(users[0]);

console.log(tinderApp);
console.log(Object.keys(tinderApp));
console.log(Object.values(tinderApp));
console.log(Object.entries(tinderApp));

console.log(tinderApp.hasOwnProperty('email'));
