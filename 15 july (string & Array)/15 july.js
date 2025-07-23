
// 1. **Reverse a String**

let a = "hello"
function reverseString(a)
{
    return a.split('').reverse().join('')
}
console.log(reverseString(a))

console.log(' ')

// 2. **Check Palindrome** 

function palindrome(a)
{
    let reversed = a.split('').reverse().join('')
    return a == reversed
}
console.log(palindrome(a))

console.log(' ')


// 3.  **Count Vowels** 

function countstring(a){
    let vowel = 'aeiouAEIOU'
    let count = 0
    for(let i=0; i<=a.length; i++)
    {
        if(vowel.includes(a[i]))
        {
            count++
        }
    }
    return count
}
console.log(countstring(a))

console.log(' ')


// 4. captilize the each word of sentence 

function capatilize(a)
{
    return a
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
console.log(capatilize(a))

console.log(' ')



// 5. Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
   
    let c = "abccbabccca"

    function charFrequency(c) {
  const freq = {};

  for (let char of c) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}
console.log(charFrequency(c))

console.log(' ')



// 6. Write a function `removeDuplicates(arr)` that removes duplicate values from an array. 

let b = [1,3,2,3,6,5,1]
function removeDuplicates(b)
{
    return [... new Set(b)]
}
console.log(removeDuplicates(b))


console.log(' ')


// 7.  Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).

let d = [[1],[2],[3],[5],[9]]
function flatenarray(d){
 return d.flat(Infinity)
}
console.log(flatenarray(d))

console.log(' ')


// 8.  Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array. 

function findMaxMin(b)
{
    let max = Math.max(...b)
    let min = Math.min(...b)
    return{ max, min}
}
console.log(findMaxMin(b))

console.log(' ')


// 9.  Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.

function sumEven(b) {
  let sum = 0;

  for (let num of b) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}
console.log(sumEven(b))

console.log(' ')


// 10. Write a function `groupByType(arr)` that groups array elements by their type.

let arr = [1, 'a', true, 2, 'b']
function groupByType(arr) {
  const result = {};

  for (let item of arr) {
    const type = typeof item;
    
    if (!result[type]) {
      result[type] = [];
    }

    result[type].push(item);
  }

  return result;
}
console.log(groupByType(arr))

console.log(' ')