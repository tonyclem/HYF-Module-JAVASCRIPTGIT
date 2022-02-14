const shoppingCart = ["bananas", " milk"];

// ! Function to be tested
function addToShoppingCart(shoppingCart) {
  let shop = arr;
  shop = shoppingCart;
  // TODO complete this function
  //   if (shop.length > 3) {
  //     shop.shift();
  //   }
  console.log(`You bought ${shop}!`);
}
addToShoppingCart();

// function test3() {
//   console.log("Test 3: `chocolate` should be added");
//   const expected = "You bought bananas, milk, chocolate!";
//   shoppingCart.push(" chocolate");
//   const actual = addToShoppingCart("chocolate");
//   // console.assert(actual === expected);
//   console.log(actual === expected);
// }
// test3();
function test1() {
  console.log(
    "Test 1: addShoppingCart() called without an argument should leave the shopping cart unchanged"
  );
  const expected = "You bought bananas, milk!";
  console.log(expected);
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}
test1();
