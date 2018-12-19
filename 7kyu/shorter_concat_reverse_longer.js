function shorter_reverse_longer(a,b){
  return b.length > a.length ?  a + b.split('').reverse().join('') + a : b + a.split('').reverse().join('') + b;
}
