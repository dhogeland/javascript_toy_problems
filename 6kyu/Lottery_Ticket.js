function bingo(ticket, win){
  let x = 0;
  for (var i = 0; i < ticket.length; i++) {
    for (var j = 0; j < ticket[i][0].length; j++) {
      if (ticket[i][0].charCodeAt(j) == ticket[i][1]) {
        x++;
        break;
      }
    }
  }
  return x >= win ? 'Winner!' : 'Loser!';
}
