// O(log(res))
function rootsOfQuadraticEquation(a, b, c) {
  if (a === 0) {
    return
  }

  let res = (b * b) - (4 * a * c)
  let root = Math.sqrt(Math.abs(res))

  if (res > 0) {
    // roots are real and different
    return [(-b + root) / (2 * a), (-b - root) / (2 * a)].sort((a, b) => a > b ? 1 : -1)
  } else if (res === 0) {
    //roots are real and same
    return [(-b) / (2 * a), (-b) / (2 * a)]
  } else { // res < 0
    //roots are complex
    const x = `${-b / 2 * a} + i${root / 2 * a}`
    const y = `${-b / 2 * a} - i${root / 2 * a}`

    return [x, y]
  }
}

console.log(rootsOfQuadraticEquation(2, 8, 8));