function abbrevName(name){
  let splitStr = name.split(' ');
  let firstInitial = splitStr[0].substring(0,1).toUpperCase();
  let secondInitial = splitStr[1].substring(0,1).toUpperCase();
  return `${firstInitial}.${secondInitial}`;
}
