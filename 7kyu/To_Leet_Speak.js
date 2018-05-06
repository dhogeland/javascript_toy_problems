function toLeetSpeak(str) {
  let x = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
},
  y = str.split('');
  for (var i = 0; i < y.length; i++) {
    if (x[y[i]]) {
      y[i] = x[y[i]];
    }
  }
  return y.join('');
}
