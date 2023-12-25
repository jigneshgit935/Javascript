class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}jignesh`;
  }

  set password(value) {
    // this._password = value.toUpperCase();
    this._password = value;
  }
}

const jignesh = new User('Jignesh', 'abs');
console.log(jignesh.password);
console.log(jignesh.email);

// why to use getter and setter
/* agar humne koi class bana rakhi ho,
 jiska access hum sabko nhi dena chahte ya kisi kisi, or kuch customize code krna chahte */

/*
 what is getter and setter :- suppose I dont want to give password access to anybody, to kese krke error denge


 if we define getter then we have to use  setter too


 class se bahar koi value get krna h we use getter 
 class k andr koi value set krna h we use setter 
 */
