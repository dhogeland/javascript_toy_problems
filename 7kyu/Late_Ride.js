function lateRide(n) {
  return (Math.floor(n / 60) + '' + (n % 60)).split('').reduce((a,b) => +a + +b);
}
