var wireCode; // Find the wire.
  for (var i = 10; i >=0; i--) {
    if(global['boom' + i]) {
      wireCode = global['boom' + i];
    }
  }
Bomb.CutTheWire(wireCode);
