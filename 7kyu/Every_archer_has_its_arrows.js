function archersReady(archers){
  return archers.length ? archers.every(x => x > 4) : false;
}
