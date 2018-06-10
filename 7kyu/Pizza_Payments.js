function michaelPays(costs) {
  if (costs < 5) return +(costs).toFixed(2);
  if (costs > 30) return +(costs - 10).toFixed(2);
  return +(costs - (costs / 3)).toFixed(2);
}
