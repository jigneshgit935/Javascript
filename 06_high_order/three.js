const coding = ['js', 'Cpp', 'Java'];

// coding.forEach((item) => {
//   console.log(item);
// });

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const mycoding = [
  {
    name: 'jinu',
    age: 21,
  },
  {
    name: 'manvik',
    age: 2,
  },
  {
    name: 'nikita',
    age: 24,
  },
];

mycoding.forEach((item) => {
  console.log(item.name, 'age is:', item.age);
});
