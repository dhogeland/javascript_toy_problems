function validParentheses(parens){
  let testing = parens.slice();
  for (var i = 0; i < parens.length; i++) {
    testing = testing.split('()').join('');
    if (testing.length == 0) {
      return true;
    }
  }
  return false;
}
