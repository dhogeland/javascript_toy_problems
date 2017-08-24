String.prototype.camelCase=function(){
  if (this == "") {
  return "";
  }
  let x = this.split(" ");
  for (var i = 0; i < x.length; i++) {
    if(x[i] === "") {
    x.splice(i, 1);
  }
  if(i >= x.length) {
    break;
  }
    let y = x[i].split("");
    y[0] = y[0].toUpperCase();
    x[i] = y.join("");
  }
  return x.join("");
}
