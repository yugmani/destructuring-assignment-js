// Destructuring Assignment in JavaScript

// 1 . General implementation of the extraction of the array:

const names = ['alpha', 'beta', 'gamma', 'delta'];
function extractingArray(arr, num) {
  return (yourName = arr[num]);
}

// console.log(extractingArray(names, 0));
//Expected "alpha";
// console.log(extractingArray(names, 1));
//Expected "beta";
// console.log(extractingArray(names, 2));
//Expected "gamma";
// console.log(extractingArray(names, 3));
//Expected "delta";
// console.log(extractingArray(names, 7));
//Expected undefined

// 2. Array Destructuring
const destructureArray = arr => {
  const [x, y, ...rest] = arr;
  return { x, y, rest };
};

const array1 = [10, 20];
const array2 = [100, 200, 300, 400, 500];

// console.log(destructureArray(array1));
// Expected {x: 10; y:10; rest:[]};

// console.log(destructureArray(array2));
//Expected {x:100; y:200; rest:[300, 400, 500]}

// 3. Object Destructuring
// const destructureObject = obj => {
//   ({ x, y, ...rest } = obj);
//   return x;
// };

const obj1 = { x: 10, y: 20 };
({ x, y, ...rest } = obj1);
// console.log(x);
// console.log(y);
// console.log(rest);
// Expected
// 10
// 20
// {}

const obj2 = { a: 'apple', b: 'berry', c: 'cherry', d: 'donut', e: 'egg' };
({ a, b, ...rest } = obj2);
// console.log(a);
// console.log(b);
// console.log(rest);
// Expected
// apple
// berry
// {c: "cherry", d:"donut", e: "egg"}

// 3.  skip some elements in array while destructuring
var [p, , r] = [10, 20, 30];
// let [p,,r] = [10, 20, 30];
// const [p,,r] = [10, 20, 30];
// console.log(p); // Expected 10
// console.log(r); // Expected 20

//  4. Rest Operator
const [first, , ...last] = ['alpha', 'beta', 'gamma', 'delta'];
// console.log(first); // Expected "alpha";
// console.log(last); // Expected ["gamma", "delta"]

// 5. Swap values using destructuring Assignment

var [firstName, lastName] = ['Yoog', 'Grg'];
// Before swapping
// console.log('First Name: ' + firstName); // Expected=>First Name: Yoogg
// console.log('Last Name: ' + lastName); //Expected=> Last Name: Grg
//After swapping
[firstName, lastName] = [lastName, firstName];
// console.log('First Name: ' + firstName); //Expected=> First Name: Grg
// console.log('Last Name: ' + lastName); //Expected //Expected=> Last Name: Yoog
