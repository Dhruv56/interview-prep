// Given two numbers 'a' and b'. Write a program to count number of bits needed to be flipped to convert 'a' to 'b'. 

function bitDifference(a, b) {
  let xor = a ^ b
  let count = 0

  while (xor) {
    xor = xor & (xor - 1)
    count++
  }

  return count
}