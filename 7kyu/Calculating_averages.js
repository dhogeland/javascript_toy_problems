var Calculator = {
 average: function() {
  let x = 0;
  for (var i = 0; i < arguments.length; i++) {
    x += arguments[i];
  }
  return arguments.length ? x / arguments.length : x;
 }
};
