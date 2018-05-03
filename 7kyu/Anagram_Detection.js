// write the function isAnagram
var isAnagram = function(test, original) {
  let x = test.toLowerCase().split(''), y = original.toLowerCase().split('');
  for (var i = 0; i < original.length; i++) {
    if (y.includes(x[0])) {
      y.splice(y.indexOf(x[0]),1);
      x.shift();
    } else {
      return false;
    }
  }
  return true;
};
