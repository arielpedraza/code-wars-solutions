The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly.

Task:
Fix the bug so we can all go home early.

Notes:
String str will never be null.

https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

Solution:
Figured the period was a special character that needed to be escaped. A quick google search proved it to be true. Escaping with a backslash did the trick. also using a 'g' replaced all and not just the first instance.
