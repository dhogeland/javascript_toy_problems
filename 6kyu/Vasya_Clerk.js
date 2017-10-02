function tickets(peopleInLine){
  let twentyFives = 0,
      fifty = 0,
      hundred = 0;
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      twentyFives += 1;
    } if (peopleInLine[i] === 50) {
      twentyFives -= 1;
      fifty += 1;
    }
    if (peopleInLine[i] === 100) {
      hundred += 1;
      if (fifty >= 1) {
         fifty -= 1;
         twentyFives -= 1;
      } else {
        twentyFives -= 3;
      }
    }
    if (twentyFives < 0) {
      return "NO";
    }
  }
  return "YES";
}
