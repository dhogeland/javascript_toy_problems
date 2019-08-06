function move_zeros(arrNum, isRight){
  let x = arrNum.length,
      y = [],
      z = [];
  arrNum.forEach(index => index != 0 ? y.push(index) : z.push(index));
  return isRight || isRight === undefined ? [...y, ...z] : [...z, ...y];
}
