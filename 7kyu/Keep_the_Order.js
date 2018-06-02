function keepOrder(ary, val) {
if (val <= ary[0] || ary.length == 0) return 0;
if (val > ary[ary.length - 1]) return ary.length;
if (val == ary[ary.length - 1]) return ary.indexOf(val);
  for (var i = 0; i < ary.length; i++) {
    if (val > ary[i] && val <= ary[i + 1]) {
      return i + 1;
    }
  }
}
