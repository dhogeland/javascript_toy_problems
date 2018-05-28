var greet = function(name) {
  let x = name.toLowerCase().split('');
  x[0] = x[0].toUpperCase();
  x = x.join('');
  return 'Hello ' + x + '!';
};
