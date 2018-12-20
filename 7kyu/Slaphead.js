function bald(x){
  let y = x.split('/'),
      z = y.length - 1,
      a = z == 0 ? 'Clean!' : z == 1 ? 'Unicorn!' : z == 2 ? 'Homer!' : z > 5 ? 'Hobo!' : 'Careless!';
  return [y.join('-'), a];
}
