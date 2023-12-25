class User {
  constructor(username) {
    this.username = username;
  }

  loggedIn() {
    console.log(`USERNAME is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`new course was added by: ${this.username}`);
  }
}

const teacher = new Teacher('sneha', 'sneha@gmail.com', 'snehadsoucr221');
// console.log(teacher);
// teacher.addCourse();
// teacher.loggedIn();

const j = new User('j');
// console.log(j);
// j.loggedIn();

// console.log(teacher === j);
// console.log(j === teacher);

// console.log(teacher instanceof j);
console.log(User instanceof Teacher);
console.log(j instanceof Teacher);
console.log(teacher instanceof Teacher);
