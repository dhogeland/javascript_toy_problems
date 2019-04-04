function killcount(counselors, jason){
  let x = [];
  for (var i = 0; i < counselors.length; i++) {
    if (counselors[i][1] < jason) {
      x.push(counselors[i][0]);
    }
  }
  return x;
}
