function maxGap (numbers){
  let x = numbers.sort((a,b) => a -b ),
      y = 0;
  for (var i = 0; i < x.length - 1; i++) {
    if (Math.abs(Math.abs(x[i]) - Math.abs(x[i + 1])) > y) {
      y = Math.abs(Math.abs(x[i]) - Math.abs(x[i + 1]));
    }
  } return y;
}
