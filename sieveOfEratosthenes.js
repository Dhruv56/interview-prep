// Print all the prime numbers less than or equal to the given number

function isPrimeNumber(n) {
  if (n == 2 || n == 3) {
    return true
  }
  if (n == 1 || n % 2 == 0 || n % 3 == 0) {
    return false
  }
  for (let i = 5; i < Math.sqrt(n); i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false
    }
  }
  return true
}

// O(n * √n)
function printPrime(n) {
  for (let i = 0; i <= n; i++) {
    if (isPrimeNumber(i)) {
      console.log(i);
    }
  }
}

/**
 * * Sieve of Eratosthene
 * * Create an array of size n + 1, fill with default value as true except 0 and 1
 * * Start from 2 and mark all the multiples of 2 as false then do it with 3 and so on.
 * * Print all the indexes with value as true
 *  */

function primeWithSieve(n) {
  let allNumbers = new Array(n + 1).fill(true, 2)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (allNumbers(i)) {
      for (let j = i * 2; j <= n; j = j + i) {
        allNumbers[j] = false
      }
    }
  }

  allNumbers.map((i, index) => {
    if (i == true) {
      console.log(index);
    }
  })
}

/**
 * @link https://www.geeksforgeeks.org/sieve-of-eratosthenes/
 * @link https://www.geeksforgeeks.org/how-is-the-time-complexity-of-sieve-of-eratosthenes-is-nloglogn/
 * * O(n log log n)
 */
function optimisedSieve(n) {
  let allNumbers = new Array(n + 1).fill(true, 2)
  for (let i = 2; i <= n; i++) {
    if (allNumbers[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        allNumbers[j] = false
      }
    }
  }
}

console.log(optimisedSieve(15));