function wordSearch(query, seq){
  let x = [];
  for (var i = 0; i < seq.length; i++) {
    if (seq[i].toLowerCase().includes(query.toLowerCase())) {
      x.push(seq[i]);
    }
  }
  return x.length ? x : ['Empty'];
}
