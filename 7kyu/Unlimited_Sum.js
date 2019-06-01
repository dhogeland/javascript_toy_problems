function sum(){
  let x = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i]) && arguments[i] === Math.floor(arguments[i]) && arguments[i] !== true && typeof arguments[i] !== 'string') {
      x += arguments[i];
    }
  }
  return x;
}
