"use strict";
// ! Function under test
function addToShoppingCart(shoppingCart, groceryItems) {
  // TODO complete this function
  const newShoppingArr = [...shoppingCart];
  newShoppingArr.push(groceryItems);

  if (newShoppingArr.length >= 3) {
    newShoppingArr.pop().split(", ");
    newShoppingArr.push(groceryItems);
    return `You bought ${newShoppingArr.join(", ")}!`;
  }
  newShoppingArr.push(grocery);
  const mySpring = newShoppingArr.join(", ");
  return `You bought ${mySpring}!`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log("Test 1: addToShoppingCart should take two parameters");
  console.assert(addToShoppingCart.length === 2);
}

function test2() {
  console.log("Test 2: addToShoppingCart should be a pure function");
  // A pure function should return the same result when called with
  // identical arguments. It should also no side effects (not tested here).
  const initialCart = ["bananas", "milk"];
  const result1 = addToShoppingCart(initialCart, "chocolate");
  const result2 = addToShoppingCart(initialCart, "chocolate");
  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
}

function test3() {
  console.log("Test 3: `chocolate` should be added");
  const initialCart = ["bananas", "milk"];
  const result = addToShoppingCart(initialCart, "chocolate");
  console.assert(result.length === 3);
  console.assert(result.includes("chocolate"));
}

function test4() {
  console.log("Test 4: `waffles` should be added");
  const initialCart = ["bananas", "milk", "chocolate"];
  const result = addToShoppingCart(initialCart, "waffles");
  console.assert(result.length === 3);
  console.assert(result.includes("waffles"));
}

function test() {
  test1();
  test2();
  test3();
  test4();
}

test();
