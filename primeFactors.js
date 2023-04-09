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

// n²log(n)
function primeFactors(n) {
  for (let i = 2; i < n; i++) { // n
    if (isPrimeNumber(i)) { // n
      let temp = i
      while (n % temp == 0) { // log(n)
        console.log(i);
        temp = temp * i // taking next power of i. 
      }
    }
  }
}

/**
 * * Divisors always appears in pairs
 * * Ex: 30 : (1, 30), (2, 15), (3, 10), (5, 6)
 * * Traverse from 2 to √n 
 */
function primeFactorsOptimised(n) {
  if (n <= 1) return

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i == 0) {
      console.log(i);
      n = n / i
    }
  }

  if (n > 1) {
    console.log(n);
  }
}

// same optimizations as primenumbers solution. We will handle 2 and 3 explicitly
function primeFinal(n) {
  if (n <= 1) return

  if (n % 2 == 0) {
    console.log(2);
    n = n / 2
  }

  if (n % 3 == 0) {
    console.log(3);
    n = n / 3
  }

  for (let i = 5; i < Math.sqrt(n); i = i + 6) {
    if (n % i == 0) {
      console.log(i);
      n = n / i
    }
    if (n % (i + 2) == 0) {
      console.log(i + 2);
      n = n / (i + 2)
    }
  }

  if (n > 3) {
    console.log(n);
  }
}

console.log(primeFinal(15));