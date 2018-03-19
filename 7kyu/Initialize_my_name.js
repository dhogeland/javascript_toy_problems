function initializeNames(name){
  let split = name.split(' ');
  if (split.length < 3) {
    return name;
  }
  for (var i = 1; i < split.length - 1; i++) {
    split[i] = split[i][0] + '.';
  }
  return split.join(' ');
}
