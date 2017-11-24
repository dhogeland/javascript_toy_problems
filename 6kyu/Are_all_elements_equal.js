Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  for (var i = 1; i < this.length; i++) {
    if (this[0] !== this[i]) {return false}
  };
  return true;
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  for (var i = 1; i < this.length; i++) {
    if (this[0] !== this[i]) {return false}
  };
  return true;
} } );
