class User {
  constructor(username) {
    this.username = username;
  }

  loggedIn() {
    console.log(`User name is ${this.username}`);
  }

  static createdId() {
    return `123`;
  }
}

const jignesh = new User('Jignesh');
// console.log(jignesh);
// console.log(jignesh.createdId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const jinu = new Teacher('Jinu', 'jinu@gmail.com');
jinu.loggedIn();
console.log(jinu.createdId());
