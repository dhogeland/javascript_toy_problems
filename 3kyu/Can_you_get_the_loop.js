function loop_size(node){
let copy = Object.assign({}, node);
  for (var i = 1;;i++) {
    if (copy.next.loopCount) {
      if (copy.next.loopCount == 1) {
        if (global.answer > 1) {
          return global.answer;
        }
        return 1;
      }
      global.answer = (i - copy.next.loopCount);
      break;
    } else {
      copy.next.loopCount = i;
      copy = copy.getNext();
    }
  }
  return global.answer;
}
