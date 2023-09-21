console.log('Immediately invoked functions');

// global scope k pollution se scope hoti h kaibaar , to ush global scope k variables h ya jo bhi uske decalaration ko hataane k liye

// IIFE
(function chai() {
  console.log('DB Connected');
})();

//unnamed IIFE

((name) => {
  console.log(`DB Connected ${name}`);
})('jinu');
