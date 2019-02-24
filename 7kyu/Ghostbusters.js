function ghostBusters(building) {
  return building.length === building.split(' ').join('').length ? "You just wanted my autograph didn't you?" : building.split(' ').join('');
}
