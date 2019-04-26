function capitalize(s,arr){
  s = s.split('');
  for (var i = 0; i < arr.length; i++) {
    s[arr[i]] = s[arr[i]] ? s[arr[i]].toUpperCase() : '';
  }
  return s.join('');
};
