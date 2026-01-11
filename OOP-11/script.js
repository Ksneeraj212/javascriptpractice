"use strict";

const person = function (firstname, birthyear) {
  //Instance properties
  this.firstname = firstname;
  this.birthyear = birthyear;
};
const Neeraj = new person("Neeraj", 1987);
console.log(Neeraj);
/*
1) New {} is created
2)function is called , this = {}
3){} is linked to a prototype
4) function auto maticlly returns {} 
5) each function in JS automatically  has a property called prototype & that includes constuctor function
6)Every object that created by a certain constructor will get access to all the methods & properties that we define on constructor proptotype property
*/
const koustubh = new person("Koustubh", 1992);
const prateek = new person("Prateek", 1997);
console.log(koustubh, prateek);

console.log(koustubh instanceof person); // true
person.hey = function () {
  console.log("Hey there 👏");
  console.log(this);
};
//Protypes
console.log(person.prototype);
person.prototype.calcAge = function () {
  console.log(this.birthyear - 2022);
};
person.hey();
koustubh.calcAge(); //Access of function due to prototype inhertaince
Neeraj.calcAge();
console.log(Neeraj.__proto__);
console.log(koustubh.__proto__ === person.prototype); //true
console.log(person.prototype.isPrototypeOf(koustubh)); //true, this confirm that person.prototype.isPrototypeOf(koustubh)
console.log(person.prototype.isPrototypeOf(person)); //false
person.prototype.species = "Human";
console.log(Neeraj.species, koustubh.species); //Human Human
console.log(Neeraj.hasOwnProperty("firstname")); //true
console.log(Neeraj.hasOwnProperty("species")); //false

console.log(Neeraj.__proto__);
console.log(Neeraj.__proto__.__proto__);

class personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods
  //Methods added to the prototype property
  calAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a fullName`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static Hey() {
    console.log("Hey there 👏");
    console.log(this);
  }
}
const Neerajs = new personcl("Neeraj Shukla", 1987);
console.log(Neerajs);
Neerajs.calAge();
console.log(Neerajs.age);

console.log(Neerajs.__proto__ === personcl.prototype);

Neerajs.greet();
//1)Classes are not Hoisted
//2)classes are first class citizens
//3)classes are always excuted in strict mode
const accounts = {
  owner: "Jonas",
  movments: [200, 300, 400, 500, 600],
  get latest() {
    return this.movments.slice(-1).pop();
  },
  set latest(mov) {
    this.movments.push(mov);
  },
};
console.log(accounts.latest);
accounts.latest = 50;
console.log(accounts.movments);
personcl.Hey();

const personProto = {
  calAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(personProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calAge();
console.log(steven.__proto__);
console.log(steven.__proto__ === personProto);

const sarah = Object.create(personProto);
sarah.init("Sarah", 2003);
sarah.calAge();

const student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear);
  this.course = course;
};
student.prototype = Object.create(person.prototype);
student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} & i Study ${this.course}`);
};

const mike = new student("Mike", 2020, "CS");
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof person);
console.log(mike instanceof student);
console.log(mike instanceof Object);

console.dir(student.prototype.constructor);
class studentCl extends personcl {
  constructor(fullName, birthYear, course) {
    //Super function is constructor function of thr parent class
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My Name is ${this.fullName} & i Study ${this.course}`);
  }
  calAge() {
    console.log(
      `I'm ${2022 - this.birthYear} years old, but as a student i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martha = new studentCl("Martha Jones", 2012, "CS");
martha.introduce();
martha.calAge();
const Studentproto = Object.create(personProto);
Studentproto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jay = Object.create(Studentproto);
jay.init("Jay", 2020, "cs");

class Account {
  //Public Feilds
  locale = navigator.language;
  //private Feilds
  #movments = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this._movments = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening account , ${owner}`);
  }
  getMovements() {
    return this.#movments;
  }
  deposit(val) {
    this.#movments.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  // Private Methods
  #approveLoan(val) {
    return true;
  }
  //Static methods
  static helper() {
    console.log("Helper");
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }
}

const acc1 = new Account("Neeraj", "EUR", 1111);
acc1.deposit(1000);
acc1.withdraw(140);
console.log(acc1);

//Chaining
acc1.deposit(300).deposit(5000).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
