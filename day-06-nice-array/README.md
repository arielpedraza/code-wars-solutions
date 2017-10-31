A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

https://www.codewars.com/kata/nice-array/train/javascript

Solution:
First check if array length is zero.
Nested for loops, so there are two incrementing indexes for the length of the array.
Each position will check if its one off from any other index by subtracting the two numbers and checking the absolute value against 1.
If true, increment a counter by 1, breaks out of the inner loop to check the next index against every other index.
Return true if counter is the same as array length, false otherwise.
