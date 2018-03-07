function solve(st){
  for (var i = 0; i < st.length; i++) {
    st = st.split('');
    let hold = st.pop();
    st.unshift(hold)
    st = st.join('');
    if (st == st.split('').reverse().join('')) {
      return true;
    }
  }
  return false;
}
