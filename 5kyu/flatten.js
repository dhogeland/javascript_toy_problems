// create your flatten method here
let x = [];
let a = 0;
function flatten() {
  if (a == 1) {
    x = [];
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == 'number' || typeof arguments[i] == 'string' || arguments[i] == null) {
      x.push(arguments[i])
    } else {
      a = 0
      flatten(...arguments[i]);
    }
    a = 1;
  }
  return x;
}
