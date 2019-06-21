function swap(st){
  let x = st.split('');
  for (var i = 0; i < x.length; i++) {
    if ('aeiou'.includes(x[i])) {
      x[i] = x[i].toUpperCase();
    }
  }
  return x.join('');
}
