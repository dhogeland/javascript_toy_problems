var number=function(array){
  let x = 1,
      arr = []
  array.forEach((index) => {
    arr.push(`${x}: ${index}`);
    x++;
  });
  return arr;
}
