// Find if the given number is power of 2 or not

function powerOftwo(n) {
  if (n == 0) {
    return false
  }

  while (n !== 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = Math.floor(n / 2)
  }

  return true
}

/**
 * * We will use brian kerningham's algo here 
 * * n & n - 1 will unset the right most bit
 * * so if the the result is 0 then the number is a power of 2
 * * because there will be only 1 set bit for all the numbers of power of 2
 * * Ex: 2⁰ = 1, 2¹ = 2, 2² = 4 etc
 */
function isPowerOfTwo(n) {
  if (n == 0) {
    return false
  }
  return (n & (n - 1)) == 0
}

console.log(isPowerOfTwo(16));