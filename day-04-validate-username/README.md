Write a simple regex to validate a username.

Allowed characters are:

-lowercase letters -numbers -underscore

length shoould be between 4 and 16 characters.

https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript

Solution:
Find the regex characters for limiting to lowercase chars, digits, and an underscore.
[ a-z ]
[ \d ]
[ _ ]
Find how to limit number of characters.
{ 4,16 }
Include start and ending markers.
^ and $
