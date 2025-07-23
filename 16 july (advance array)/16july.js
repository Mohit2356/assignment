
// 1. How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?

let arr = [1, [2, [3, [4]], 5]]
function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []
  )
}
console.log(flattenArray(arr)) 

console.log(' ')


// 2. Given an array of numbers, how do you remove all duplicate values without using Set?

let a = [1, 2, 2, 3, 4, 3, 5]
function removeDuplicates(a) {
  return a.filter((item, index) => a.indexOf(item) === index)
}
console.log(removeDuplicates(a))

console.log(' ')

// 3. What will be the output of the following?

let c = [1, 2, 3];
let b = c;
b.push(4);
console.log(c);

console.log(' ')

// 4. 


// 5. How do you count the number of occurrences of each element in an array?

function countOccurrences(a) {
  const counts = {};

  for (let item of a) {
    if (counts[item]) {
      counts[item]++
    } else {
      counts[item] = 1
    }
  }

  return counts;
}
console.log(countOccurrences(a))
console.log(' ')


// 6. Write a custom implementation of the .map() method.


function customMap(array, callback) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result.push(callback(array[i], i, array))
    }
  }

  return result;
}
let numbers = [1, 2, 3]
let doubled = customMap(numbers, function(num) {
  return num * 2
});

console.log(doubled)

console.log(' ')

// 7. How do you sort an array of objects by multiple properties? and Sort by name (alphabetical), then age (ascending)

let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
]

people.sort((a, b) => {
  let nameCompare = a.name.localeCompare(b.name)
  if (nameCompare !== 0) return nameCompare
  return a.age - b.age;
});

console.log(people)

console.log(' ')

// 8. Given an array of numbers, return a new array containing only the elements that are prime numbers. 

function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }

  return true
}

function getPrimes(arr) {
  return arr.filter(isPrime)
}
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(getPrimes(n))

console.log(' ')

// 9. What will this code output 

let array  = [1, 2, 3]
arr.length = 0
console.log(array[0])

console.log(' ')

// 11. What is the result of this?

const a1 = [1, 2, 3];
const b1 = a1.slice(0, 2);
b1[0] = 100;
console.log(a1);

console.log(' ')

// 12. How do you find all pairs of elements in an array whose sum equals a target number?

let x = [1, 2, 3, 4, 5]
 let y = []
 for (let i =0;i<x.length;i++) {
      for (let j = i + 1; j < x.length; j++) {
        if ((x[i] + x[j]) == 6) {
       y.push([x[i], x[j]])
     }
   }
 }
 console.log(y)

 console.log(' ')

 // 13. How would you chunk an array into groups of N elements?

 function chunkArray(arrr, size) {
  let chunks = []
  for (let i = 0; i < arrr.length; i += size) {
    chunks.push(arrr.slice(i, i + size))
  }
  return chunks
}
let arrr = [1, 2, 3, 4, 5, 6]
let N = 2
console.log(chunkArray(arrr, N))

console.log(' ')

// 14. Explain what happens in this reduce expression:

let aar = [1, 2, 3, 4]
console.log(aar.reduce((acc, curr) => acc + curr, 0))


console.log(' ')



