// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumber(2, 3);
// console.log('Result:', result);

function addTwoNumber(number1, number2) {
  return number1 + number2;
  //   console.log('Jignesh');
}

const result = addTwoNumber(2, 3);
// console.log('Result:', result);

// more
function userLogin(username = 'jignesh') {
  if (!username) {
    console.log('Please enter a username');
    return;
  }
  return `${username} is logged in`;
}
// const userLog = userLogin('Jignesh');
const userLog = userLogin();
// console.log(userLog);

//more exampples
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(300, 200, 330, 5000));

// objects with fn
const user = {
  username: 'Jignesh',
  price: 219,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: 'jinu',
  price: 1000,
});

// array
const myNewArr = [300, 400, 500];
function printArr(getArr) {
  return getArr[0];
}

// console.log(printArr(myNewArr));
console.log(printArr([2000, 1000, 20]));
