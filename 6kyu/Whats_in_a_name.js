function nameInStr(str, name){
  str = str.toLowerCase();
  name = name.toLowerCase();
  while (name.length > 0) {
    if (str.includes(name[0])) {
      str = str.slice(str.indexOf(name[0]) + 1);
      name = name.slice(1);
      if (!name) {
        return true;
      }
    } else {
      return false;
    }
  }
  return true;
}
