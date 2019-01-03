function containAllRots(strng, arr) {
  for (var i = 0, strng = strng.split(''); i < strng.length; i++) {
    if (!arr.includes(strng.join(''))) {
      return false;
    }
    strng.push(strng.shift())
  }
  return true;
}
