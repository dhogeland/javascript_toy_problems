String.prototype.whitespace=function(){
  return !/[a-z0-9]/gi.test(this);
}
