'use strict';
/*
const bookings= [];
const createBookings = function(flightnum, numPassengers =1, price=199 * numPassengers){
    //ES5
    //numPassengers = numPassengers || 1;
    // price= price ||199;
    const booking = {
        flightnum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}
createBookings('LH123');
createBookings('LH123',2,800);
createBookings('LH123',2);
createBookings('LH123',5);
createBookings('LH123',undefined,800);

const flight ='LH234';
const Neeraj = {
    name :'Neeraj Shukla',
    passport:23456789,
}
const checkIn =  function(flightnum , passenger){
    flightnum= 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passport === 23456789){
        alert('Checked In!');
    } else{
        alert('Wrong Passport!');
    }
};
checkIn(flight,Neeraj);
console.log(flight);
console.log(Neeraj);

const newpassport =  function(person){
    person.passport =Math.trunc( Math.random()*10000000);
};

newpassport(Neeraj);
checkIn(flight,Neeraj);

//JS doesnot has passing value by reference
//First class functions-
//1) JS treats functions as first class citizens
//2) this means that function are simply values
//3)Functions are just another type of object
//4) store functions in variables or properties
//5) Pass functions as arguements to other functions
//6) Return functions from functions
//7) call methods on functions

//Higher order functions - A function that recives another function as an argument , that returns a new function or both, this
// is only possible because of first class functions
const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord =  function(str){
    const[first, ...others]=  str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};
//Higher order function
const transformer =  function(str, fn){
    console.log(`Orignal string :${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by :${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function(){
    console.log('👏');
};
document.body.addEventListener('click',high5);//here addEventListener is Higher order function & high5 is call back function

//Functions returning functions
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Neeraj');
greeterHey('Koustubh')
greet('Hello')('Neeraj');

const greetArr = greeting => name => console.log(`${greeting}${name}`);
greetArr('Hello')('Neeraj');
*/
const lufthansa = {
    airline :'Luftansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight :`${this.iataCode}${flightNum}`,name});
    },
};
lufthansa.book(239,'Neeraj Shukla');
lufthansa.book(237,'Koustubh Mani');
console.log(lufthansa);
const eurowings = {
    airline : 'Eurowings',
    iataCode:'EU',
    bookings:[],
};
const book = lufthansa.book;
//The Call method

book.call(eurowings,23,'Piyusha');
console.log(eurowings);

book.call(lufthansa,239,'Prateek');
console.log(lufthansa);
//The Apply Method
const flightdata = [584,'Geroge Cooper'];
book.apply(eurowings,flightdata);
console.log(eurowings);
//The differnce between the call & apply is apply takes 1 arguement and then the array object
// new way for apply in the form of Call
book.call(eurowings,...flightdata);

//The BIND Method which returns the new method
const bookEW = book.bind(eurowings)// here this keyword will be pointing to eurowings
const bookLH = book.bind(lufthansa);
bookEW(23,'Stevan');

const bookEW23 =  book.bind(eurowings,23);
bookEW23('Divesh srivastava');
bookEW23('Ankita sharma');

//The BIND Method with Event listeners
lufthansa.planes =300;
lufthansa.buyPlane = function(){
    console.log(this);// This keyword is pointing to lufthansa
    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane(); 
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// If we call only lufthansa.buyPlane(); then this keyword will be pointing to .buy class & result NaN, but calling with 
//lufthansa.buyPlane.bind(lufthansa) will point to lufthansa.

//Partial Application
const addTax = (rate, value) => value +value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(100));

//Immedietialy invoked function expression(IIFE)
(function(){
    console.log('This will never run again');
    const isPrivate =23;
})(); // Called immedietialy

(() => console.log('This will never run again'))();
//Closerurs
// A function has access to the variable enviroment of the execution context in which it was created
//Closure : VE attched to the function, exactly as it was at the time & place the function  was created
const secureBooking = function(){
    let passengersCount = 0;
    return function(){
        passengersCount++;
        console.log(`${passengersCount} passengers`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

//Closure Example 1
let f;
const g = function(){
    const a= 23;
    f =  function(){
        console.log(a * 2);
    };
};

const h =  function(){
    const b = 777;
    f=function(){
        console.log(b * 2);
    };
};

g();
f(); //At this point a is 23 & o/p is 46
console.dir(f);

//Reassigning f function
h();
f();
console.dir(f);//At this point b is 777 & o/p is 1554

//Example 2
const boardPassengers = function(n,wait){
    const preGroup = n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${preGroup} passengers`);
    },wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180,3);
setTimeout(function(){
    console.log("TIMER");
},1000);

//Closure has the priority over the scope chain