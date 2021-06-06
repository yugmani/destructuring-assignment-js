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

// 6. Extract from an array returned from a function

//Example 6.1
function nameList() {
  return ['Rita', 'Thapa'];
}

const [f, l] = nameList();
// console.log('f: ' + f); // Expected f: Rita
// console.log('l: ' + l); // Expected l: Thapa

//Example 6.2
function doubleSeries(arr) {
  return arr.map(item => item * 2);
}

const arrayNum = [1, 3, 5, 7];

const [firstNum, secondNum, ...lastNum] = doubleSeries(arrayNum);

// console.log(firstNum); // Expected 2
// console.log(secondNum); // Expected 6
// console.log(lastNum); // Expected [10, 14]

// 7.1 ES5 to assign variables from objects

const scores = { e: 87, s: 97, c: 99, m: 100 };
const e = scores.e;
const s = scores.s;
const c = scores.c;
const m = scores.m;

// console.log(e, s, c, m); //Expected 87 97 99 100;

// 7.2 ES6 method of destructuring Assignment
const marks = { en: 87, sc: 97, cp: 99, mt: 100 };

const { en, sc, cp, mt } = marks;

// console.log(en, sc, cp, mt); // Expected 87 97 99 100;

// 8. Destructuring Nested objects

const grades = {
  grade1: { en: 88, mt: 97 },
  grade2: { en: 91, mt: 93 }
};

const {
  grade1: { en: english1, mt: math1 }
} = grades;

// console.log('Grade1 english: ' + english1); // Expected 88
// console.log('Grade 1 math: ' + math1); // Expected 97

const {
  grade2: { en: english2, mt: math2 }
} = grades;

// console.log('Grade2 english: ' + english2); // Expected 91
// console.log('Grade2 math: ' + math2); // Expected 93

// 9. How to set default values when destructuring an object in JavaScript ?

// 9.1 IN ARRAYS

// In order to give default values in arrays when applying the destructuring concept in arrays, we need to initialize values with some value.

let jj, kl, ll;
[jj, kk, ll = 100] = [37, 56];

console.log(jj); // Expected 37
console.log(kk); // Expected 56
console.log(ll); // Expected 100

// 9.2 If any value is present for the respective variable then it will take that value or else then it will take the default variable.

const [aa, bb, cc = 333] = [11, 22, 33];

console.log(aa); // Expected 11
console.log(bb); // Expected 22
console.log(cc); // Expected 33;

// 9.3 IN objects

// The values of corresponding properties get stored in the variables.

const user = {
  name: 'Mirage'
};

const { name, age = 17 } = user;

console.log(name); // Expected Mirage
console.log(age); // Expected 17
