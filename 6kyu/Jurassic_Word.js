class JurassicWord {
  constructor() {
    this.deadDino = "_C     C}>";
    this.flowers = "iii     iii";
    this.leaves = "|||     |||";
    this.tRex = "VvvvV";
    this.velociraptor = "vvvvv" ;
    this.brachiosaurus = "uuuuu";
    this.triceratops = "uuVuu";
  }

  lunchTime(scene) {
    let dino = '', x;
    if (scene[0] == '_') {
      x = scene.slice(0,2) + '     ' + scene.slice(7)
    } else {
      x  = scene.slice(0,3) + '     ' + scene.slice(8)
    }
    if (scene.includes(this.tRex)) {
      dino = 'A T-Rex is eating ';
    } else if (scene.includes(this.velociraptor)) {
      dino = 'A velociraptor is eating ';
    } else if (scene.includes(this.brachiosaurus)) {
      dino = 'A brachiosaurus is eating ';
    } else if (scene.slice(3,8).includes(this.triceratops)) {
      dino = 'A triceratops is eating ';
    } else {
      dino = 'Something is eating ';
    }
    if (x == this.deadDino) {
      if(dino.includes('Rex') || dino.includes('velo')) {
        return dino + 'a dead dino.';
      } else {
        return 'Something is eating a dead dino.';
      }
    } else if (x == this.flowers) {
        if (dino.includes('tri') || dino.includes('brac')) {
        return dino + 'flowers.';
      } else {
        return 'Something is eating flowers.';
      }
    } else if (x == this.leaves) {
        if (dino.includes('brachio')) {
        return dino + 'leaves.';
      } else {
        return 'Something is eating leaves.';
      }
    } else {
      return dino + 'something.';
    }
  }
}
