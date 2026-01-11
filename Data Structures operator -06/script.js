"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "😡" : ""}${type.replace(
    /_/g,
    " "
  )} from
  ${getCode(from)} to ${getCode(to)}(${time.replace(":", "h")})`.padStart(36);
  console.log(output); //😡 Delayed Departure from FAO to TXL(11h25)
}
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // order : function(starterIndex, mainIndex){
  //  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function(obj){
  //   console.log(obj);//o/p {time: '22:39', address: 'Via del sole , 21', mainIndex: 2, starterIndex: 2}
  //                       // address: "Via del sole , 21"
  //                       // mainIndex: 2
  //                       // starterIndex: 2
  //                       // time: "22:39"
  // },
  //
  // orderDelivery: function({starterIndex, mainIndex,time, address}){
  //   console.log(`Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to
  //   ${address} at ${time}`);//o/p Order Recived! Garlic Bread and Risotto will be delivered to Via del sole , 21 at 22:39
  // },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(`Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to
    ${address} at ${time}`); //o/p Order Recived! Bruschetta and Pizza will be delivered to Via del sole , 21 at 20:00
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  openingHours,
};
//Property Values
const values = Object.values(openingHours);
console.log(values);
console.log(Object.keys(openingHours));
//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
//[Key , Value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
//Looping objects
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

//SETS --holds unique values
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rosotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet); //Set(3) {'Pasta', 'Pizza', 'Rosotto'}
console.log(new Set("Neeraj")); //Set(5) {'N', 'e', 'r', 'a', 'j'}
console.log(orderSet.size); //3
console.log(orderSet.has("Samosa")); //False
console.log(orderSet.has("Pizza")); //True
orderSet.add("Garlic Bread");
orderSet.delete("Rissotto");
//orderSet.clear();
console.log(orderSet); //Set(4) {'Pasta', 'Pizza', 'Rosotto', 'Garlic Bread'}
for (const order of orderSet) console.log(order); //Pasta Pizza Rosotto Garlic Bread
// Spread opr in SETS to convert into array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)]; // to array
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
); //3

//MAPS Fundamentals
const rest = new Map();
rest.set("name", "Classiano Italinao");
rest.set(1, "Freisndv,Italy");
rest.set(2, "Lisbon Portugal");
console.log(rest);
// set() to add the data in the map
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
//Get() method retrive the data from map
console.log(rest.get("name")); //Classiano Italinao
console.log(rest.get(true)); //We are open :D
console.log(rest.get(1)); //Freisndv,Italy
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //We are closed :(
console.log(rest.has("categories")); //true
rest.delete(2);
//rest.clear(); --it will remove all the data from map
const arr = [1, 2];
rest.set(arr, "Test"); //Array in side the map
rest.set(document.querySelector("h1"), "Heading"); //Map key
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best progamming language in the world"],
  [1, "c"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try Again"],
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} :  ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));
//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Working with Strings
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B327".length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//FIX Captalization in name
const passanger = "jOnAS";
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect); //Jonas

//Comparing Emails
const email = "hello@shukla.io";
const loginEmail = " Hello@Shukla.Io \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //hello@shukla.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replacing
const priceGB = "288,97@";
const priceUS = priceGB.replace("@", "$").replace(",", ".");
console.log(priceUS);
const announcement = "All passangers come to boarding door 23, door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

//Booleans
const planes = "Airbus A320neo";
console.log(planes.includes("A320")); // True
console.log(planes.includes("Boeing")); //false
console.log(planes.includes("Airb")); //True

if (planes.startsWith("Airbus") && planes.endsWith("neo")) {
  console.log("Part of NEW Airbus family");
}
//Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a laptop , some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks & a gun to protect");
//Split & join
console.log("a+very+nice+string".split("+"));
console.log("Neeraj shukla".split(" "));
const [firstName, lastName] = "Neeraj Shukla".split(" ");
const newName = ["Shri.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const captaliseName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
captaliseName("koustubh mani shukla");
captaliseName("neeraj koustubh");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Neeraj".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(73248235));
console.log(maskCreditCard(456789034567876543));
console.log(maskCreditCard(2345687654323456787654323456));

//Repeat
const message2 = "Bad Weather... All the Departures delayed....";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(9);

/*
//Without optional Chaining
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//With optional Chaining
console.log(restaurant.openingHours.mon?.open); //o/p undefined
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}
//Methods with optional chaining
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRessitto?.(0,1) ?? 'Method does not exist');

//Arrays
const users = [{name:'Jonas', email:'shuklaneeraj212@gmail.com'}];
console.log(users[0]?.name ?? 'User array is empty');

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
//For -of loop
for(const item of menu) console.log(item);
for(const item of menu.entries()){
  //console.log(item);
  console.log(`${item[0] + 1}:${item[1]}`);
}
for(const [i,el] of menu.entries()){
  console.log(`${i + 1}:${el}`);
}

//OR Logical Assginment operator
const rest1 ={
 name:'Capri',
 //numGuests :20,
 numGuests :0
};
const rest2 ={
  name:'La Piazza',
  Owner: 'Neeraj Shukla',
 };
//OR operator
//  rest1.numGuests = rest1.numGuests ||10;
//  rest2.numGuests = rest2.numGuests ||10;
//  rest1.numGuests ||= 10; //if numguests are 0 then also we will get the 10 to avid this  is nullcollision opr ??
//  rest2.numGuests ||= 10;
 rest1.numGuests ??= 10; // nullcollision opr ?? (null or undefined)
 rest2.numGuests ??= 10;

 //AND Operator
//  rest1.Owner = rest1.Owner && '<ANOMYNOUS>';//rest1.Owner is not set so undefined
//  rest2.Owner = rest2.Owner && '<ANOMYNOUS>';// rest2.owner is true value & because of short ciruiting it will result anonmynous

 rest1.Owner &&= '<ANOMYNOUS>';
 rest2.Owner &&= '<ANOMYNOUS>';
 console.log(rest1);
 console.log(rest2);
/*
// Use any data type , return any datatype, short-circuiting,  OR opr returns true values
console.log(3 || 'Jonas');// this will return only true values i.e 3
console.log('' || 'Jonas'); // this will return only true values- Jonas
console.log(true ||  0); // this will return only true values- True
console.log(undefined || null); //this will return only true values null
console.log(undefined || 0|| ''||'Hello'||23||null);//this will return only true values -Hello
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guest1);// o/p will be 23 if numguest is defined otherwise 10
const guest2 =  restaurant.numGuests ||10;
console.log(guest2);// o/p will be 23 if numguest is defined otherwise 10, if numguests is 0 then o/p will be 10 because 0 is falsy value
// AND opr returns falsy values
console.log(0 && 'Jonas');// o/p will be 0 bacoz 0 is falsy value & any value is false in AND opr it will not evaluate further
console.log(7 && 'Jonas');// o/p will be JONAS as its a falsy value & 7 is true value
console.log('Hello' && 23 && null && 'Jonas');//o/p will be null becoz hello, 23 is true value & null is falsy value so it will short circuit 
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spanich');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
//NULL coalescing operator
restaurant.noofGuests = 0;
const gusets =  restaurant.noofGuests || 10;
console.log(gusets);//o/p will be 10

//Nullish : null and undefined (NOT '0' or '')
const guestCorrect =  restaurant.noofGuests ?? 10;
console.log(guestCorrect);//o/p will be 0
*/
/*
// Destructuring
//SPREAD , beacuse on RIGHT side of =
const arr= [1,2 , ...[3,4]];

//REST , beacuse on the left side of =
const[a,b ,...others]= [1,2,3,4,5];
console.log(a,b,others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);

//objects
const{sat, ...weekdays}= restaurant.openingHours;
console.log(weekdays);

//Functions
const add =  function(...numbers){
  //console.log(numbers);
  let sum =0;
  for(let i =0; i< numbers.length;i++){
    sum += numbers[i];
  }
  console.log(sum);
};
add(2,3);
add(7,8,9,2);
add(2,6,7,4,6,7);
const x =[23,4,56];
add(...x);
restaurant.orderPizza('Onoins','Mushrooms','Panner','Olives')
*/
/*
restaurant.orderDelivery({
  time:'22:39',
  address:'Via del sole , 21',
  mainIndex:2,
  starterIndex:2
});

restaurant.orderDelivery({
  address:'Via del sole , 21',
  starterIndex:1
});
const{name, openingHours, categories}= restaurant;
console.log(name, openingHours, categories);
const{
    name: restaurantName,
    openingHours :hours,
    categories: tags,
}= restaurant;
console.log(restaurantName,hours,tags);
//Default values
const{menu =[],starterMenu : starters = [] } = restaurant;
console.log(menu, starters);

//mutating the variables
let l= 111;
let m= 999;
const obj = {l:23 , m:7 , f:6};
//Destructuring assignment
({l,m} = obj);
console.log(l,m);//o/p will be 23,7

//Nested objects
// const{fri} = openingHours;
// console.log(fri);
// const{
//   fri:{open,close},
// } = openingHours;
// console.log(open , close);
const{
  fri:{open :o,close :h},
} = openingHours;
console.log(o,h);

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const badNewArr = [7,8,arr[0], arr[1], arr[2]];

//using spread operator
const newArr = [7,8 , ...arr];
console.log(newArr);
console.log(badNewArr);
console.log(...newArr);//o/p 7 8 2 3 4

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);//o/p Pizza', 'Pasta', 'Risotto', 'Gnocci']

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays
const menus= [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);
//Iterables : arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str,' ', 's.'];
console.log(letters);

const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt("Ingredient 2?") ,prompt("Lets make Pasta! Ingredient3")];
console.log(ingredients);
restaurant.orderPasta(...ingredients);
//objects
const newRestaurant = {foundedIn:1998, ...restaurant, founder :'Neeraj'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name= 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//Destructuring array
const[x,y,z] = arr;//Destructure assignment
console.log(x,y,z); //o/p will be 2, 3 ,4
console.log(arr);//Orignal array is not affected

let[First, Second] = restaurant.categories;
console.log(First,Second); //o/p will be Italian,Pizzeria

// now if i have to skip second record from array
// const[First,,Second] = restaurant.categories;
// console.log(First,Second); //o/p will be Italian,Vegetarian

//Swtiching Variables
[First,Second] = [Second,First];
console.log(First,Second); 
//console.log(restaurant.order(2,0));

//Recive 2 items from a function
const[starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

//nested array destructuring
const nested = [2,4,[5,6]];
// const[i, ,j]= nested;
// console.log(i,j); //o/p will be 2, [5,6];
const[i, , [j,k]] =  nested;
console.log(i, j, k);// o/p will be 2, 5, 6

//Default values
const[p,q,r] = [8,9];
console.log(p,q,r); // o/p will be 8 9 undefined

const[d=1, e=1, f=1] = [8,9];
console.log(d,e,f);// o/p will be 8 9 1
*/
