// nested scope

function one() {
  let username = 'jignesh';

  function two() {
    let website = 'mattecurve';
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

// inside if else
if (true) {
  let username = 'jinu';
  if (username === 'jinu') {
    let website = ' jignesh.com';
    // console.log(username + website);
  }
  //   console.log(website);
  //   console.log(username);
}
// console.log(username);

// ///////////////////interesting//////////////////////////////
function addNum(num) {
  return num + 1;
}
addNum(2);

const addtwo = function (num) {
  return num + 3;
};
addtwo(3);
