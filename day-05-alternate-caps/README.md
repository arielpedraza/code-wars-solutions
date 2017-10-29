Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

https://www.codewars.com/kata/alternate-capitalization/train/javascript

Solution:
Run through string as an array with for i in string
use modulus to check if index is odd or even (i % 2)
If odd index, store current index of string as lowercase in aNewArray[0] and toUpperCase version in aNewArray[1]
If even index, store current index of string as uppercase in aNewArray[0] and lowercase version in aNewArray[1]
