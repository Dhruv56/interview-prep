// Find one odd occurring number in a given array

// O(n²)
function odd(n) {
  for (let i = 0; i < n.length; i++) {
    let count = 0
    for (let j = 0; j < n.length; j++) {
      if (n[i] == n[j]) {
        count++
      }
    }
    if (count % 2 !== 0) {
      return n[i]
    }
  }
}

/**
 * *  We can use XOR operator and its properties
 * * Ex: X ^ 0 = X, X ^ Y = Y ^ X, X ^ X = 0
 * * If we use XOR operator with same numbers it will become 0 so all the even occurring numbers will become 0
 * * O(n) with O(1) space
 */

function oneOdd(n) {
  let res = 0
  for (let i = 0; i < n.length; i++) {
    res = res ^ n[i]
  }
  return res
}

console.log(oneOdd([2, 2, 2, 4, 4, 5, 5, 5, 5]));

/**  
 * * Variation of the same question. 
 * * Given an array of N number that has a value in range[1....n+1]. Every number appears exactly once
 * * So find the missing number
 * * I/P = [1,3,4], O/P = 2
*/

function missingOne(n) {
  let res = 0
  let total = 0
  for (let i = 0; i < n.length; i++) {
    res = res ^ n[i]
  }
  for (let i = 1; i <= (n.length + 1); i++) {
    total = total ^ i
  }
  return total ^ res
}

console.log(missingOne([1, 2, 4]));