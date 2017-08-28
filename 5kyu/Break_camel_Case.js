function solution(string) {
  let myArray = [];
  let x = string.length;
    for (var i = string.length - 1; i >= 0; i--) {
      if (string.charAt(i) === string.charAt(i).toUpperCase()) {
        myArray.unshift(string.slice(i, x));
        x = i;
      }
    }
    myArray.unshift(string.slice(0, x));
    return myArray.join(" ");
}
