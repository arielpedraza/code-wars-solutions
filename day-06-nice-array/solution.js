function isNice(arr){
  if (!arr.length){return false;}
  let count = 0;
  for (let i in arr){
    for (let k in arr)
      if (Math.abs(arr[i] - arr[k]) === 1){count++; break;}
  }
  return (count === arr.length);
}
