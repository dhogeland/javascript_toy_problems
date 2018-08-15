function last(x){
  return x.split(' ')
  .map((a) => a.split('')
  .reverse()
  .join(''))
  .sort(function(c,d) {
    return c.charCodeAt(0) < d.charCodeAt(0) ? -1 :
           c.charCodeAt(0) > d.charCodeAt(0) ? 1 :
           0;
  })
  .map((b) => b.split('')
  .reverse()
  .join(''));
}
