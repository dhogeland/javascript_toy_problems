var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let number = count, str = '';
    if (count === 0) {
      return '0=0'
    }
    if (count < 0) {
      return count + '<0';
    }
    for (var i = 0; i < count; i++) {
      number += i;
      str += i + '+'
    }
      return str + count + ' = ' + number
  };

  return SequenceSum;

})();
