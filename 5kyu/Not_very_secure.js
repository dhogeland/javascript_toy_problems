function alphanumeric(string){
  if (string === '') {
    return false;
  }
  let exp = /[^a-z0-9]/gi;
  return !exp.test(string);
}
