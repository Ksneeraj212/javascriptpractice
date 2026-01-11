//Exporting Module
console.log("Exporting module");

const shoppingCost = 10;
export const carty = [];

export const addToCart = function (product, quantity) {
  carty.push({ product, quantity });
  console.log(`${quantity} ${product}added to the cart`);
};

const totalPrice = 23;
const totalQuantity = 237;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  carty.push({ product, quantity });
  console.log(`${quantity} ${product}added to the cart`);
}
