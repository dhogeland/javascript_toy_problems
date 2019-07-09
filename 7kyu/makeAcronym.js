var makeAcronym = function(string){
  return string === '' ? '' : typeof string !== 'string' ? 'Not a string' : /[^a-z ]/ig.test(string) ? 'Not letters' : string.split(' ').map(index => index[0].toUpperCase()).join('');
};
