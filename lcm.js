// Find LCM of two numbers

// O(Max(a, b))
function lcm(a, b) {
  let res = Math.max(a, b)

  while (true) {
    if (res % a == 0 && res % b == 0) {
      break
    }
    res++
  }

  return res
}

/**
 * * Optimized solution with following formula with O(Log Max(a, b))
 * * a * b = gcd(a, b) * lcm(a, b) so the lcm is:
 * * lcm(a, b) = a * b / gcd(a, b)
 */

function gcd(a, b) {
  if (b == 0) {
    return a
  } else {
    return gcd(b, Math.floor(a % b))
  }
}

function lcm2(a, b) {
  return a * b / gcd(a, b)
}

console.log(lcm2(7, 3));

/**
 * * A is running @ 20 m / s on a circular track of 400 m and B is running on the same track @ 16 m / s in opposite direction.
 * * After 5 minutes from starting how many times they have crossed each other on starting point?
 * 
 * * Meeting for the first time on a circular track = 
 * * LCM (circumference / speed of A, circumference / speed of B ) 
 * * = LCM(400 / 20, 400 / 16) 
 * * = LCM( 20, 25) = 100 sec. 
 * * In 100 second they will meet for the first time on starting point. 
 * * Similarly 2 time in 200 sec and after 300 sec(i.e. 5 minute) they had crossed each other on starting point 3 times.
 */