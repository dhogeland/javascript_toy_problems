function openOrSenior(data){
  let list = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      list.push('Senior');
    } else {
      list.push('Open')
    }
  }
  return list;
}
