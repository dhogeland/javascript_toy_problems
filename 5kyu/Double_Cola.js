function whoIsNext(names, r){
  while (r >= names.length) {
    r = Math.floor((r - (names.length - 1)) / 2);
  }
  return r > 0 ? names[r - 1] : names[names.length - 1]
}
