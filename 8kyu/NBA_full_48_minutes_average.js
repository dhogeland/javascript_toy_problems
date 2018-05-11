function pointsPer48(ppg, mpg) {
  return (ppg > 0 && mpg > 0) ? +(ppg * (48 / mpg)).toFixed(1) : 0;
}
