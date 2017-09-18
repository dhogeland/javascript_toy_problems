function longest(s1, s2) {
  let mySet = (s1 + s2).split('').sort();
  let myAnswer = [];
  for (var i = 0; i < mySet.length; i++) {
    if (!myAnswer.includes(mySet[i])) {
      myAnswer.push(mySet[i]);
    }
  }
  return myAnswer.join('');
}
