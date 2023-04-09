//Given two integers ‘a’ and ‘m’. The task is to find the smallest modular multiplicative inverse of ‘a’ under modulo ‘m’.
/**
 * Input:
    a = 3
    m = 11
    Output: 4
    Explanation: Since (4*3) mod 11 = 1, 4 
    is modulo inverse of 3. One might think,
    15 also as a valid output as "(15*3)
    mod 11"  is also 1, but 15 is not in 
    ring {0, 1, 2, ... 10} which is m - 1, so not valid.
*/

function modInverse(a, m) {
  let res = -1

  for (let i = 1; i <= m - 1; i++) {
    if ((a * i) % m == 1) {
      res = i
    }
  }

  return res
}