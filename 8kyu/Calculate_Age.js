unction  calculateAge(year, when) {

  if (year < when) {
    return "You are " + (when - year) + " years old.";
  } else {
    if (year == when) {
      return "You were born this very year!";
    } else if (year < when) {
      return "You will be born in " + (year - when) + " years.";
    }

  }
}
