function deathStar(week) {
  let i = 0, s = 0, c = 0, day = 0;
  while (day < week[7]) {
    i += week[day][0];
    s += week[day][1];
    c += week[day][2];
    day++;
  }
  if (i >= 100 && s >= 75 && c >= 50) {
    return 'The station is completed!';
  }
  let i2 = i >= 100 ? 0 : 100 - i,
      s2 = s >= 75 ? 0 : 75 - s,
      c2 = c >= 50 ? 0 : 50 - c;
  return 'The station is destroyed! It needed ' + i2 + ' iron, ' + s2 + ' steel and ' + c2 + ' chromium for completion.';
}
