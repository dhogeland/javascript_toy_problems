function averageString(str) {
  let nums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  let words = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
  };
  let string = str.split(' '), total = 0, avg = 0;
  if (str == '') {
    return 'n/a';
  }
  for (var i = 0; i < string.length; i++) {
    if (Object.keys(words).includes(string[i])) {
      total += words[string[i]];
    } else {
      return 'n/a';
    }
  }
  avg = Math.floor(total / string.length);
  return nums[avg];
}
