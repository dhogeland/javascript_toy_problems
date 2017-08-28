function getMiddle(s) {
  if (s.length % 2 == 0) {
    let x = (s.length / 2) - 1;
    return s.substr(x, 2)
  } else {
    let y = (s.length - 1) / 2;
    return s.substr(y, 1);
  }
}

//or shortened

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substr((s.length / 2) - 1, 2)
  } else {
    return s.substr((s.length - 1) / 2, 1);
  }
}
