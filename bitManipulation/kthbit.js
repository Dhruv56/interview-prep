// Check if Kᵗʰ bit is set or not

function withLeftShift(n, k) {
  return (n & (1 << (k - 1))) != 0
}

function withRightShift(n, k) {
  return ((n >> (k - 1)) & 1) == 1
}

