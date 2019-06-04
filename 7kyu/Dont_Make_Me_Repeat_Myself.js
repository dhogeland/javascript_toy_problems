String.prototype.repeat = function(count) {
  return Array(count).fill(this).join('');
};
