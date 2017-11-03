function solution(str){
  let tempArray = str.split('');
  let reversed = [];
  for (let i = tempArray.length - 1; i >= 0; i--){
    reversed.push(tempArray[i]);
  }
  return reversed.join('');
}
