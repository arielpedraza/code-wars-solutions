Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F

https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Solution:
I split the incoming string by a space. Then a stored the uppercase version of each string created by split by accessing the array index of the stored split string and using substring to get only the first character. Then used a template literal to return a string with a period in between the initials. 
