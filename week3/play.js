const func = (home, intelligent) => {
  let name = "clement";

  function home() {
    console.log(name);
  }

  home();
};

function intelligent() {
  let job = "computer program";
  console.log(job);
}

// func(intelligent());
// Example function
function myFunc(greet) {
  return greet;
}

function myGreet(a) {
  return a;
}

console.log(myGreet("world,", myFunc("good")));
