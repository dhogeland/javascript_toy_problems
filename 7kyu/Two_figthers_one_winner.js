function declareWinner(fighter1, fighter2, firstAttacker) {
  let x = fighter1.health,
      y = fighter1.damagePerAttack,
      z = fighter1.name,
      a = fighter2.health,
      b = fighter2.damagePerAttack,
      c = fighter2.name;
  while (x > 0 && a > 0) {
    if (z == firstAttacker) {
      a -= y;
      if (a <= 0) {
        return z;
      } else {
        x -= b;
        if (x <= 0) {
          return c;
        }
      }
    } else {
      x -=b;
      if (x <= 0) {
        return c;
      } else {
        a -= y;
        if (a <= 0) {
          return z;
        }
      }
    }
  }
}
