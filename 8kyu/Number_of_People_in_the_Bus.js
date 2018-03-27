var number = function(busStops){
  let people = 0;
  for (var i = 0; i < busStops.length; i++) {
    people += busStops[i][0] - busStops[i][1];
  }
  return people;
}
