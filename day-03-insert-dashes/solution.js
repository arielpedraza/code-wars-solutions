function insertDash(num) {
   let numArr = num.toString().split('');
   for(let i = 0; i < numArr.length; i++){
     if(numArr[i] % 2 > 0 && numArr[i+1] % 2 > 0){
       i++;
       numArr.splice(i, 0, '-');
     }
   }
   return numArr.join('');
}
