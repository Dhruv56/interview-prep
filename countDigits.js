//count digits in a given number

//recursive
function count(n) {
  if (n == 0) {
    return 0
  }
  return 1 + count(n / 10)
}

//logarithmic
function countDigits(n) {
  return (Math.floor(Math.log10(n) + 1));
}

/**
 * * Count digits of factorial of N
 * * We know number of digits =log10(number)+1  
 * * here number = n!=n(n-1)(n-2)*.......*2*1 =log10(n*n(n-1)*(n-2)*(n-3)*.......*2*1)+1 
 * * = log(n)+log(n-1)+log(n-2)+........log(2)+log(1)+1
 * * This solution can handle N < 10⁶
 */
function digitsInFactorial(N) {
  if (N <= 0)
    return 0;

  if (N <= 1)
    return 1;

  let res = 0

  for (let i = 2; i <= N; i++) {
    res = res + Math.log10(i)
  }

  return (Math.floor(res + 1));
}

/**
 * * For N > 10⁶ use Kamenetsky’s formula
 * * f(x) = n * log10(( n / e)) + log10(2 * pi * n) / 2 
 */

function kamenetsky(n) {
  if (n <= 0)
    return 0;

  if (n <= 1)
    return 1;

  let x = n * Math.log10(n / Math.E) + Math.log10(2 * Math.PI * n) / 2.0

  return Math.floor(x) + 1
}

console.log(kamenetsky(1000000000))