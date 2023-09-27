// for of
// {"", "", ""}
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 5];
for (const num of arr) {
  //   console.log(num);
}

const greet = 'Hello World';

for (const greeting of greet) {
  if (greeting === ' ') {
    continue;
  }
  //   console.log(`Each char is ${greeting}`);
}

// Maps
const map = new Map();
map.set('In', 'India');
map.set('USA', 'United Stated of America');
map.set('Fr', 'France');

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, value);
}

const myObj = {
  game1: 'NFS',
  game2: 'Spiderman',
};
