function validBraces(braces){
  let testing = braces.slice();
  for (var i = 0; i < braces.length; i++) {
    testing = testing.split('()').join('').split('[]').join('').split('{}').join('');
    if (testing.length == 0) {
      return true;
    }
  }
  return false;
}
