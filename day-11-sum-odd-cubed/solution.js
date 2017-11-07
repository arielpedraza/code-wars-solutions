function cubeOdd(arr) {
  if(arr.map((c) => String(c).match(/\d/)).includes(null)){
    return undefined;
  }
  return arr.filter(x => x%2).map(x => Math.pow(x,3)).reduce((acc,val) => acc + val, 0);
}
