function umbrella(weather){
  let total = 0, x = 0, y = 0, out = false;
  while (x < weather.length) {
    if (y == 3) {
      out = false;
      y = 0;
    }
    if (weather[x] == 'rainy' || weather[x] == 'thunderstorm') {
      if (!out) {
        out = true;
        total++;
      }
    } else {
      out = false;
    }
    x++;
    y++;
  }
  return total;
}
