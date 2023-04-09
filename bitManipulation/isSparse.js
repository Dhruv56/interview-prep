// Given a number N. The task is to check whether it is sparse or not.
// A number is said to be a sparse number if no two or more consecutive bits are set in the binary representation.

function isSparse(n) {
  return (n & (n >> 1)) == 0
}

function sparse(n) {
  let isSparse = 1
  let counter = 0

  while (n > 0) {
    if (n & 1) {
      counter++
      if (counter == 2) {
        isSparse = 0
        return
      }
    } else {
      counter = 0
    }
    n = n >> 1
  }

  return isSparse
}

console.log(sparse(12));