// Destructuring Assignment in JavaScript

// 1 . General implementation of the extraction of the array:

const names = ['alpha', 'beta', 'gamma', 'delta'];
function extractingArray(arr, num) {
  return (yourName = arr[num]);
}

console.log(extractingArray(names, 0));
//Expected "alpha";
console.log(extractingArray(names, 1));
//Expected "beta";
console.log(extractingArray(names, 2));
//Expected "gamma";
console.log(extractingArray(names, 3));
//Expected "delta";
console.log(extractingArray(names, 7));
//Expected undefined

