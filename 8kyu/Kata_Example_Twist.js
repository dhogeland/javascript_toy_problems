// add the value "codewars" to the websites array 1,000 times
var websites = []

function what(x) {
  for (var i = 0; i < 1000; i++) {
  x.push('codewars');
  }
  return x;
}
what(websites);
