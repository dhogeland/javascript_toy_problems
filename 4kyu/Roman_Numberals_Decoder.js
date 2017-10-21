function solution(roman){
  let split = roman.split(''),
      total = 0;
  for (var i = split.length - 1; i >= 0; i--) {
    if (split[i] == 'I') {
      total += 1;
    } if (split[i] == 'V') {
      if (split[i - 1] == 'I') {
        total += 4;
        i -= 1;
      } else {
        total += 5;
      }
    } if (split[i] == 'X') {
      if (split[i - 1] == 'I') {
        total += 9;
        i -= 1;
      } else {
        total += 10;
      }
    } if (split[i] == 'L') {
      if (split[i - 1] == 'X') {
        total += 40;
        i -= 1;
      } else {
        total += 50;
      }
    } if (split[i] == 'C') {
      if (split[i - 1] == 'X') {
        total += 90;
        i -= 1;
      } else {
        total += 100;
      }
    } if (split[i] == 'D') {
      if (split[i - 1] == 'C') {
        total += 400;
        i -= 1;
      } else {
        total += 500;
      }
    } if (split[i] == 'M') {
      if (split[i -1] == 'C') {
        total += 900;
        i -= 1;
      } else {
        total += 1000;
      }
    }
  }
  return total;
}
