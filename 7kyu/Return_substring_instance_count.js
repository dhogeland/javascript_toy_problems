function solution(fullText, searchText){
  let x = 0,
      y = fullText.slice();
  for (var i = 0; i < fullText.length; i++) {
    let z = y.slice(i);
    if (z.includes(searchText)) {
      x += 1;
      y = z.slice(z.indexOf(searchText));
    }
  }
  return x;
}
