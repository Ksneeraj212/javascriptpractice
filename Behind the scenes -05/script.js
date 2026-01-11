"use strict";
// function calcAge(birthYear){
//     const age = 2021 -  birthYear;
//     //console.log(firstName);
//     function printAge(){
//         const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);
//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true;
//             //str can accesed as it is declared as CONST which is block scope
//             const str = `oh , you 're a millenial, ${firstName}`;
//             console.log(str);
//             function add(a,b){
//                 return a+b;
//             }
//         }
//         //Cannot be access str
//         //console.log(str);
//         //can be accssed millenial as its declared as VAR which is a function scope
//         console.log(millenial);
//         //cannot call add method as it is inside the block , as functions are blocked scope
//         add(2,3);// will get error Not defined as we are using strict mode
//     };
//     printAge();
//     return age;
// }
// const firstName ='Neeraj';
// calcAge(1987);

//Hoisting : makes some types of variables accessible/usable in the code before they are actually declared.'Variables lifted to 
// the top of their scope';
// console.log(me);
// console.log(job);// at this point the varible  "job"is still in temporeory dead zone(TDZ)
// console.log(year);// at this point year is in TDZ
// var me="Neeraj"; // values with var are hoisted with value undefined
// let job="Developer";
// const year = 1987;
// //Functions
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));
// function addDecl(a,b){
//     return a+b;
// }
// const addExpr= function(a,b){// addExpr is in TDZ , if replaced with VAR then we will get undefined
//     return a+ b;
// }
// const addArrow = (a,b)=> a+b; // addArrow is in TDZ , if replaced with VAR then we will get undefined
//console.log(this);// this keyword in the global scope  will refer to this keyword
// const calcAge = function(birthYear){
//     console.log(2021 - birthYear);
//    // console.log(this);// in strict mode , this will result in undefined for regular function call, in normal mode this will refer
//     // to global window
// };

// calcAge(1987);
// const calcAgeArrow = birthYear => {
//     console.log(2021 - birthYear);
//    // console.log(this);//Arrow function doen't get its own THIS keyword, it will refer to parent scope this keyword
// };
// calcAgeArrow(1988);

// const Neeraj = {
//     year :1987,
//     calcAge : function(){
//         console.log(this);
//         console.log(2021 -  this.year);
//     }
// };
// Neeraj.calcAge();
// const shukla = {
//     year : 1999
// };
// shukla.calcAge = Neeraj.calcAge; //method Borrowing

// shukla.calcAge;
// const f = Neeraj.calcAge   ;
// f();
//var firstName = 'Bittu shukla';  // This will be global object, so don't use VAR in global scope
const Neeraj = {
  firstName: "Bittu",
  year: 1987,
  calcAge: function () {
    //console.log(this);
    console.log(2021 - this.year);
    // below commneted is a problem
    // const isMillanial = function(){
    //     console.log(this);// this keyword will point to Neeraj object
    //     console.log(this.year >=1981 && this.year <= 1996);
    // };

    // Solution 1
    // const self =  this;
    // const isMillanial = function(){
    //         console.log(self);// this keyword will point to Neeraj object
    //         console.log(self.year >=1981 && self.year <= 1996);
    //  };

    //solution 2 arrow function
    const isMillanial = () => {
      console.log(this); // this keyword will point to parent  object
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillanial(); // a regular function call , & rule says that this keyword must be undefined, solution is use extra keyword
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // this arrow function will point to global scope(which is currently global scope)
    // and will result undefined , so better use normal function to avoid this bug
    //arrow function will not get its own THIS keyword
  },
};
Neeraj.greet();
Neeraj.calcAge();
//console.log(this.firstName);// it will result undefined as we are trying to access the property which dosen't exist,
// becoz this is the window object, but if we access the value defined in VAR then it will result the value defined

//arguments keyword
// const addExpr =  function(a,b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2,5);
// addExpr(2,3,4,5);// arguments keyword exist in regular expression
// var addArrow = (a,b) => {
//  console.log(arguments); // undefined keywords does not exist in arguments
//  return a + b;
// } ;
// addArrow(2,3,4,5);

//primitive vs reference objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Neeraj",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend :", friend);
console.log("Me:", me);

let lastName = "Willims";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  phelaName: "Jessica",
  lastName: "Willims",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage:", jessica);
console.log("After Marriage:", marriedJessica);

//copying objects
const jessica2 = {
  phelaName: "Jessica",
  lastName: "Willims",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2); // this will create a shallow copy
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before Marriage:", jessica2);
console.log("After Marriage:", jessicaCopy);
