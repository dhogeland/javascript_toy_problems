decodeMorse = function(morseCode){
  let split = morseCode.split('  ').join(' ').split(' ');
  while(split[0] === '') {
    split.shift();
  }
  while(split[split.length - 1] === '') {
    split.pop();
  }
  let decoded = (split.map(x => x ? MORSE_CODE[x] : ' ')).join('');
  return decoded;
}
