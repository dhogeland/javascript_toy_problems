function getNiceNames(people){
  let x = [];
  for (var i = 0; i < people.length; i++) {
    if (people[i].wasNice) {
      x.push(people[i].name);
    }
  }
  return x;
}

function getNaughtyNames(people){
  let x = [];
  for (var i = 0; i < people.length; i++) {
    if (!people[i].wasNice) {
      x.push(people[i].name);
    }
  }
  return x;
}
