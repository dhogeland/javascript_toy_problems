function XO(str) {
    str = str.toLowerCase();
    let x = 0
    let o = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == 'x') {
        x++
      } if (str[i] == 'o') {
        o++
      }
    }
    return (x == o)
}
