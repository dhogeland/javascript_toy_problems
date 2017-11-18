var solution = (str) => {
  let split = str.split('?'), obj = {};
  split = split[1].split('&');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].split('=');
    obj[split[i][0]] = split[i][1];
  }
  return obj;
}
