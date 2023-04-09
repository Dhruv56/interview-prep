// O(n)
function power(a, b) {
  if (b == 0) return 1
  if (b == 1) return a
  let res = 1
  for (let i = 1; i <= b; i++) {
    res = a * res
  }
  return res
}

/**
 * * If b is an even number then power(a, b) = power(a, b / 2) * power(a, b / 2)
 * * If b is an odd number then power(a, b) = power(a, b / 2) * power(a, b / 2) * a
 * * O(log n) with θ(log n) space
 */
function computePower(a, b) {
  if (b == 0) return 1
  if (b == 1) return a

  let temp = computePower(a, parseInt(b / 2, 10))

  if (b % 2 == 0) {
    return temp * temp
  } else {
    return a * temp * temp
  }
}

/**
 * * Binary exponentiation
 * * Every number can be written as sum of power of 2
 * * Ex: for a = 3 and b = 10 it will be 3¹⁰ = 3⁸ * 3² its binanry representation 10 = 1010
 * * for a = 3 and b = 19 it will be 3¹⁹ = 3¹⁶ * 3² * 3¹ its binanry representation 19 = 10011
 * * We can traverse through all bits of a number in O(log n) time and O(1) space
 */
function finalPower(a, b) {
  let res = 1
  while (b > 0) {
    if (b % 2 != 0) {
      res = res * a
    }
    a = a * a
    b = parseInt(b / 2, 10)
  }
  return res
}

console.log(computePower(2, 5));