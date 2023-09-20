// primitive
// ==> 7 types primitive types

/*
String , Number , Boolean , Undefined , Null , Symbol , Bigint
*/

// Non Primitive or Reference
/*
memory mai inka reference direct allocate kiya jaa skta hai


// Array , Object , Function


const heros =["shaktiman",doga","hanuman"]

let myObj={
    name:"jinu",
    age:"21"
}

const funtion = funtion(){
    console.log("Hello World")
}
*/

// ---------------------------------------------------------------------------//
/*
Stack (Primitive) == we get a copy of an variable which we have declared
Heap (Non-Primitive) == we get a reference wheneveof an original value, if we change value we will get orinal value
*/

let myName = 'Jignesh';

let myNewName = myName;

myNewName = 'Jinu';
console.log(myNewName);
console.log(myName);

let userOne = {
  email: 'jignesh@gmail.com',
  upi: '@12cdindi',
};

let userTwo = userOne;
userTwo.email = 'manvik@gmail.com';
console.log(userOne.email);
console.log(userTwo.email);
