function onlyDuplicates(str) {
  let split = str.split(''), myStr = '', i = 0;
  while (i < str.length) {
    if (split.lastIndexOf(split[i]) != i || myStr.includes(split[i])) {
      myStr += split[i];
    }
    i++;
  }
  return myStr;
}
