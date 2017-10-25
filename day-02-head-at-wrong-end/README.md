You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

https://www.codewars.com/kata/my-head-is-at-the-wrong-end/train/javascript

Solution: Create a temp array to store the fixed array to return. For each method on array, pass the array and unshift into the temp array the current index of the passed in array. It is now in the correct order. Return temp array.
