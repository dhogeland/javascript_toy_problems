function printerError(s) {
    let x = 0;
    for (var i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) > 109) x+= 1;
    }
    return x + '/' + s.length;
}
