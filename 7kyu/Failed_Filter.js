var FilterNumbers = function(str) {
  return str.split('').filter(c => !parseInt(c) && c !== '0').join('');
}
