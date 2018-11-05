function prettyTimeFormat(seconds) {
  let s, m, h, t = '';
  s = Math.floor(seconds % 60);
  h = Math.floor(seconds / 3600);
  m = Math.floor(((seconds - s) - h * 3600) / 60);
  t += h ? h + ':' : '';
  t += m && m > 9 ? m + ':' : m > 0 && m <= 9 && h ? '0' + m + ':' : m > 0 && m <= 9 ? m + ':' : h == 0 ? '' : '00:';
  t += s <= 9 && (h > 0 || m > 0) ? '0' + s : s;
  return t;
}
