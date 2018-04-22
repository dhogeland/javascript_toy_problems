function modifyMultiply (str,loc,num) {
  let split = str.split(' '), arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(split[loc]);
  }
  return arr.join('-');
} 
