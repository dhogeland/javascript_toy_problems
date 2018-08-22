function scoreboard(string) {
  let x = string.split(' '), y = [];
  for (var i = 0; i < x.length; i++) {
    switch (x[i]) {
      case 'one':
        x[i] = 1;
        break;
      case 'two':
        x[i] = 2;
        break;
      case 'three':
        x[i] = 3;
        break;
      case 'four':
        x[i] = 4;
        break;
      case 'five':
        x[i] = 5;
        break;
      case 'six':
        x[i] = 6;
        break;
      case 'seven':
        x[i] = 7;
        break;
      case 'eight':
        x[i] = 8;
        break;
      case 'nine':
        x[i] = 9;
        break;
      case 'nil':
        x[i] = 0;
        break;
    }
    if (x[i] >= 0) {
      y.push(x[i]);
    }
  }
  return y;
}
