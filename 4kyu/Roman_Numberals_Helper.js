class RomanNumerals {
  static toRoman(input) {
    let x = '';
    while (input >= 1000) {
      x += 'M';
      input -= 1000;
    } if (input >= 900) {
      x += 'CM';
      input -= 900
    }
    while (input >= 500) {
      x += 'D';
      input -= 500;
    }
    while (input >= 100) {
      x += 'C';
      input -= 100;
    } if (input >= 90) {
      x += 'XC';
      input -= 90;
    }
    while (input >= 50) {
      x += 'L';
      input -= 50;
    }
    while (input >= 10) {
      x += 'X';
      input -= 10;
    } if (input >= 9) {
      x += 'IX';
      input -= 9;
    }
    while (input >= 5) {
      x += 'V';
      input -= 5;
    } if (input >= 4) {
      x += 'IV';
      input -= 4;
    }
    while (input >= 1) {
      x += 'I';
      input -= 1;
    }
    return x;
  }

  static fromRoman(input) {
    let x = 0;
    input = input.split('');
    for (var i = 0; i < input.length; i++) {
      if (input[i] == 'M') {
        x += 1000;
      } else if (input[i] == 'D') {
        x += 500;
      } else if (input[i] == 'C') {
        x += 100;
      } else if (input[i] == 'L') {
        x += 50;
      } else if (input[i] == 'X') {
        x += 10;
      } else if (input[i] == 'V') {
        x += 5;
      } else if (input[i] == 'I') {
        if (input[i+1] == 'V') {
          x += 4;
          i++;
        } else  if (input[i+1] == 'X') {
          x += 9;
          i++;
        } else {
        x += 1;
        }
      }
    }
    return x;
  }
}
