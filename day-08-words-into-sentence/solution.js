function formatWords(words){
  let newArray = [];
  let newString = '';
  if(words === null || !words.length){return '';}
  for(let k in words){
    if(words[k] !== ''){newArray.push(words[k]);}
  }
  if(newArray.length === 1){return newArray[0];}
  for (let i = 0; i < newArray.length; i++){
    if(newArray.length === i+2){
      newString += newArray[i] + ' and ' + newArray[i+1];
      break;
    }else{
      newString += newArray[i] + ', ';
    }
  }
  return newString;
}
