function getMissingElement(superImportantArray){
  for (var i = 0; i < 10; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
}
