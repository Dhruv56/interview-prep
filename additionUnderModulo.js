//Given two numbers a and b, find the sum of a and b. Since the sum can be very large, find the sum modulo 10⁹+7.

/**
 * * (A + B) % M = (A % M + B % M) % M
 */

function addition(a, b) {
  let m = Math.pow(10, 9) + 7
  a = BigInt(a % m)
  b = BigInt(b % m)
  return (a + b) % BigInt(m)
}

function multiplication(a, b) {
  let m = Math.pow(10, 9) + 7
  a = BigInt(a % m)
  b = BigInt(b % m)
  return (a * b) % BigInt(m)
}

console.log(multiplication(92233720368547758, 92233720368547758));