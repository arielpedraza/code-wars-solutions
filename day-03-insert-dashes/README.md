Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

https://www.codewars.com/kata/insert-dashes/train/javascript

Solution:
Convert the number to a string and the same time split into an array of characters. go through array of index and index+1, if both have a remainder after dividing by 2, then use splice to insert a dash into the array. return the array after using a join to convert back to single string.
