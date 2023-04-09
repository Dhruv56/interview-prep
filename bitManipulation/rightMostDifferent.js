//Given two numbers M and N. The task is to find the position of the rightmost different bit in the binary representation of numbers.

// O(max(log a, log b))
function rightMost(a, b) {
  if (m == n) {
    return -1
  }
  for (let i = 0; i < 32; i++) {
    if ((a ^ b) & 1 == 1) {
      return i + 1
    }
    a = a >> 1
    b = b >> 1
  }
  return -1
}

function getFirstSetBitEfficient(n) {
  // log2(N) gives the position of the right most bit in N.
  return Math.log2(n) + 1
  // return Math.log2(n & -n) + 1

}

function rightMostDiff(a, b) {
  if (a == b) {
    return -1
  }
  return getFirstSetBitEfficient(a ^ b)
}


console.log(getFirstSetBitEfficient(12));