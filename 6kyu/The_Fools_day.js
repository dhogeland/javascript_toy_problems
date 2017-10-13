function newsIsFalse(news) {
  let abby = ['a','b','i','g','a','i','l'],
      copy = news.slice();
  for (var i = 0; i < abby.length; i++) {
    if (copy.includes(abby[i])) {
      copy = copy.slice(copy.indexOf(abby[i]));
      if (i === abby.length - 1) {
        return 'YES';
      }
    } else {
      return 'NO';
    }
  }
}
