var ownedCatAndDog = function(catYears, dogYears) {
  let cat = 0, dog = 0;
  while (catYears > 0) {
    if (cat == 0 && catYears >= 15) {
      catYears -= 15;
      cat++;
    } if (cat == 1 && catYears >= 9) {
      catYears -= 9;
      cat++;
    } if (cat >= 2 && catYears >= 4) {
      catYears -= 4;
      cat++;
    } else {
      catYears = 0;
    }
  }

  while (dogYears > 0) {
    if (dog == 0 && dogYears >= 15) {
      dogYears -= 15;
      dog++;
    } if (dog == 1 && dogYears >= 9) {
      dogYears -= 9;
      dog++;
    } if (dog >= 2 && dogYears >= 5) {
      dogYears -= 5;
      dog++;
    } else {
      dogYears = 0;
    }
  }
  return [cat,dog];
}
