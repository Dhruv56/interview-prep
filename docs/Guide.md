If the operation is multiplication or division the time complexity is logn
For exponential operations it will be loglogn
For geometric progression series c + 2c + 4c + 6c ..... it will be 2ⁿ

https://www.geeksforgeeks.org/progressions-ap-gp-hp/

Arithmatic progressions 
Ex = 2,4,6,8,10......
Here above series can be represneted as A, A + D, A + 2D..... A + (n - 1)D where A is the initial value(2) and D is the difference(2)
To find sum of all the elements from above series use this formula : n / 2 (2A + (n - 1) D)  
(Number of terms / 2) * Common difference = (Sum of even terms - Sum of odd terms )

Geomatric progressions
Ex = 2,4,8,16,32.....
Here above series can be represneted as A.R, A.R², A.R³..... A.Rⁿ⁻¹ where A is the constant and R is ratio which is 2
To find sum of all the elements from above series use this formula : A(1 - Rⁿ) / 1 - R

Permutation
Denoted by ⁿPᵣ which is equal to n! / (n - r)!

Combinaion
Denoted by ⁿCᵣ which is equal to n! / r!(n - r)!

Quadratic equation
A quadratic equation is a second-order polynomial equation of a variable say x. The general form of a quadratic equation is given as:
ax² + bx + c = 0

Where a,b and c are real known values and,
a can't be zero.

The roots of an equation are the values for which the equation satisfies the given condition.

A quadratic equation has two roots. The roots of a quadratic equation can be easily obtained by using the quadratic formula:
roots = (-b ± √(b2 - 4ac))/2a

If b2 < 4ac, then roots are complex
(not real).
For example, roots of x2 + x + 1 = 0 are
-0.5 + i1.73205 and -0.5 - i1.73205

If b2 = 4ac, then roots are real 
and both roots are same.
For example, roots of x2 - 2x + 1 = 0 are 1 and 1

If b2 > 4ac, then roots are real 
and different.
For example, roots of x2 - 7x - 12 = 0 are 3 and 4

Mean
Mean is defined as the average of a given set of data. Let us consider the sequence of numbers 2, 4, 4, 4, 5, 5, 7, 9, the mean (average) of this given sequence is 5.

Median
Median is the middle value of a set of data. To determine the median value in a sequence of numbers, the numbers must first be arranged in an ascending order.
If the count of numbers in the sequence is ODD, the median value is the number that is in the middle, with the same amount of numbers below and above.
If the count of numbers in the sequence is EVEN, the median is the average of the two middle values.

(A + B) % M = (A % M + B % M) % M
(A * B) % M = (A % M * B % M) % M

Left shift operator
If we assume that the leading y bits are 0 then result of X << Y is equivalent to X * 2ʸ

Right shift operator
X >> Y is equivalent to floor of X / 2ʸ

Important Facts about Bitwise Operators:
The left shift and right shift operators cannot be used with negative numbers.
The bitwise XOR operator is the most useful operator from technical interview perspective. We will see some very useful applications of the XOR operator later in the course.
The bitwise operators should not be used in place of logical operators.
The left-shift and right-shift operators are equivalent to multiplication and division by 2 respectively.
The & operator can be used to quickly check if a number is odd or even. The value of expression (x & 1) would be non-zero only if x is odd, otherwise the value would be zero.

2's compliment method for negtive binary numbers
Input:  str = "1000100"
Output:        0111100

Step 1:  Start from the Least Significant Bit and traverse left until you find a 1.  Until you find 1, the bits stay the same

Step 2: Once you have found 1, let the 1 as it is, and now

Step 3: Flip all the bits left into the 1.

The most-significant bit in binary representation of a number is the highest ordered bit, that is it is the bit-position with highest value.

One of the solution is first find the bit-position corresponding to the MSB in the given number, this can be done by calculating logarithm base 2 of the given number, i.e., log2(N) gives the position of the MSB in N.

Once, we know the position of the MSB, calculate the value corresponding to it by raising 2 by the power of calculated position. That is, value = 2log2(N).

(n & n - 1) will unset the right most bit

(n & (n >> 1)) would be 0 if number is sparse and non-zero if not sparse.

(n & (n << 1)) will remove the trailing 1 from every sequence of consecutive 1s

