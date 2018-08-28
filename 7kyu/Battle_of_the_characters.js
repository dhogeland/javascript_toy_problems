function battle(x, y) {
  let a = x.split('').map(z => z.charCodeAt(0) >= 65 && z.charCodeAt(0) <= 90 ? z.charCodeAt(0) - 64: 0);
  let b = y.split('').map(z => z.charCodeAt(0) >= 65 && z.charCodeAt(0) <= 90 ? z.charCodeAt(0) - 64: 0);
    return a.reduce((a,b) => a + b) == b.reduce((a,b) => a + b) ? 'Tie!': a.reduce((a,b) => a + b) > b.reduce((a,b) => a + b) ? x : y;
}
