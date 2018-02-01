function countSmileys(arr) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == 2) {
      if (arr[i][0] == ':' || arr[i][0] == ';') {
        if (arr[i][1] == ')' || arr[i][1] == 'D') {
          count++;
        }
      }
    }
    else if (arr[i].length == 3) {
      if(arr[i][0] == ':' || arr[i][0] == ';') {
        if (arr[i][1] == '-' || arr[i][1] == '~') {
          if (arr[i][2] == ')' || arr[i][2] == 'D') {
            count++;
          }
        }
      }
    }
  }
  return count;
}
