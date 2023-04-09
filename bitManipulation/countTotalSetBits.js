// Count total set bits
/**
 * 
 * * Input: N = 4
 * * Output: 5
 * * Explanation:
 * * For numbers from 1 to 4.
 * * For 1: 0 0 1 = 1 set bits
 * * For 2: 0 1 0 = 1 set bits
 * * For 3: 0 1 1 = 2 set bits
 * * For 4: 1 0 0 = 1 set bits
 * * Therefore, the total set bits is 5.
 */

function countTotalSetBits(N) {
  //Ignoring 0 as all the bits are unset. 
  N++;
  let count = 0;

  //Counting set bits from 1 to n.
  for (let x = 2; Math.floor(x / 2) < N; x = x * 2) {
    //Total count of pairs of 0s and 1s.
    let quotient = Math.floor(N / x);
    //quotient gives the complete count of pairs of 1s.
    //Multiplying it with the (current power of 2)/2 will give
    //the count of 1s in the current bit.
    count += quotient * Math.floor(x / 2);

    let remainder = N % x;
    //If the count of pairs is odd then we add the remaining 1s 
    //which could not be grouped together. 
    if (remainder > Math.floor(x / 2))
      count += remainder - Math.floor(x / 2);
  }

  //returning count of set bits.
  return count;
}

function countSetBits(n) {
  // Ignore 0 as all the bits are unset
  n++;

  // To store the powers of 2
  var powerOf2 = 2;

  // To store the result, it is initialized
  // with n/2 because the count of set
  // least significant bits in the integers
  // from 1 to n is n/2
  var cnt = n / 2;

  // Loop for every bit required to represent n
  while (powerOf2 <= n) {

    // Total count of pairs of 0s and 1s
    var totalPairs = n / powerOf2;

    // totalPairs/2 gives the complete
    // count of the pairs of 1s
    // Multiplying it with the current power
    // of 2 will give the count of
    // 1s in the current bit
    cnt += (totalPairs / 2) * powerOf2;

    // If the count of pairs was odd then
    // add the remaining 1s which could
    // not be groupped together
    cnt += (totalPairs % 2 == 1) ?
      (n % powerOf2) : 0;

    // Next power of 2
    powerOf2 <<= 1;
  }

  // Return the result
  return cnt;
}

console.log(countTotalSetBits(4));