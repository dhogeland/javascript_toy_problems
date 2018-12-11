function personalise( campaign, person){
  return campaign.split('<NAME>').join(person.name).split('<CITY>').join(person.city).split('<FAVOURITE PRODUCTS>').join(person.favourite_products);
}
