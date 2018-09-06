function lostSheep(friday,saturday,total){
  return total - ((friday.length > 0 ? friday.reduce((a,b) => a + b): 0) + (saturday.length > 0 ? saturday.reduce((a,b) => a + b) : 0));
}
