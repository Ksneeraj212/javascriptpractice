'use strict';
alert("Hello World");
let js='amazing';

if(js ==='amazing') alert('Javascript is fun');
js= 'Boring';

console.log(40+8+23-10);
// Values & variable

console.log('Neeraj'); // so Neeraj is the value   
console.log(23); //so 23 is the value

let firstName ="Neeraj"; // Declaring a Variable
console.log(firstName);

//Value can be either object or primitive , there are 7 primitive data types
//Number - Floating point numbers used for decimals & integers
//String - used for text
//Boolean - true or false
//undefined - empty value, Value taken by a variable that is not yet defined, e.g  let children;
//Null -  empty value
//Symbol(ES2015) -  value that is unique & Cannot be changed.
//BigInt(ES2020) - Larger integers than a number type can hold
//Value has a type , NOT Variable, Javascript has dynamic typing,data types are determined automatically

console.log(true);
let javascriptIsFun =  true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Neeraj');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year ;
console.log(year);
console.log(typeof year);

year =1998;
console.log(typeof year);
console.log(typeof null);

//let key word is used to declare the variables that can be changed later or empty variable , let is block scope
//Const keyword is used to declare the variables that cannot be changed once declared, cannot be declared empty
//var key word is used to declare the variables that can be changed later , var is function scope

//Actully we don't need to declare the keywords we can directly assign
//lastName = 'Shukla';
//console.log(lastName);

//Arthimatic operators
const now = 2037;
const ageJones = now -1991;
const ageSarah = now -2018;
console.log(ageJones, ageSarah);
console.log(ageJones * 2, ageJones/10, 2**3);

//using + for joinng strings
const firstNameOne ="Neeraj";
const lastNameOne = "Shukla";
console.log(firstNameOne + ' ' +lastNameOne);

let x =10 + 5;
x += 10;
x*= 4;
x++;
x--;
console.log(x);

//Comparision operators
console.log(ageJones> ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

const averageAge = (ageJones + ageSarah)/2;
console.log(ageJones,ageSarah,averageAge);

//Strings & template literals
const firstBrother = 'Prateek';
const job ='Developer';
const birthYear = 1997;
const years = 2021;

const prateek = "I'm" +firstBrother + ', a '  + (years- birthYear) + 'years old' +job + '!';
console.log(prateek);

//Templete literals using back ticks
const prateekNew = `I'm ${firstBrother} , a ${years- birthYear} year old ${job}!`;
console.log(prateekNew);
console.log(`Just as a regular string.....`);
console.log('String with \n\
multiple \n\
lines');
console.log(`string with
multiple
lines`);
// If else statements
const age = 14;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log('sarah can drive')
}else{
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. Wait anothor ${yearsLeft}`);
}
let century;
if(birthYear <= 2000){
    century =20;
}else{
    century = 21;
}
console.log(century);

//Type Conversion 
const inputYear = '1991';// Now convert the string to number using "NUMBER"
console.log(Number(inputYear));
console.log(Number('Neeraj')); //We will, get NaN i.e not a number
console.log(typeof NaN);// Its number

//type  Coercion
console.log('I am ' +33 +'years old'); // so the + operator starts a type coercion, here 33 will be converted to a string
console.log('23'-'10' -3); // o/p will be 10 as - opr starts opposite conversion, i.e string to number
console.log('23'/'2'); //o/p will be 11.5
console.log('23' > '10');//o/p will be true

//Truthy & Falsy Values
// In JS 5 Falsy values - 0,'',undefined, null, NaN , there are not false intially but become once we try to convert them
// to the boolean
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //False
console.log(Boolean('Jones'));//True
console.log(Boolean({})); //True
console.log(Boolean(''));// False

const money = 0; // 0 is the falsy value
if(money){ // If block will check the boolean condition
    console.log("Don't spent it at all;)");
}else{
    console.log("You must get the job!");
}

let height =0;
if(height){
    console.log("Height is defined");
}else{
    console.log("Height is undefined");
}

//Equality Operator
if(age === 14) console.log("You just become a teenager");//=== is strict equality operator & doen't perform type coercion
if(age == 14) console.log("Loose equality opr");// == is loose equality opr & perform type coercion
const favourate = prompt("What's your favourate number");
console.log(favourate);
console.log(typeof favourate);
if(favourate === 23){
    console.log("Cool its amazing number !");
} else if(favourate === 7){
    console.log("Cool 7 is amazing number");
}else{
    console.log("Number is not 23 or 7");
}
if(favourate !== 23)console.log("Number not equal to 23");

//Boolean logic
const hasDriversLicense =  true;
const hasGooDVision =  true;
console.log(hasDriversLicense && hasGooDVision); // result is true if both are true
console.log(hasDriversLicense || hasGooDVision);// result is true as one of the value is true
console.log(!hasDriversLicense); // so this will turn false as the original value is true

const shouldDrive = hasDriversLicense && hasGooDVision;
if(shouldDrive){
    console.log('Able to drive');
} else{
    console.log('Someone else drive');
}

const isTired = true;
console.log(hasGooDVision && hasDriversLicense && isTired);
if(hasGooDVision && hasDriversLicense && !isTired){// true, true, false
    console.log('Able to drive');
} else{
    console.log('Someone else drive');
}

//Switch Statement
const day = 'monday';
switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meet up!')
        break;
    case'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'Thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record Videos');   
        break;            
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekand');   
        break;
    default:
        console.log('Not a valid day');         
}

//Ternary or Conditnal opr
const umra = 23;
const drink= umra >= 18 ? console.log('I would like to drink wine'): console.log('I would drink water');
console.log(drink);
console.log(`I would like to drink ${umra >= 18 ? 'wine': 'water'}`);

let diversLicense = false;
const passTest = true;
if(passTest) diversLicense = true;
if(diversLicense) console.log('I can Drive');// so strict mode ensures that no accidental undeclared values are there

//Functions
function logger(){
    console.log('i am Neeraj');
}
logger(); // Invoking the function
function fruitProccessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProccessor(5,0);
console.log(appleJuice);
console.log(fruitProccessor(5,6));
//function declaration
function calAge1(BirthSaal){
    return 2021 - BirthSaal;
}
const age1 = calAge1(1987);
console.log(age1);
//function expression
const calAge2 = function(BirthSaal){ // Function without name - anomynous function
    return 2021- BirthSaal;
}
const age2 = calAge2(1987);
console.log(age1,age2);
//Arrow Functions
const calAge3 = BirthSaal => 2021 - BirthSaal;
const age3 = calAge3(1987);
console.log(age3);

const yearsuntilRetirement = (BirthSaal,phelename) => {
    const ageVal = 2021 - BirthSaal;
    const retirement = 65- ageVal;
    //return retirement;
    return `${phelename} retires in ${retirement}  years`;
}
console.log(yearsuntilRetirement(1991));
function cutFruitPieces(fruit){
    return fruit * 4;
}
const fruitOutput = function(Bananna, Mango){
    const BanannaPieces = cutFruitPieces(Bananna);// Calling function inside  another function
    const MangoPieces = cutFruitPieces(Mango);
    const res = `Juice with ${BanannaPieces} pieces of bananna and ${MangoPieces} pieces of Mango.`;
    return res;
}
console.log(fruitOutput(2,3));

//Arrays
const friends = ['Michal','peter', 'steven'];
console.log(friends);

const yea = new Array(1991,1994,2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); //length of array, i.e no of elements in array;
console.log(friends[friends.length -1]);
//only premitive values are immutable , but array is not a premitive value so even declared with const it can be changed
const neerajShukla = [firstName ,'Neeraj', 2021-1987,'Developer', friends];
console.log(neerajShukla);

const newLength = friends.push('Neeraj');//Push add elements at the end of the array
console.log(friends);
console.log(newLength);
friends.unshift('Prateek'); // unshift add the elements at the starting of the array
console.log(friends);

//remove elements at last
const popped = friends.pop();
console.log(popped);
friends.shift();// Remove the first elements at the starting fo the array;
console.log(friends.indexOf('peter')); // return the index value;
console.log(friends.includes('peter')); // return boolean true;
console.log(friends.includes('Divesh')); // return false;
friends.push(23);
console.log(friends.includes('23')); // return false becoz of srring equality

//objects
const jobs = {
    profile :'Developer',
    tenure: '10 years',
    salary:'Dollors',
    employee :['Divesh','Neeraj', 'Prateek'],
    valuesal :250000,
    hasOfferletter :true,
    // calSalary : function(valuesal){
    //     return valuesal * 12;
    // }
    // calSalary : function(){
    //     console.log(this); // this is refering to the current object
    //     return 12 * this.valuesal;
    // }
    calSalary : function(){
        this.finalSalary = 12 * this.valuesal; // this is refering to the current object
        console.log(this);
        return this.finalSalary;
    },
    getSummary : function(){
        return `${this.profile} is a  ${this.calSalary()} is salary ${this.salary}, and he has ${this.hasOfferletter
        ? 'a' : 'no'} offer letter.`;
    }
};
console.log(jobs);
console.log(jobs.profile);
const nameKey = 'Name';
console.log(jobs['profile' +nameKey]);
console.log(jobs['employee'] + nameKey);

//difference between dot & bracket notation
const intrestedIn= prompt('What do you want to know about Neeraj? choose between profile, tenure ,salary');
console.log(jobs.intrestedIn); // this will give undefined as it is not the part of jobs object;
console.log(jobs[intrestedIn]);// developer will be answer as we passed in prompt, anything which is not present in will result undefined
if(jobs[intrestedIn]) {
    console.log(jobs[intrestedIn]);
} else {
    console.log('Wrong choice');
}
jobs.location = 'Bhagyanagar';
jobs.twitter = '@NeerajShukla09';
console.log(jobs);
//objects method
console.log(jobs.calSalary(jobs.valuesal));
console.log(jobs['calSalary'](jobs.valuesal));
console.log(jobs.calSalary());
console.log(jobs.finalSalary);
console.log(jobs.getSummary());

//iteration loops
const types =[];
for(let i = 1; i <= 10; i++){
    console.log(`lifting weights repettion ${i}`);
}
for(let i=0;i<jobs.length ;i++){
    console.log(jobs[i], typeof jobs[i]);
    types[i] = typeof jobs[i];
    //types.push(typeof jobs[i]);
}
console.log(types);
//continue & break;
for(let i=0 ; i< jobs.length; i++){
    if(typeof jobs[i] !== 'string') continue;
    console.log(jobs[i], typeof jobs[i]);
}
for(let i=0; i<jobs.length ; i++){
    if(typeof jobs[i] === 'number') break;
    console.log(jobs[i]);
}
//Backward looping
for(let i=jobs.length -1; i>= 0 ;i--){
    console.log(i, jobs[i]);
}
//While Loop
let rep = 1;
while(rep <= 10){
    console.log(`Ram Ram ${rep++}`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6 )console.log('Loop is about to end...');
}




