function breakOut(array,changeValue,stopValue) {
for(lets i=0;i<array.length;i++) {
  if(array[i]===stopValue)
   break;
  array[i]=changeValue;
}
  return array;
}

function keepGoing(array,changeValue,skipValue) {
  for(let i=0;i<array.length;i++) {
    if(array[i]===skipValue))
      continue;
    array[i]=changeValue;
  }
  return array;
}
function findBy(array,findFn) {
  for(let i=0;<array.length;i++) {
    var value=findFn(arary[i]);
    if(value)
    return array[i];
  }
}
