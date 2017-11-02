Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""

https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript

Solution:
Immediately return empty string if passed in variable is null or empty array.
Run through passed in array, and push into a new array all items not empty strings.
Immediately return new array at index 0 if there is only one item in array.
Run through new array and add index to string variable with a comma and space after, unless it is the second to last item, then add the concat of the last two array items with "and" in between to string variable, then break from loop.
Return new string.
