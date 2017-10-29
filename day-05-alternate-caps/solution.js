function capitalize(s){
  let altCapArray = ['',''];
  for(let i in s){
    if(i % 2){
      altCapArray[0] += s[i];
      altCapArray[1] += s[i].toUpperCase();
    }else{
      altCapArray[1] += s[i];
      altCapArray[0] += s[i].toUpperCase();
    }
  }
  return altCapArray;
}
