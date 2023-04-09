// O(n)
function prime(number) {
  if (number % 2 == 0 || number == 1) {
    return false
  }
  for (let i = 3; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

/**
 * * Divisors always appears in pairs
 * * Ex: 30 : (1, 30), (2, 15), (3, 10), (5, 6)
 * * Traverse from 2 to √n 
 */
function isPrime(n) {
  if (n == 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

// We can save lot of iterations by checking n % 2 and n % 3 and an optimized loop
function isPrimeNumber(n) {
  if (n == 2 || n == 3) {
    return true
  }
  if (n == 1 || n % 2 == 0 || n % 3 == 0) {
    return false
  }
  for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false
    }
  }
  return true
}

console.log(isPrimeNumber(25));