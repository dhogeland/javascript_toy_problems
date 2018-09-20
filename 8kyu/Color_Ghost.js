var Ghost = function() {
  let x = Math.floor(Math.random() * 4);
  if (x == 0) this.color = 'white';
  if (x == 1) this.color = 'yellow';
  if (x == 2) this.color = 'purple';
  if (x == 3) this.color = 'red';
};
