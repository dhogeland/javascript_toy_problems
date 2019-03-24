function swap(str){
  let x = '',
      i = 0;
  while (x.length < str.length) {
    x = x + (str[i] == str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase());
    i++;
  }
  return x;
}
