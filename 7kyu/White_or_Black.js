function mineColor(line, number) {
  return 'aceg'.includes(line) ? number % 2 === 0 ? 'white' : 'black' : number % 2 === 0 ? 'black' : 'white';
}
