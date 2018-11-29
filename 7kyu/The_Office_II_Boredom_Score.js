function boredom(staff){
  let dept = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4
  },
  total = 0,
  keys = Object.keys(staff);
  for (var i = 0; i < keys.length; i++) {
    if (staff[keys[i]] == 'pissing about') {
      total += 25
    } else {
      total +=  dept[staff[keys[i]]];
    }
  }
  return total <= 80 ? 'kill me now' : total < 100 ? 'i can handle this' : 'party time!!';
}
