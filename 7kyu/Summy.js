function summy(stringOfInts){
 let split = stringOfInts.split(' '), total = 0;
 split.forEach(x => total += +x);
 return total;
}
