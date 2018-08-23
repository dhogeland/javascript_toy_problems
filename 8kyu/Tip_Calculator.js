function calculateTip(amount, rating) {
  let x = {
    'terrible': 0,
    'poor': .05,
    'good': .1,
    'great': .15,
    'excellent': .2
  }
  return x[rating.toLowerCase()] >= 0 ? Math.ceil(amount * (x[rating.toLowerCase()])) : 'Rating not recognised';
}
