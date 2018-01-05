function removeBMW(str){
  if (typeof str != 'string') {
    throw new Error ("This program only works for text.");
  }
  str = str.match(/[^bmw]/gi);
  return str ? str.join('') : '';
}
