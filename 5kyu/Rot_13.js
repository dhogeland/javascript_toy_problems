function rot13(message){
  let copy = message.slice().split('');
  for (var i = 0; i < copy.length; i++) {
    if (copy[i].charCodeAt(0) >= 65 && copy[i].charCodeAt(0) <= 77) {
      copy[i] = String.fromCharCode(copy[i].charCodeAt(0) + 13);
    } else if (copy[i].charCodeAt(0) >= 78 && copy[i].charCodeAt(0) <= 90) {
      copy[i] = String.fromCharCode(copy[i].charCodeAt(0) - 13);
    } else if (copy[i].charCodeAt(0) >= 97 && copy[i].charCodeAt(0) <= 109) {
      copy[i] = String.fromCharCode(copy[i].charCodeAt(0) + 13);
    } else if (copy[i].charCodeAt(0) >= 110 && copy[i].charCodeAt(0) <= 122) {
      copy[i] = String.fromCharCode(copy[i].charCodeAt(0) - 13);
    } else {
      copy[i] = copy[i];
    }
  }
  return copy.join('');
}
