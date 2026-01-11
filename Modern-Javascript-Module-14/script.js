//Importing Module
//import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, tq);
//
console.log("Importing module");
// import * as shoppingCart from "./shoppingCart.js";

// shoppingCart.addToCart("bread", 5);
// console.log(shoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(price);

import add, { carty } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 3);
add("apples", 4);

console.log(carty);

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastpost = getLastPost();
// console.log(lastpost);

// const lastpost2 = await getLastPost();
// console.log(lastpost2);

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import { cloneDeep } from "lodash-es";
const state = {
  carty: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 7 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//Hot module replacement
if (module.hot) {
  module.hot.accept();
}
class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting},${this.name}`);
  }
}

const neeraj = new Person("Neeraj");
console.log("Neeraj" ?? null);
console.log(carty.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
