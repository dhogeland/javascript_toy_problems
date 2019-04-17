function semicolonSeparationToCommaSeparation(input) {
  return input.split(";").join(",");
}

Array.prototype.join = function() {
  return this._join();
}
