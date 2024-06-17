/* let variable = "valami";
const constantVariable = "konstans valami";
console.log(variable, constantVariable);

variable = "új valami";
constantVariable = "új konstans valami"; // ERROR
console.log(variable, constantVariable); */
/* 
// primitívek
let variable1 = 10;
let variable2 = "text";
let variable3 = true;
let variable4 = undefined;

// adatstruktúrák
let array = ["one", "two", "three"];
let obj = {
  key1: "value",
  key2: 10
}; */

/* function myFunc() {
  console.log("Hello world");
}
console.log("first");
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
console.log("last");

function betterGreetings(name) {
  if (name === "Lajos") {
    console.log("Szia Lajos!"); // NEM VISSZATÉRÉSI ÉRTÉK
  } else {
    console.log(`Hello ${name}!`);
  }
}
betterGreetings("Ricsi");
betterGreetings("Codecool");
betterGreetings("Lajos");

const result = betterGreetings("Lajos");
console.log(result);

function betterGreetings(name) {
  if (name === "Lajos") {
    console.log("Szia Lajos!"); // NEM VISSZATÉRÉSI ÉRTÉK
    return "Szia Lajos!"; // VISSZATÉRÉSI ÉRTÉK
  } else {
    console.log(`Hello ${name}!`);
    return `Hello ${name}!`;
  }
}
betterGreetings("Ricsi");
betterGreetings("Codecool");
betterGreetings("Lajos");

const result2 = betterGreetings("Lajos");
console.log("result: ", result2); */

/* const arrowFunc = (name) => {
  console.log(`hello ${name}, i am an arrow function`); // NEM VISSZATÉRÉSI ÉRTÉK
  return "return value"; // VISSZATÉRÉSI ÉRTÉK
}

console.log(arrowFunc("ricsi")); */

const array = ["two", 13, false, null, NaN, ["element1", "element2"], { key: "value" }];
/* console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]); */

const obj = {
  key: "value",
  key2: 10,
  key3: true,
  key4: ["elem1", "elem2", "elem3"],
  key5: { nestedKey: "valami" },
  "key-6": "kismacska",
  0: "teszt"
}
console.log(obj[0])
/* console.log(obj["key"]);
console.log(obj.key);

console.log(obj["key-6"]);
console.log(obj.key4[1]); */

const testArr = ["elem1", "elem2"]
/* 
const testArr = {
  0: "elem1",
  1: "elem2",
  length: 2,
  push: () => {},
  join: () => {}
}

*/

console.log(typeof ["one", "two"].join(" "))