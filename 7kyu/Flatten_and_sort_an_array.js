"use strict";

function flattenAndSort(array) {
  let x = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      x.push(array[i][j]);
    }
  }
  return x.sort((a,b) => a - b);
}
