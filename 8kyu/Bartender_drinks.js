function getDrinkByProfession(param){
  let drinks = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal'
  };
  param = param.toLowerCase();
  return drinks[param] ? drinks[param] : 'Beer';
}
