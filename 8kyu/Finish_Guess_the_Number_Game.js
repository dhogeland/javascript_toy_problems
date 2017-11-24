class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
  if (this.lives == 0) {
    throw error;
  } else if (n != this.number) {
    this.lives -= 1;
    return false;
    } else {
      return true;
    }
  }
}
