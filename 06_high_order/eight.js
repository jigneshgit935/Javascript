// /reduce
// const check = [1, 2, 3, 4];
// const initialValue = 0;
// const result = check.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(result);

const shoppincart = [
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
];

const totalResult = shoppincart.reduce((acc, item) => acc + item.price, 0);
console.log(totalResult);
