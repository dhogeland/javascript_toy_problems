var makeBackronym = function(string){
  let x = [];
  for (var i = 0; i < string.length; i++) {
    x.push(dict[string[i].toUpperCase()]);
  }
  return x.join(' ');
};
