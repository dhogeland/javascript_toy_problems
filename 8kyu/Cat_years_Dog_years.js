var humanYearsCatYearsDogYears = function(humanYears) {
  let yrs = humanYears, cat = 0, dog = 0;
  if (yrs >= 1) {
    cat += 15;
    dog += 15;
  } if (yrs >= 2) {
    cat += 9;
    dog += 9
  } if (yrs >= 3) {
    cat += (yrs - 2) * 4;
    dog += (yrs - 2) * 5;
  }
  return [yrs,cat,dog];
}
