function toInitials(name) {
  name = name.split(' ');
  let x = [];
  for (var i = 0; i < name.length; i++) {
    x.push(name[i][0] + '.');
  }
  return x.join(' ');
}
