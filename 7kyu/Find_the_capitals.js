var capitals = function (word) {
	let arr = [];
  for (var i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      arr.push(i);
    }
  }
  return arr;
};
