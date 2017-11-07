Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Note: There are ONLY integers in the JAVA and C# versions of this Kata.

https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

Solution:
First check to make sure all array items are numbers, otherwise return undefined. Then use filter to weed out even numbers, use map to cube them, then reduce to add them.
