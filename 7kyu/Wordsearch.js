function wordSearch(word, text){
  return text.split(',').join('').split('.').join('').split(' ').indexOf(word) != -1;
}
