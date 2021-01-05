const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowedProducts = {
  lisbon: 5,
  others: 7,
};

let description = '';

const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
  if (!cart.length) return [];

  // const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;

  const allowed = numAllowed?.[city] ?? numAllowed.others;

  console.log(allowed);

  const newCart = cart.map(item => {
    const { product, quantity } = item;
    return {
      product,
      quantity: quantity > allowed ? allowed : quantity,
    };
  });

  return newCart;
};

const allowedShoppingCart = checkCorrectAllowedProducts(
  shoppingCart,
  allowedProducts,
  'lisbon'
);
// checkCorrectAllowedProducts(shoppingCart, allowedProducts, 'munich');

console.log(allowedShoppingCart);

const createOrderDescription = function (cart) {
  const [{ product: p, quantity: q }] = cart;
  console.log(cart);
  console.log(p, q);
  const first = cart[0];
  // const p = first.product;
  // const q = first.quantity;

  return `Order with ${q} ${p}${cart.length > 1 ? ', etc...' : '.'}`;
};

const orderDescription = createOrderDescription(allowedShoppingCart);

console.log(orderDescription);
