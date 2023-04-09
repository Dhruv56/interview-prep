function consecutive(n) {
  let count = 0
  let max = 0
  while (n > 0) {
    if (n & 1) {
      count++
      max = Math.max(max, count)
    } else {
      count = 0
    }
    n = n >> 1
  }
  return max
}


/**
 * * if we AND a bit sequence with a shifted version of itself, we're effectively removing the trailing 1 from 
 * *  every sequence of consecutive 1s.
 
 * *  11101111   (x)

 * *  & 11011110   (x << 1)

 * *  ----------

 * *   11001110   (x & (x << 1)) 

 * *     ^    ^

 * *     |    |

 * * trailing 1 removed

 * * So the operation x = (x & (x << 1)) reduces length of every sequence of 1s by one in binary representation of x. 
 * * If we keep doing this operation in a loop, we end up with x = 0. The number of iterations required to reach 0 is 
 * * actually length of the longest consecutive sequence of 1s.
 */

function optimised(x) {
  // Initialize result
  let count = 0;

  // Count the number of iterations to
  // reach x = 0.
  while (x != 0) {

    // This operation reduces length
    // of every sequence of 1s by one.
    x = (x & (x << 1));

    count++;
  }
  return count;
}

console.log(optimised(14));