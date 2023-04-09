// Print all the divisors of a given number in order

// Ο(n)
function allDivisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

/**
 * * Divisors always appears in pairs
 * * Ex: 30 : (1, 30), (2, 15), (3, 10), (5, 6)
 * * Traverse from 2 to √n 
 * * This solution will print all the divisors but not in order
 */
function divisors(n) { // O(√n)
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      console.log(i);
      if (i != (n / i)) {
        console.log(n / i);
      }
    }
  }
}

// O√n with order
function divisorsFinal(n) {
  let i = 0
  for (i = 0; i <= Math.sqrt(n); i++) { // This loop prints all the divisors from 1 (inclusive) to √n (exclusive)
    if (n % i == 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) { // This loop prints all the divisors from √n (inclusive) to n (inclusive)
    if (n % i == 0) {
      console.log(n / i);
    }
  }
}