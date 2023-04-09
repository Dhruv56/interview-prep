// Given the first 2 terms A and B of a Geometric Series. The task is to find the Nᵗʰ term of the series.
// @link https://www.geeksforgeeks.org/progressions-ap-gp-hp/

function gpTerm(a, b, n) {
  if (n === 1) {
    return a
  }

  if (n === 2) {
    return b
  }

  let commonRatio = (b / a)

  return Math.floor(a * Math.pow(commonRatio, (n - 1)))
}

console.log(gpTerm(84, 87, 3));