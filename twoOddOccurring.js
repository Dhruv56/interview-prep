// Find two odd occurring number in a given array

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
 * * O(n)
 * @link https://www.geeksforgeeks.org/two-odd-occurring-elements-array-occur-even-times/
 */
function twoOdd(arr) {
  let XOR = 0
  let res1 = 0
  let res2 = 0

  //find XOR of all elements
  for (let i = 0; i < arr.length; i++) {
    XOR = XOR ^ arr[i]
  }

  // Find a set bit in the XOR (We find
  // rightmost set bit here)
  let setBit = XOR & (~(XOR - 1))

  // Traverse through all numbers and
  // divide them in two groups
  // (i) Having set bit set at same
  //     position as the only set bit
  //     in set_bit
  // (ii) Having 0 bit at same position
  //      as the only set bit in set_bit
  for (let i = 0; i < arr.length; i++) {
    if (setBit & arr[i]) {
      res1 = res1 ^ arr[i]
    } else {
      res2 = res2 ^ arr[i]
    }
  }

  console.log(res1, res2);
}

console.log(twoOdd([3, 3, 3, 3, 2, 4, 4, 5, 5, 6]));