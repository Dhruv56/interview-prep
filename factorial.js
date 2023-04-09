//recursive
function factorial(n) {
  if (n == 0) {
    return 1
  }

  return n * factorial(n - 1)
}

//iterative
function factor(n) {
  let res = 1

  for (let i = 2; i <= n; i++) {
    res = res * i
  }

  return res
}

/**
 * * Both solutions has time complexity of O(n) 
 * * but recursive solution is taking Θ(n) extra space for storing all the recursive functions \
 * * where iterative solution is taking Θ(1) space
 * * so iterative solution is a better solution
 */
