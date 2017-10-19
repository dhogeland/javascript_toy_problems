function solution(number){
  var roman = [],
      i,
      x = 0;
  if (number / 1000 >= 1) {
    x = Math.floor(number / 1000);
    for (i = 0; i < x; i++) {
      roman.push('M');
    }
    number -= x * 1000;
  }
  if (number < 1000 && number >= 900) {
    roman.push('CM');
    number -= 900;
  }
  if (number / 500 >= 1) {
    x = Math.floor(number / 500);
    for (i = 0; i < x; i++) {
      roman.push('D');
    }
    number -= x * 500;
  }
  if (number / 100 >= 1) {
    x = Math.floor(number / 100);
    if (x === 4) {
      roman.push('CD');
    } else {
      for (i = 0; i < x; i++) {
        roman.push('C');
      }
    }
    number -= x * 100;
  }
  if (number < 100 && number >= 90) {
    roman.push('XC');
    number -= 90;
  }
  if (number / 50 >= 1) {
    x = Math.floor(number / 50);
    for (i = 0; i < x; i++) {
      roman.push('L');
    }
    number -= x * 50;
  }
  if (number / 10 >= 1) {
    x = Math.floor(number / 10);
    if (x === 4) {
      roman.push('XL');
    } else {
      for (i = 0; i < x; i++) {
        roman.push('X');
      }
    }
    number -= x * 10;
  }
  if (number === 9) {
    roman.push('IX');
    number -= 9;
  }
  if (number / 5 >= 1) {
    x = Math.floor(number / 5);
    for (i = 0; i < x; i++) {
      roman.push('V');
    }
    number -= x * 5;
  }
  if (number / 1 >= 1) {
    x = Math.floor(number / 1);
    if (x === 4) {
      roman.push('IV');
    } else {
      for (i = 0; i < x; i++) {
        roman.push('I');
      }
    }
    number -= x * 1;
  }
 return roman.join('');
}
