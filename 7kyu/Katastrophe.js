function strongEnough(earthquake, age) {
  let x = 1000;
  for (var i = 1; i <= age; i++) {
    x -= (x * .01);
  }
  let y = 1;
  for (var j = 0; j < earthquake.length; j++) {
    let z = 0;
    for (var k = 0; k < earthquake[j].length; k++) {
      z += earthquake[j][k];
    }
    y *= z;
  }
  return x - y > 0 ? 'Safe!' : 'Needs Reinforcement!';
}
