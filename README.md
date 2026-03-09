  1. What is the difference between var, let, and const?

var → Old way to declare variables.

let → Variable value can change.

const → Variable value cannot change.

var a = 10;
let b = 20;
const c = 30;






2.  What is the spread operator (...)?

The spread operator (...) is used to copy or expand arrays or objects.

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

Result: [1, 2, 3, 4, 5]






3.  Difference between map(), filter(), and forEach()

map() → Creates a new array by changing each item.

filter() → Creates a new array with selected items based on a condition.

forEach() → Runs a loop for each item but does not return a new array.

const numbers = [1,2,3,4];

numbers.forEach(n => console.log(n));

const doubled = numbers.map(n => n * 2);

const even = numbers.filter(n => n % 2 === 0);



4. What is an arrow function?

An arrow function is a short way to write a function in JavaScript.

const sum = (a, b) => a + b;


5. What are template literals?

Template literals allow you to insert variables inside a string using backticks `.

const name = "Sabuj";
console.log(`Hello ${name}`);


