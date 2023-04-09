function getFirstSetBit(n) {
  let i = 1
  for (i = 1; i <= 32; i++) {

    if (n & 1) {
      break;
    }
    n = n >> 1
  }
  return i
}

function getFirstSetBitEfficient(n) {
  // log2(N) gives the position of the right most bit in N.
  return Math.log2(n & -n) + 1
}

function getFirstSetBitEfficient2(n) {
  if (n == 0) {
    return 0;
  }

  let k = (n & ~(n - 1));
  k = Math.log2(k) + 1;
  return k;
}

console.log(getFirstSetBit(12))