//Find GCD or HCF of given 2 numbers.

// O(Min(a, b))
function gcd(a, b) {
  let res = Math.min(a, b)

  while (res > 0) {
    if (a % res == 0 && b % res == 0) {
      break
    }
    res--
  }
  return res
}

/**
 * * Euclidean algorithm
 * * gcd(a, b) = gcd(a - b, b) where 'b' is smaller than 'a' 
 * * If we subtract a smaller number from a larger (we reduce a larger number), 
 * * GCD doesn’t change. So if we keep subtracting repeatedly the larger of two, we end up with GCD.
 * * Now instead of subtraction, if we divide the smaller number, the algorithm stops when we find remainder 0.
 * @link https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/
 */

function gcd2(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b
    } else {
      b = b - a
    }
  }
  return a
}

/**
 * * Optimized Euclidean algorithm
 * * O(Log min(a, b))
 */
function gcd3(a, b) {
  if (b == 0) {
    return a
  } else {
    return gcd3(b, Math.floor(a % b))
  }
}

console.log(gcd3(2, 3));