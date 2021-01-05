// Exporting module
// exports only work on top level code!

console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} o ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// default exports only used if we export ONE thing

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} o ${product} added to cart`);
}
