function fixTheMeerkat(arr) {
 //your code here
 let tempArray = [];
 arr.forEach(function(arr) {
   tempArray.unshift(arr);
});
 return tempArray;
}
