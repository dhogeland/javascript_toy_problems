function list(names){
  if (names.length == 0) {
    return '';
  } else if (names.length == 1) {
    return names[0].name;
  } else if (names.length == 2) {
    return names[0].name + " & " + names[1].name;
  } else {
    let x = names.length - 2,
        i = 0,
        namesArray = [];
    while(i < x) {
      namesArray.push(names[i].name + ', ');
      i++
    }
    namesArray.push(names[x].name + ' & ');
    namesArray.push(names[names.length - 1].name);
    return namesArray.join('');
  }
}
