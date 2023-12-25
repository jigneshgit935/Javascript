function SetUsername(username) {
  this.username = username;
  console.log('called');
}

function createUser(username, email, age) {
  SetUsername.call(this, username);
  this.email = email;
  this.age = age;
}

const jinu = new createUser('jinu', 'jinu@gmail.com', '23');
console.log(jinu);
