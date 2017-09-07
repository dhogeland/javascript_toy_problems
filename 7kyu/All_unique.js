function hasUniqueChars(str){
  let split = str.split('');
  for (var i = 0; i < split.length; i++) {
    let check = split.shift();
    if(split.includes(check)) {
      return false;
    }
    split.push(check);
  }
  return true;
}
