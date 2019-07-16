function isVow(a){
  return a.map((x) => {
    if ('aeiou'.includes(String.fromCharCode(x))) {
      return 'aeiou'['aeiou'.indexOf(String.fromCharCode(x))];
    }
    return x;
  });
}
