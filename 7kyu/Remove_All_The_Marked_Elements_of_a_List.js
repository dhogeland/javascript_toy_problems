Array.prototype.remove_ = function(integer_list, values_list){
  let x = [];
  for (var i = 0; i < integer_list.length; i++) {
    if (!values_list.includes(integer_list[i])) {
      x.push(integer_list[i]);
    }
  }
  return x;
}
