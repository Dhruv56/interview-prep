// Count set bits in a binary representation of a number

// O(total bits in n) or O(logn)
function count(n) {
  let res = 0

  // Without bit manipulation
  // while (n > 0) {
  //   if (n % 2 !== 0) {
  //     res++
  //   }
  //   n = Math.floor(n / 2)
  // }

  while (n > 0) {
    if (n & 1 == 1) {
      res++
    }
    n = n >> 1
  }

  return res
}

/**
 * * Brian kerningham's algorithm
 * * Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 
 * * for example : 
 * * 10 in binary is 00001010 
 * * 9 in binary is 00001001 
 * * 8 in binary is 00001000 
 * * 7 in binary is 00000111 
 * * So if we subtract a number by 1 and do it bitwise & with itself (n & (n-1)), we unset the rightmost set bit. 
 * * If we do n & (n-1) in a loop and count the number of times the loop executes, we get the set bit count. 
 * * The beauty of this solution is the number of times it loops is equal to the number of set bits in a given integer. 
 * * O(set bits in n) or O(logn)
 * @link https://www.geeksforgeeks.org/count-set-bits-in-an-integer/
 */

function countOptimized(n) {
  let count = 0
  while (n > 0) {
    n = (n & (n - 1))
    count++
  }
  return count
}

/**
 * * Look up table method with O(1) time complexity
 * * 0xff is hexadecimal representation of 8 set bits
 */

function init(table) {
  table[0] = 0
  for (let i = 0; i < 256; i++) {
    table[i] = (i & 1) + table[Math.floor(i / 2)]
  }
  return table
}

function countBits(n) {
  let lookup = init([])
  let res = lookup[n & 0xff]
  n = n >> 8
  res = res + lookup[n & 0xff]
  n = n >> 8
  res = res + lookup[n & 0xff]
  n = n >> 8
  res = res + lookup[n & 0xff]
  n = n >> 8
  return res
}

console.log(countBits(16));