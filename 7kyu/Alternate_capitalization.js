function capitalize(s){
  let arr = [[],[]], split = s.split('');
  for (var i = 0; i < split.length; i++) {
    if (i % 2 == 0) {
      arr[0].push(split[i].toUpperCase());
      arr[1].push(split[i]);
    } else {
      arr[0].push(split[i]);
      arr[1].push(split[i].toUpperCase());
    }
  }
  return [arr[0].join(''), arr[1].join('')];
};
