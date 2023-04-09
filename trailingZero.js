//Trailing zeros in factorial

function factorial(n) {
  let res = 1

  for (let i = 2; i <= n; i++) {
    res = res * i
  }

  return res
}

function trailingZeros(n) {
  let res = factorial(n)
  let zeros = 0

  while (res % 10 == 0) {
    zeros++
    res = Math.floor(res / 10)
  }

  return zeros
}

/**
 * * An efficient way to solve this problem is to observe the properties of prime factorization. Consider prime factors of N!.
 * * A trailing zero is always produced by the prime factors 2 and 5. 
 * * If we can count the number of 5s and 2s in prime factorization of N!, our task is done.

 * * Consider the following examples:
 * * N = 5: There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So count of trailing 0s is 1.
 * * N = 11: There are two 5s and three 2s in prime factors of 11! (2 8 * 34 * 52 * 7). So count of trailing 0s is 2.
 
 * * We can easily observe that the number of 2s in prime factors is always more than or equal to the number of 5s. 
 * * So if we count 5s in prime factors, we are done.

 * * Now, how to count the total number of 5s in prime factors of N!? A simple way is to calculate floor(N/5). 
 * * For example, 7! has one 5, 10! has two 5s. It is not done yet, there is one more thing to consider. 
 * * Numbers like 25, 125, etc have more than one 5. For example, if we consider 28!, we get one extra 5, 
 * * and the number of 0s becomes 6. Handling this is simple, first divide N by 5 and remove all single 5s, 
 * * then divide by 25 to remove extra 5s, and so on. Following is the summarized formula for counting trailing 0s.
 * * Trailing 0s in N! = Count of 5s in prime factors of n! = floor(n/5) + floor(n/25) + floor(n/125) + ....
 */

function trailingZerosOptimised(n) {
  let zeros = 0

  for (let i = 5; i <= n; i *= 5) {
    zeros = zeros + Math.floor(n / i)
  }

  return zeros
}

console.log(trailingZerosOptimised(5))