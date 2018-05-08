function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var x = [];
  for (var i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) x.push(birds[i]);
  }
  return x;
};
