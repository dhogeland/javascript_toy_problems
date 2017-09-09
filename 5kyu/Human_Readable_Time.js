function humanReadable(seconds) {
  let h = 0,
      m = 0,
      s = 0,
theTime = [];
  for (var i = 0; i < seconds; i++) {
    s++;
    if (s > 59) {
      s = 0;
      m++;
      if (m > 59) {
        m = 0;
        h++;
      }
    }
  }
  theTime.push(String(h), String(m), String(s));
  for (var j = 0; j < 3; j++) {
    if (theTime[j].length < 2) {
      theTime[j] = '0' + theTime[j];
    }
  }
  return theTime.join(':');
}
