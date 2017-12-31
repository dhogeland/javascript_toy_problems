function isKiss( words ){
  let split = words.split(' ');
  for (var i = 0; i < split.length; i++) {
    if (split[i].length > split.length) {
      return 'Keep It Simple Stupid';
    }
  }
  return 'Good work Joe!';
}
