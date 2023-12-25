// constructor =: jese hee class se ek Object initialize hoga (it means jese hee vo new keyword use mai lenge) vese he contructr apne aap call hojaata hai
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}cmdkiv3e24n2n`;
  }

  usernameChange() {
    return `${this.username.toUpperCase()}`;
  }
}

const jignesh = new User('jignesh', 'jignesh@gmail.com', 'jgiefvd');
// console.log(jignesh.encryptPassword());
// console.log(jignesh.usernameChange());

// behind the scenes
function getUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Object.prototype.encryptPassword = function () {
  return `${this.password}cmdkiv3e24n2n`;
};
Object.prototype.usernameChange = function () {
  return `${this.username.toUpperCase()}`;
};

const jinu = new getUser('jinu', 'jinu@gmail.com', '2193finvunf');
// console.log(jinu.encryptPassword());
// console.log(jinu.usernameChange());
